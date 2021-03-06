import { Overlay } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, NgZone } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MAT_DATEPICKER_SCROLL_STRATEGY } from '@angular/material/datepicker';

import { SERVER_DATE_FORMAT } from '../../../consts';
import { DOMhelpers } from '../../../services/html/dom-helpers.service';
import { MobileService } from '../../../services/utils/mobile.service';
import { dateOrFail, dateToString } from '../../../services/utils/transformers';
import { UtilsService } from '../../../services/utils/utils.service';
import { WindowRef } from '../../../services/utils/window-ref.service';
import { BaseFormElement } from '../../base-form-element';
import { FormElementKeyboardCntrlService } from '../../services/keyboard-cntrl.service';
import { DateParseService } from '../date-parse-service/date-parse.service';
import { BaseDatepickerElement, CLOSE_SCROLL_STRATEGY_FACTORY } from '../datepicker.abstract';

@Component({
  selector: 'b-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['../../input/input.component.scss', './datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
    {
      provide: MAT_DATEPICKER_SCROLL_STRATEGY,
      deps: [Overlay],
      useFactory: CLOSE_SCROLL_STRATEGY_FACTORY,
    },
    { provide: BaseFormElement, useExisting: DatepickerComponent },
    DateParseService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent extends BaseDatepickerElement {
  constructor(
    protected windowRef: WindowRef,
    protected utilsService: UtilsService,
    protected mobileService: MobileService,
    protected DOM: DOMhelpers,
    protected cd: ChangeDetectorRef,
    protected zone: NgZone,
    protected kbrdCntrlSrvc: FormElementKeyboardCntrlService,
    protected dateParseSrvc: DateParseService,
    protected dateAdapter: DateAdapter<any>
  ) {
    super(windowRef, utilsService, mobileService, DOM, cd, zone, kbrdCntrlSrvc, dateParseSrvc, dateAdapter);

    this.inputTransformers = [dateOrFail];

    this.outputTransformers = [(value: Date): string => dateToString(value, SERVER_DATE_FORMAT)];

    this.baseValue = '';
  }
}
