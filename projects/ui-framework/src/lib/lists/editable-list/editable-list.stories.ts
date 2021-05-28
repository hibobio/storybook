import { cloneDeep } from 'lodash';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import { boolean, number, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { ComponentGroupType } from '../../consts';
import { mockText } from '../../mock.const';
import {
  makeArray,
  randomNumber,
  simpleUID,
} from '../../services/utils/functional-utils';
import { StoryBookLayoutModule } from '../../story-book-layout/story-book-layout.module';
import { ListSortType } from './editable-list.enum';
import { editableListMock } from './editable-list.mock';
import { EditableListModule } from './editable-list.module';
import { EditableListUtils } from './editable-list.static';

const story = storiesOf(ComponentGroupType.Lists, module).addDecorator(
  withKnobs
);

const componentTemplate1 = `
<b-editable-list [list]="list === 'Ascending'
                        ? listMockAsc
                        : list === 'Descending'
                        ? listMockDesc
                        : listMock"
                 [sortType]="sortType !== 0 ? sortType : undefined"
                 [allowedActions]="{
                   sort: allowSort,
                   add: allowAdd,
                   remove: allowRemove,
                   order: allowOrder,
                   edit: allowEdit
                 }"
                 [maxChars]="maxChars"
                 (changed)="onListUpdate($event)"
                 (inputChanged)="onInputChange($event)"
                 >
</b-editable-list>
`;

const template = `
<b-story-book-layout [title]="'Editable List'">
  <div>
  ${componentTemplate1}
  </div>
</b-story-book-layout>
`;

const note = `
  ## Editable List

  #### Module
  *EditableListModule*

  #### Properties
  Name | Type | Description | Default value
  --- | --- | --- | ---
  [list] | SelectOption[] | flat list of SelectOption to edit | []
  [allowedActions] | EditableListActions | what actions are available (sort, add, remove)\
   | EDITABLE-LIST<wbr>-ALLOWED-ACTIONS-DEF (all enabled)
  [sortType] | ListSortType | this input can be used to control sorting from outside \
   (provided sortType will be applied to current list). <br>\
   **Note**:  you don't need to provide [sortType] input to describe list sorting, \
   it checks sorting automatically. | &nbsp;
  [maxChars] | number | Maximum length of text for option input | 100
  (changed) | EventEmitter<wbr>&lt;EditableListState&gt; | emits updated list | &nbsp;
  (inputChanged) | EventEmitter&lt;string&gt; | Outputs input value \
  (for external validation) | &nbsp;


  ~~~
<b-editable-list [list]="list"
                 [sortType]="sortType"
                 [allowedActions]="allowedActions"
                 (changed)="onListUpdate($event)"
                 (inputChanged)="onInputChange($event)>
</b-editable-list>
  ~~~

  #### interface EditableListState
  Name | Type | Description
  --- | --- | ---
  delete | string[] | array of removed items
  create | string[] | array of added items
  sortType | ListSortType | list sorting (Asc/Desc/UserDefined)
  order | string[] | array of item values, representing item order (including new items)
  list | SelectOption[] | current list of {id,value} \
  items (including new items, which will have generated ids that start with 'new-')

`;

const listMock = makeArray(1000).map((_, index) => ({
  id: simpleUID(),
  value: mockText(randomNumber(2, 4)),
  selected: randomNumber() > 90,
  canBeDeleted: true,
})); //cloneDeep(editableListMock);

const listMockAsc = cloneDeep(editableListMock);
const listMockDesc = cloneDeep(editableListMock);
EditableListUtils.sortList(listMockAsc, ListSortType.Asc);
EditableListUtils.sortList(listMockDesc, ListSortType.Desc);

story.add(
  'Editable List',
  () => {
    return {
      template,
      props: {
        listMock: listMock,
        listMockAsc: listMockAsc,
        listMockDesc: listMockDesc,

        list: select(
          'list',
          ['Ascending', 'Descending', 'Custom order'],
          'Custom order',
          'Props'
        ),

        sortType: select('sortType', [0, 'Asc', 'Desc'], 0, 'Props'),
        maxChars: number('maxChars', 50, {}, 'Props'),
        allowSort: boolean('allowSort', true, 'Props'),
        allowAdd: boolean('allowAdd', true, 'Props'),
        allowRemove: boolean('allowRemove', true, 'Props'),
        allowOrder: boolean('allowOrder', true, 'Props'),
        allowEdit: boolean('allowEdit', true, 'Props'),
        allowActions: select('sortType', [0, 'Asc', 'Desc'], 0, 'Props'),
        onListUpdate: action('onListUpdate'),
        onInputChange: action('onInputChange'),
      },
      moduleMetadata: {
        imports: [
          CommonModule,
          BrowserAnimationsModule,
          StoryBookLayoutModule,
          EditableListModule,
        ],
      },
    };
  },
  { notes: { markdown: note } }
);
