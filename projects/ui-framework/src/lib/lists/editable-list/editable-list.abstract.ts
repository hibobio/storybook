import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ButtonSize, ButtonType } from '../../buttons/buttons.enum';
import { Button } from '../../buttons/buttons.interface';
import { InputAutoCompleteOptions } from '../../form-elements/input/input.enum';
import { Icons } from '../../icons/icons.enum';
import {
  applyChanges,
  cloneDeepSimpleObject,
  getEventPath,
  hasChanges,
  notFirstChanges,
  unsubscribeArray,
} from '../../services/utils/functional-utils';
import { insideZone } from '../../services/utils/rxjs.operators';
import { UtilsService } from '../../services/utils/utils.service';
import { itemID, SelectOption } from '../list.interface';
import { EDITABLE_LIST_ALLOWED_ACTIONS_DEF } from './editable-list.const';
import { ListActionType, ListSortType } from './editable-list.enum';
import {
  EditableListActions,
  EditableListState,
} from './editable-list.interface';
import { EditableListUtils } from './editable-list.static';

const LIST_EDIT_BTN_BASE: Button = {
  size: ButtonSize.small,
  throttle: 150,
  swallow: true,
};

@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class BaseEditableListElement
  implements OnChanges, OnInit, OnDestroy {
  constructor(
    protected hostElRef: ElementRef<HTMLElement>,
    protected zone: NgZone,
    protected cd: ChangeDetectorRef,
    protected translateService: TranslateService,
    protected utilsService: UtilsService
  ) {}

  @ViewChild('header') headerElRef: ElementRef<HTMLElement>;
  @ViewChild('list') listElRef: ElementRef<HTMLElement>;
  @ViewChild('addItemInput') addItemInput: ElementRef<HTMLInputElement>;
  @ViewChildren('editItemInput') editItemInputs: QueryList<
    ElementRef<HTMLInputElement>
  >;

  @Input() list: SelectOption[] = [];
  @Input() sortType: ListSortType;
  @Input() allowedActions: EditableListActions = {
    ...EDITABLE_LIST_ALLOWED_ACTIONS_DEF,
  };
  @Input() maxChars = 100;

  @Output() changed: EventEmitter<EditableListState> = new EventEmitter();

  readonly order = ListSortType;
  readonly autoComplete = InputAutoCompleteOptions;

  public currentAction: ListActionType;
  public addedItem = false;
  private subs: Subscription[] = [];

  readonly addButton: Button = {
    ...LIST_EDIT_BTN_BASE,
    type: ButtonType.secondary,
    icon: Icons.add,
    text: this.translateService.instant('common.add'),
  };

  readonly removeButton: Button = {
    ...LIST_EDIT_BTN_BASE,
    type: ButtonType.negative,
    text: this.translateService.instant('common.remove'),
  };

  readonly cancelButton: Button = {
    ...LIST_EDIT_BTN_BASE,
    type: ButtonType.tertiary,
    text: this.translateService.instant('common.cancel'),
  };

  readonly doneButton: Button = {
    ...LIST_EDIT_BTN_BASE,
    type: ButtonType.secondary,
    text: this.translateService.instant('common.done'),
  };

  readonly sortButton: Button = {
    ...LIST_EDIT_BTN_BASE,
    type: ButtonType.tertiary,
    throttle: false,
    icons: {
      [ListSortType.Asc]: Icons.sort_asc,
      [ListSortType.Desc]: Icons.sort_desc,
      [ListSortType.UserDefined]: Icons.sort_asc,
    },
    texts: {
      [ListSortType.Asc]: this.translateService.instant(
        'list-editor.editor.sortAsc'
      ),
      [ListSortType.Desc]: this.translateService.instant(
        'list-editor.editor.sortDesc'
      ),
      [ListSortType.UserDefined]: this.translateService.instant(
        'list-editor.editor.sortCustom'
      ),
    },
  } as Button;

  readonly deleteButton: Button = {
    ...LIST_EDIT_BTN_BASE,
    type: ButtonType.tertiary,
    icon: Icons.delete,
  };

  readonly editButton: Button = {
    ...LIST_EDIT_BTN_BASE,
    type: ButtonType.tertiary,
    icon: Icons.edit,
  };

  readonly menuItems = [
    {
      id: 'remove',
      label: this.translateService.instant('common.remove'),
    },
    {
      id: 'edit',
      label: this.translateService.instant('common.rename'),
    },
  ];

  readonly listState: EditableListState = {
    list: [],
    newItem: {
      id: null,
      value: '',
    },
  };

  ngOnChanges(changes: SimpleChanges): void {
    applyChanges(
      this,
      changes,
      {
        list: [],
        allowedActions: { ...EDITABLE_LIST_ALLOWED_ACTIONS_DEF },
      },
      [],
      true
    );

    if (hasChanges(changes, ['list'])) {
      this.listState.list = cloneDeepSimpleObject(this.list);
      this.sortType = EditableListUtils.getListSortType(this.listState.list);
    }

    if (hasChanges(changes, ['sortType'], true)) {
      this.sortList(this.listState.list, null, this.sortType);
    }

    if (notFirstChanges(changes) && !this.cd['destroyed']) {
      this.cd.detectChanges();
    }
  }

  ngOnInit(): void {
    this.subs.push(
      this.utilsService
        .getWindowClickEvent(true)
        .pipe(
          filter((event: MouseEvent) => {
            const path = getEventPath(event);
            return (
              (this.currentAction === 'add' &&
                !path.includes(this.headerElRef.nativeElement)) ||
              (this.currentAction !== 'add' &&
                !path.includes(this.listElRef.nativeElement))
            );
          }),
          insideZone(this.zone)
        )
        .subscribe((e) => {
          console.log('click outside', e);
          this.cancel();
        })
    );
  }

  ngOnDestroy(): void {
    unsubscribeArray(this.subs);
  }

  public abstract cancel(action?: ListActionType): void;
  public abstract removeItem(item: SelectOption, index: number): void;
  public abstract editItem(item: SelectOption, index: number): void;

  public onMenuAction(
    action: ListActionType,
    item: SelectOption,
    index: number
  ): void {
    action === 'remove'
      ? this.removeItem(item, index)
      : action === 'edit'
      ? this.editItem(item, index)
      : null;
  }

  public onDragStart(): void {
    this.currentAction = 'order';
    this.addedItem = false;
    this.cd.detectChanges();
  }

  public onDrop({ previousIndex, currentIndex }: CdkDragDrop<any>): void {
    console.log('onDrop', previousIndex, currentIndex);
    this.currentAction = null;

    if (previousIndex !== currentIndex) {
      this.listState.list.splice(
        currentIndex,
        0,
        this.listState.list.splice(previousIndex, 1)[0]
      );
      this.sortType = ListSortType.UserDefined;
      this.transmit();
    }
    this.cd.detectChanges();
  }

  public sortList(
    list: SelectOption[] = this.listState.list,
    order: ListSortType = null,
    currentOrder: ListSortType = this.sortType
  ): void {
    this.sortType = EditableListUtils.sortList(list, order, currentOrder);
    this.addedItem = false;
    this.transmit();
  }

  protected transmit(): void {
    this.changed.emit({
      list: cloneDeepSimpleObject(this.listState.list),
    });
  }

  public listTrackBy(index: number, item: SelectOption): itemID {
    return (
      (item.id !== undefined && item.id) || item.value || JSON.stringify(item)
    );
  }
}
