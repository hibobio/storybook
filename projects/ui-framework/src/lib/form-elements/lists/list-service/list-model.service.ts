import { Injectable } from '@angular/core';
import { flatten, forEach, map, concat, assign, find, set, includes, filter, every, escapeRegExp, some, compact } from 'lodash';
import { LIST_EL_HEIGHT } from '../list.consts';
import { ListOption, ListHeader, SelectGroupOption } from '../list.interface';

@Injectable()
export class ListModelService {
  constructor() {
  }

  getOptionsModel(
    options: SelectGroupOption[],
    listHeaders: ListHeader[],
    noGroupHeaders: boolean,
  ): ListOption[] {
    const groupOptions = map(options, (group) => {
      const groupHeader: ListHeader = find(listHeaders, header => header.groupName === group.groupName);
      const placeholder = {
        isPlaceHolder: true,
        groupName: group.groupName,
        value: group.groupName,
        id: group.groupName,
        selected: null,
      };

      let virtualOptions;

      if (noGroupHeaders) {
        virtualOptions = map(group.options, option => assign(
          option,
          { groupName: group.groupName, isPlaceHolder: false, selected: null },
        ));
      } else if (groupHeader.isCollapsed) {
        virtualOptions = placeholder;
      } else {
        virtualOptions = concat(
          placeholder,
          map(group.options, option => assign(
            option,
            { groupName: group.groupName, isPlaceHolder: false, selected: null },
          ))
        );
      }

      return virtualOptions;


      return groupHeader.isCollapsed
        ? placeholder
        : concat(
          placeholder,
          map(group.options, option => assign(
            option,
            { groupName: group.groupName, isPlaceHolder: false, selected: null },
          )),
        );
    });
    return flatten(groupOptions);
  }

  getHeadersModel(options: SelectGroupOption[]): ListHeader[] {
    return map(options, group => ({
      groupName: group.groupName,
      isCollapsed: false,
      placeHolderSize: group.options.length * LIST_EL_HEIGHT,
      selected: null,
    }));
  }

  setSelectedOptions(
    listHeaders: ListHeader[],
    listOptions: SelectGroupOption[],
    selectedValues: (string | number)[],
  ): void {
    forEach(listOptions, option => {
      set(option, 'selected', option.isPlaceHolder
        ? null
        : includes(selectedValues, option.id));
    });
    forEach(listHeaders, header => {
      const groupOptions = filter(listOptions, option =>
        option.groupName === header.groupName &&
        !option.isPlaceHolder);
      set(header, 'selected', header.isCollapsed
        ? header.selected
        : every(groupOptions, ['selected', true]));
    });
  }

  getFilteredOptions(
    options: SelectGroupOption[],
    s: string,
  ): SelectGroupOption[] {
    const matcher = new RegExp(escapeRegExp(s), 'i');
    const filteredOptions = map(options, (group) => {
      const filteredGroup = group.groupName.match(matcher) || some(group.options, option => option.value.match(matcher))
        ? assign({}, group, { options: filter(group.options, option => option.value.match(matcher)) })
        : null;
      return filteredGroup;
    });
    return compact(filteredOptions);
  }
}
