import { isSameDay } from 'date-fns';
import { Subject } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';

import { Overlay } from '@angular/cdk/overlay';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  NgZone,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

import {
  DISPLAY_DATE_FORMAT_DEF,
  DISPLAY_MONTH_FORMAT_DEF,
  LOCALE_FORMATS,
} from '../../consts';
import { Keys } from '../../enums';
import { ICON_CONFIG } from '../../icons/common-icons.const';
import { Icon } from '../../icons/icon.interface';
import { IconColor, Icons, IconSize } from '../../icons/icons.enum';
import { PanelDefaultPosVer } from '../../popups/panel/panel.enum';
import { DOMhelpers } from '../../services/html/dom-helpers.service';
import { Styles } from '../../services/html/html-helpers.interface';
import {
  cloneValue,
  get,
  hasChanges,
  hasProp,
  isEmpty,
  isKey,
  set,
  simpleUID,
} from '../../services/utils/functional-utils';
import { MobileService } from '../../services/utils/mobile.service';
import { dateOrFail } from '../../services/utils/transformers';
import { UtilsService } from '../../services/utils/utils.service';
import { WindowRef } from '../../services/utils/window-ref.service';
import {
  DateFormat,
  DateFormatFullDate,
  DOMKeyboardEvent,
  DOMMouseEvent,
  LocaleFormat,
} from '../../types';
import { BaseFormElement } from '../base-form-element';
import { InputEventType } from '../form-elements.enum';
import { InputAutoCompleteOptions } from '../input/input.enum';
import { FormElementKeyboardCntrlService } from '../services/keyboard-cntrl.service';
import { DateParseService } from './date-parse-service/date-parse.service';
import { DateAdjust, DatepickerType } from './datepicker.enum';
import {
  DateParseResult,
  DatePickerChangeEvent,
  FormatParserResult,
} from './datepicker.interface';

export function CLOSE_SCROLL_STRATEGY_FACTORY(overlay: Overlay) {
  const strategy = () => overlay.scrollStrategies.close();
  return strategy;
}

@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class BaseDatepickerElement<
    I = Date | string,
    O = DatePickerChangeEvent
  >
  extends BaseFormElement
  implements OnInit, AfterViewInit {
  constructor(
    protected windowRef: WindowRef,
    protected utilsService: UtilsService,
    protected mobileService: MobileService,
    protected DOM: DOMhelpers,
    protected cd: ChangeDetectorRef,
    protected zone: NgZone,
    protected kbrdCntrlSrvc: FormElementKeyboardCntrlService,
    protected dateParseSrvc: DateParseService,
    protected dateAdapter: any
  ) {
    super(cd);

    this.isMobile = this.mobileService.isMobile();

    if (hasProp(this.dateAdapter, 'getFormat', false)) {
      this.dateFormats = {
        [DatepickerType.date]: this.dateAdapter.getFormat(
          LocaleFormat.FullDate
        ),
        [DatepickerType.month]: this.dateAdapter.getFormat(
          LocaleFormat.MonthYear
        ),
      };

      this.dateFormats[DatepickerType.month].format = this.dateFormats[
        DatepickerType.month
      ].format.replace(/y+/g, 'yyyy') as DateFormat;
      this.dateFormats[DatepickerType.month].length.year = 4;
      //
    } else {
      this.dateFormats = {
        [DatepickerType.date]: this.dateParseSrvc.parseFormat(
          DISPLAY_DATE_FORMAT_DEF,
          4
        ),
        [DatepickerType.month]: this.dateParseSrvc.parseFormat(
          DISPLAY_MONTH_FORMAT_DEF,
          4
        ),
      };
    }
  }

  @ViewChild('inputWrap', { static: true }) inputWrap: ElementRef<HTMLElement>;
  @ViewChildren(MatDatepicker) public pickers: QueryList<MatDatepicker<any>>;
  @ViewChildren('input', { read: ElementRef })
  public inputs: QueryList<ElementRef>;
  public input: ElementRef<HTMLInputElement>;

  @Input() value: I;

  @Input() id: string = simpleUID('bdp');

  @Input() minDate: Date | string;
  @Input() maxDate: Date | string;
  @HostBinding('attr.data-type') @Input() type: DatepickerType =
    DatepickerType.date;

  @Input() allowKeyInput = true;
  @Input() dateFormat: DateFormatFullDate;
  @Input() panelClass: string;

  // tslint:disable-next-line: no-output-rename
  @Output('dateChange') changed: EventEmitter<O> = new EventEmitter();

  public isMobile = false;
  public inputFocused: boolean[] = [];
  public dateFormats: { [key in DatepickerType]: FormatParserResult };
  public panelPosition: PanelDefaultPosVer;

  protected overlayStylesDef: Styles = {};

  private allowInputBlur = !this.allowKeyInput;

  readonly types = DatepickerType;
  readonly panelPos = PanelDefaultPosVer;
  readonly dateAdjust = DateAdjust;
  readonly autoComplete = InputAutoCompleteOptions;

  private doneFirstChange = false;
  private useFormatForPlaceholder = false;

  readonly iconColor = IconColor;
  readonly clearIcn: Icon = ICON_CONFIG.reset;
  readonly dateIcn: Icon = {
    icon: Icons.date,
    size: IconSize.medium,
  };

  private transmitDebouncer$: Subject<void> = new Subject().pipe(
    debounceTime(100)
  ) as Subject<void>;

  protected doOnPickerOpen(picker: MatDatepicker<any>): void {}

  ngOnInit(): void {
    this.subs.push(
      //
      this.transmitDebouncer$.subscribe(() => {
        this.transmitValue(this.value, {
          eventType: [InputEventType.onBlur],
          addToEventObj: { date: this.value },
        });
      }),

      this.utilsService
        .getResizeEvent(true)
        .pipe(
          throttleTime(100, undefined, {
            leading: false,
            trailing: true,
          })
        )
        .subscribe(() => {
          const isMobile = this.mobileService.isMobile();

          if (isMobile !== this.isMobile) {
            this.isMobile = isMobile;
            this.cd.detectChanges();
          }

          if (!this.isMobile) {
            this.allPickers((picker) => this.closePicker(picker));
          }
        })
    );

    if (this.value) {
      this.cd.detectChanges();
    }

    if (isEmpty(this.value)) {
      this.value = cloneValue(this.baseValue);
    }
  }

  ngAfterViewInit(): void {
    this.input = this.inputs.toArray()[0];

    super.ngAfterViewInit();

    if (!this.doneFirstChange) {
      this.ngOnChanges({});
    }
  }

  // extends BaseFormElement's ngOnChanges
  onNgChanges(changes: SimpleChanges): void {
    if (!changes.value || Object.keys(changes).length !== 1) {
      this.allPickers((picker) => this.closePicker(picker));
    }

    if (hasChanges(changes, ['minDate'])) {
      this.minDate = dateOrFail(changes.minDate.currentValue);
    }

    if (hasChanges(changes, ['maxDate'])) {
      this.maxDate = dateOrFail(changes.maxDate.currentValue);
    }

    if (
      hasChanges(changes, ['allowKeyInput']) &&
      this.allowKeyInput !== ('' as any)
    ) {
      this.allowInputBlur = !this.allowKeyInput;
    }

    if (!this.type) {
      this.type = DatepickerType.date;
    }

    if (hasChanges(changes, ['dateFormat'], true)) {
      if (
        this.dateFormat.toUpperCase() !==
        this.dateFormats[DatepickerType.date].format.toUpperCase()
      ) {
        this.dateFormats = {
          [DatepickerType.date]: this.dateParseSrvc.parseFormat(
            this.dateFormat,
            4
          ),
          [DatepickerType.month]: this.dateParseSrvc.parseFormat(
            hasProp(this.dateAdapter, 'getLocaleFormat', false)
              ? this.dateAdapter.getLocaleFormat(
                  this.dateFormat,
                  LocaleFormat.MonthYear
                )
              : get(
                  get(LOCALE_FORMATS, this.dateFormat.toUpperCase()),
                  LocaleFormat.MonthYear
                ),
            4
          ),
        };
      }
    }

    if (
      (!this.placeholder && !(this.hideLabelOnFocus && this.label)) ||
      this.useFormatForPlaceholder
    ) {
      this.placeholder = this.dateFormats[this.type].format.toLowerCase();
      this.useFormatForPlaceholder = true;
      this.cd.detectChanges();
    }

    if (hasChanges(changes, ['readonly'])) {
      this.inputFocused = this.inputFocused.map(() => false);
    }

    this.doneFirstChange = true;
  }

  public transmit(value: Date = NaN as any, path = 'value') {
    const currentValue: Date = get(this, path);

    if (
      (currentValue && value && isSameDay(currentValue, value)) ||
      value !== value
    ) {
      this.writingValue = false;
      return;
    }

    set(this, path, value);

    !this.writingValue && this.transmitDebouncer$.next();
  }

  public onInputChange(parsed: DateParseResult, index: number = 0): void {
    let picker = this.getPicker(index);

    if (picker) {
      picker.select(parsed.date);
    } else {
      setTimeout(() => {
        this.writingValue = true;
        picker = this.getPicker(index);
        picker.select(parsed.date);
      }, 0);
    }
  }

  public onPickerMonthSelect(date: Date, index: number = 0): void {
    if (this.type === DatepickerType.month) {
      const picker = this.getPicker(index);
      this.allowInputBlur = true;
      picker.select(date);
      this.closePicker(picker);
    }
  }

  public clearInput(index: number = 0, path = 'value'): void {
    this.closePicker(index);
    set(this, path, null);
    this.cd.detectChanges();
  }

  public onInputFocus(index: number = 0): void {
    if (!this.disabled) {
      this.inputFocused[index] = true;
      if (this.allowKeyInput && !this.isMobile) {
        this.getInput(index).select();
      }
      if (!this.isMobile) {
        this.openPicker(index);
      }
    }
  }

  public onInputBlur(index: number = 0): void {
    const picker = this.getPicker(index);
    if (
      this.allowKeyInput &&
      !this.allowInputBlur &&
      !this.isMobile &&
      picker.opened
    ) {
      this.getInput(index).focus();
    } else if (!this.allowInputBlur || !picker.opened) {
      this.inputFocused[index] = false;
    }
    this.allowInputBlur = false;
  }

  public onInputMouseDown(event: Event | MouseEvent): void;
  public onInputMouseDown(event: DOMMouseEvent<HTMLInputElement>): void {
    if (event.button === 2) {
      event.preventDefault();
    }
  }

  public onInputKeydown(event: Event | KeyboardEvent, index?: number): void;
  public onInputKeydown(
    event: DOMKeyboardEvent<HTMLInputElement>,
    index: number = 0
  ): void {
    if (isKey(event.key, Keys.enter) || isKey(event.key, Keys.escape)) {
      this.closePicker(index);
    }

    if (isKey(event.key, Keys.tab)) {
      const picker = this.getPicker(index);

      if (picker.opened && !this.isMobile) {
        event.preventDefault();
        this.allowInputBlur = true;

        const elToFocus = this.getPickerPanelElements(
          picker,
          '.mat-calendar-body td[tabindex="0"]'
        )[0];
        if (elToFocus) {
          elToFocus.focus();
        }
      }
    }

    if (isKey(event.key, Keys.delete) || isKey(event.key, Keys.backspace)) {
      const target = event.target;

      if (target.selectionEnd - target.selectionStart === target.value.length) {
        const clearBtn: HTMLElement = this.DOM.getNextSibling(
          target,
          '.bfe-suffix'
        )?.children[0] as HTMLElement;

        clearBtn?.click();
      }
    }
  }

  public onPickerOpen(index: number = 0): void {
    this.inputFocused[index] = true;
    if (this.allowKeyInput && !this.isMobile) {
      this.getInput(index).focus();
    }
    const picker = this.getPicker(index);

    this.zone.runOutsideAngular(() => {
      this.windowRef.nativeWindow.requestAnimationFrame(() => {
        const panel = this.getPickerPanel(picker);

        if (!this.isMobile && panel.popup) {
          this.DOM.setCssProps(panel.popup, this.getOverlayStyles(panel.popup));

          const popupStyles = panel.popup.getAttribute('style');

          if (popupStyles.includes('bottom')) {
            this.panelPosition = PanelDefaultPosVer.above;
          }
          if (popupStyles.includes('top')) {
            this.panelPosition = PanelDefaultPosVer.below;
          }
          this.cd.detectChanges();
        }

        if (this.isMobile && panel.dialog) {
          this.DOM.setCssProps(panel.dialog, this.overlayStylesDef);
        }
      });
    });

    this.doOnPickerOpen(picker);
  }

  public onPickerClose(index: number = 0): void {
    if (this.allowKeyInput && !this.isMobile) {
      this.getInput(index).setSelectionRange(11, 11);
    } else {
      this.getInput(index).blur();
    }
    this.panelPosition = null;
  }

  protected getPicker(index: string | number): MatDatepicker<any> {
    return this.pickers && this.pickers.length > 0
      ? this.pickers.toArray()[parseInt(index as string, 10)]
      : null;
  }

  protected allPickers(func: (p: MatDatepicker<any>) => any): void {
    if (this.pickers && this.pickers.length > 0) {
      this.pickers
        .toArray()
        .forEach((picker: MatDatepicker<any>) => func(picker));
    }
  }

  protected getInput(index: string | number): HTMLInputElement {
    return this.inputs && this.inputs.length > 0
      ? this.inputs.toArray()[parseInt(index as string, 10)].nativeElement
      : null;
  }

  protected allInputs(func: (p: HTMLInputElement) => any): void {
    if (this.inputs && this.inputs.length > 0) {
      this.inputs
        .toArray()
        .forEach((input: ElementRef<HTMLInputElement>) =>
          func(input.nativeElement)
        );
    }
  }

  protected getOverlayStyles(panelEl): Styles {
    if (this.inputWrap) {
      const overlayBox = this.inputWrap.nativeElement.getBoundingClientRect();
      const datePickerPanel = panelEl.querySelector('.b-datepicker-panel');
      const matCalBox =
        datePickerPanel && datePickerPanel.getBoundingClientRect();

      const alignedToRight =
        matCalBox &&
        matCalBox.width > overlayBox.width &&
        panelEl
          .querySelector('.mat-datepicker-content')
          .style.cssText.includes('right');

      const width = matCalBox
        ? Math.max(overlayBox.width, matCalBox.width)
        : overlayBox.width;

      return {
        ...this.overlayStylesDef,
        'pointer-events': 'none',
        width: width + 'px',
        left: !alignedToRight
          ? overlayBox.left + 'px'
          : overlayBox.left - (width - overlayBox.width) + 'px',
        right: alignedToRight
          ? overlayBox.right - overlayBox.width + 'px'
          : overlayBox.right -
            overlayBox.width -
            (width - overlayBox.width) +
            'px',
      };
    }
    return {};
  }

  protected getPickerPanel(
    picker: MatDatepicker<any>
  ): { dialog: HTMLElement; popup: HTMLElement } {
    const panel = {
      dialog: null,
      popup: null,
    };

    // desktop
    if (picker['_popupRef']) {
      panel.popup = picker['_popupRef'].overlayElement;
    }
    // mobile
    if (
      picker['_dialogRef'] &&
      picker['_dialogRef']._overlayRef &&
      picker['_dialogRef']._overlayRef.overlayElement
    ) {
      panel.dialog = picker['_dialogRef']._overlayRef.overlayElement;
    }

    return panel;
  }

  public getPickerPanelElements(
    picker: MatDatepicker<any>,
    selector: string
  ): HTMLElement[] {
    const panel = this.getPickerPanel(picker);
    if (!panel.popup && !panel.dialog) {
      return [];
    }
    const elements = (
      (!this.isMobile && panel.popup) ||
      (this.isMobile && panel.dialog)
    ).querySelectorAll<HTMLElement>(selector);
    return Array.from(elements);
  }

  public openPicker(picker: MatDatepicker<any> | number = 0): void {
    if (typeof picker === 'number') {
      picker = this.getPicker(picker);
    }
    if (!picker.opened && !this.disabled) {
      picker.open();
    }
  }

  public closePicker(picker: MatDatepicker<any> | number = 0): void {
    if (typeof picker === 'number') {
      picker = this.getPicker(picker);
    }
    if (picker.opened) {
      picker.close();
    }
  }

  public isInputEmpty(index: number = 0): boolean {
    const input = this.getInput(index);
    return !input || !input.value.trim();
  }
}
