import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  SimpleChange
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { chipOptionsMock } from '../../../../ui-framework/src/lib/form-elements/chip-input/chip-input.mock';
import {
  isString,
  isArray
} from '../../../../ui-framework/src/lib/services/utils/functional-utils';

@Component({
  selector: 'app-form-elements-test',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsTestComponent implements OnInit, OnDestroy {
  constructor() {}

  allFormElements = [
    'bInput',
    'bTextarea',
    'bDatepicker',
    'bChipinput',
    'bSocial',
    'bCheckbox',
    'bRadio'
    // 'bSplitInput'
  ];

  global_visibleComponents = this.allFormElements.reduce((acc, comp) => {
    return { ...acc, [comp]: true };
  }, {});

  global_formControlEnabled = true;
  global_directValueInput = false;
  global_setInputProgrammatically = false;
  global_setValEmit = true;
  global_disabled = false;
  global_required = true;
  global_maxChars = 30;
  global_numberOfCustEvents = 2;
  global_consoleLog = false;

  globalFormControlStartValues = {
    null: null,
    empty: '',
    undefined: undefined,
    string: 'Some value',
    number: 123,
    true: true,
    false: false,
    array: ['a', 'b', 'c'],
    object: { a: 'a', b: 'b', c: 'c' }
  };
  globalFormControlStartValue = this.globalFormControlStartValues.null;

  global_warn = false;
  global_warn_value = 'Warning message';
  global_error = false;
  global_error_value = 'Error message';

  ///////////////////////////////////

  @ViewChild('bInput') private bInput_component;
  bInput_SubscrValue;
  bInput_EventValue;
  bInput_SubscrCounter = 0;
  bInput_EventCounter = 0;
  bInput_label = 'Input label';
  bInput_placeholder = 'Input placeholder';
  bInput_value = 'Input value';
  bInput_disabled = this.global_disabled;
  bInput_required = this.global_required;
  bInput_hint = 'Input hint text';
  bInput_warn = this.global_warn ? this.global_warn_value : '';
  bInput_error = this.global_error ? this.global_error_value : '';
  bInput_setValEmit = this.global_setValEmit;
  bInput_updateOn_mode = 'change';
  bInput_subscribtion;
  bInput_formControlEnabled = this.global_formControlEnabled;
  bInput_directValueInput = this.global_directValueInput;
  bInput_setInputProgrammatically = this.global_setInputProgrammatically;
  bInput_maxChars = this.global_maxChars;
  bInput_formSubmitted = false;

  bInput_Form = new FormGroup({
    bInput: new FormControl(this.globalFormControlStartValue, {
      updateOn: this.bInput_updateOn_mode as any
    })
  });
  bInput = this.bInput_Form.get('bInput');

  ///////////////////////////////////

  @ViewChild('bTextarea') private bTextarea_component;
  bTextarea_SubscrValue;
  bTextarea_EventValue;
  bTextarea_SubscrCounter = 0;
  bTextarea_EventCounter = 0;
  bTextarea_label = 'Textarea label';
  bTextarea_placeholder = 'Textarea placeholder';
  bTextarea_value = 'Textarea value';
  bTextarea_disabled = this.global_disabled;
  bTextarea_required = this.global_required;
  bTextarea_hint = 'Textarea hint text';
  bTextarea_warn = this.global_warn ? this.global_warn_value : '';
  bTextarea_error = this.global_error ? this.global_error_value : '';
  bTextarea_setValEmit = this.global_setValEmit;
  bTextarea_updateOn_mode = 'change';
  bTextarea_subscribtion;
  bTextarea_formControlEnabled = this.global_formControlEnabled;
  bTextarea_directValueInput = this.global_directValueInput;
  bTextarea_setInputProgrammatically = this.global_setInputProgrammatically;
  bTextarea_maxChars = this.global_maxChars;
  bTextarea_formSubmitted = false;

  bTextarea_Form = new FormGroup({
    bTextarea: new FormControl(this.globalFormControlStartValue, {
      updateOn: this.bTextarea_updateOn_mode as any
    })
  });
  bTextarea = this.bTextarea_Form.get('bTextarea');

  ///////////////////////////////////

  @ViewChild('bDatepicker') private bDatepicker_component;
  bDatepicker_SubscrValue;
  bDatepicker_EventValue;
  bDatepicker_SubscrCounter = 0;
  bDatepicker_EventCounter = 0;
  bDatepicker_label = 'Datepicker label';
  bDatepicker_placeholder = 'Date placeholder';
  bDatepicker_value = '02/01/2013';
  bDatepicker_dateFormat = '';
  bDatepicker_disabled = this.global_disabled;
  bDatepicker_required = this.global_required;
  bDatepicker_hint = 'Datepicker hint text';
  bDatepicker_warn = this.global_warn ? this.global_warn_value : '';
  bDatepicker_error = this.global_error ? this.global_error_value : '';
  bDatepicker_setValEmit = this.global_setValEmit;
  bDatepicker_updateOn_mode = 'change';
  bDatepicker_subscribtion;
  bDatepicker_formControlEnabled = this.global_formControlEnabled;
  bDatepicker_directValueInput = this.global_directValueInput;
  bDatepicker_setInputProgrammatically = this.global_setInputProgrammatically;
  bDatepicker_formSubmitted = false;

  bDatepicker_Form = new FormGroup({
    bDatepicker: new FormControl(this.globalFormControlStartValue, {
      updateOn: this.bDatepicker_updateOn_mode as any
    })
  });
  bDatepicker = this.bDatepicker_Form.get('bDatepicker');

  ///////////////////////////////////

  @ViewChild('bChipinput') private bChipinput_component;
  bChipinput_SubscrValue;
  bChipinput_EventValue;
  bChipinput_SubscrCounter = 0;
  bChipinput_EventCounter = 0;
  bChipinput_label = 'Chip Input label';
  bChipinput_placeholder = 'Chip Input placeholder';
  bChipinput_value = 'petting, fisting, rimming';
  bChipinput_options = chipOptionsMock;
  bChipinput_acceptNew = true;
  bChipinput_disabled = this.global_disabled;
  bChipinput_required = this.global_required;
  bChipinput_hint = 'Chip Input hint text';
  bChipinput_warn = this.global_warn ? this.global_warn_value : '';
  bChipinput_error = this.global_error ? this.global_error_value : '';
  bChipinput_setValEmit = this.global_setValEmit;
  bChipinput_updateOn_mode = 'change';
  bChipinput_subscribtion;
  bChipinput_formControlEnabled = this.global_formControlEnabled;
  bChipinput_directValueInput = this.global_directValueInput;
  bChipinput_setInputProgrammatically = this.global_setInputProgrammatically;
  bChipinput_formSubmitted = false;

  bChipinput_Form = new FormGroup({
    bChipinput: new FormControl(this.globalFormControlStartValue, {
      updateOn: this.bChipinput_updateOn_mode as any
    })
  });
  bChipinput = this.bChipinput_Form.get('bChipinput');

  ///////////////////////////////////

  @ViewChild('bSocial') private bSocial_component;
  bSocial_SubscrValue;
  bSocial_EventValue;
  bSocial_SubscrCounter = 0;
  bSocial_EventCounter = 0;
  bSocial_type = 'facebook';
  bSocial_label = 'Social Input label';
  bSocial_placeholder = 'Your Name';
  bSocial_value = 'Social Input value';
  bSocial_disabled = this.global_disabled;
  bSocial_required = this.global_required;
  bSocial_hint = 'Social Input hint text';
  bSocial_warn = this.global_warn ? this.global_warn_value : '';
  bSocial_error = this.global_error ? this.global_error_value : '';
  bSocial_setValEmit = this.global_setValEmit;
  bSocial_updateOn_mode = 'change';
  bSocial_subscribtion;
  bSocial_formControlEnabled = this.global_formControlEnabled;
  bSocial_directValueInput = this.global_directValueInput;
  bSocial_setInputProgrammatically = this.global_setInputProgrammatically;
  bSocial_formSubmitted = false;

  bSocial_Form = new FormGroup({
    bSocial: new FormControl(this.globalFormControlStartValue, {
      updateOn: this.bSocial_updateOn_mode as any
    })
  });
  bSocial = this.bSocial_Form.get('bSocial');

  ///////////////////////////////////

  @ViewChild('bCheckbox') private bCheckbox_component;
  bCheckbox_SubscrValue;
  bCheckbox_EventValue;
  bCheckbox_SubscrCounter = 0;
  bCheckbox_EventCounter = 0;
  bCheckbox_label = 'Checkbox label';
  bCheckbox_placeholder = 'Checkbox Placeholder';
  bCheckbox_value = true;
  bCheckbox_indeterminate = false;
  bCheckbox_disabled = this.global_disabled;
  bCheckbox_required = this.global_required;
  bCheckbox_hint = 'Checkbox hint';
  bCheckbox_warn = this.global_warn ? this.global_warn_value : '';
  bCheckbox_error = this.global_error ? this.global_error_value : '';
  bCheckbox_setValEmit = this.global_setValEmit;
  bCheckbox_updateOn_mode = 'change';
  bCheckbox_subscribtion;
  bCheckbox_formControlEnabled = this.global_formControlEnabled;
  bCheckbox_directValueInput = this.global_directValueInput;
  bCheckbox_setInputProgrammatically = this.global_setInputProgrammatically;
  bCheckbox_formSubmitted = false;

  bCheckbox_Form = new FormGroup({
    bCheckbox: new FormControl(this.globalFormControlStartValue, {
      updateOn: this.bCheckbox_updateOn_mode as any
    })
  });
  bCheckbox = this.bCheckbox_Form.get('bCheckbox');

  ///////////////////////////////////

  @ViewChild('bRadio') private bRadio_component;
  bRadio_SubscrValue;
  bRadio_EventValue;
  bRadio_SubscrCounter = 0;
  bRadio_EventCounter = 0;
  bRadio_label = 'Radio button label';
  bRadio_value = 'Option one';
  bRadio_options = ['Option one', 'Option two', 'Option three'];
  bRadio_direction = 'row';
  bRadio_disabled = this.global_disabled;
  bRadio_required = this.global_required;
  bRadio_hint = 'Radio hint';
  bRadio_warn = this.global_warn ? this.global_warn_value : '';
  bRadio_error = this.global_error ? this.global_error_value : '';
  bRadio_setValEmit = this.global_setValEmit;
  bRadio_updateOn_mode = 'change';
  bRadio_subscribtion;
  bRadio_formControlEnabled = this.global_formControlEnabled;
  bRadio_directValueInput = this.global_directValueInput;
  bRadio_setInputProgrammatically = this.global_setInputProgrammatically;
  bRadio_formSubmitted = false;

  bRadio_Form = new FormGroup({
    bRadio: new FormControl(this.globalFormControlStartValue, {
      updateOn: this.bRadio_updateOn_mode as any
    })
  });
  bRadio = this.bRadio_Form.get('bRadio');

  ///////////////////////////////////

  currencies = [
    { value: 'AED', serverId: null },
    { value: 'ANG', serverId: null },
    { value: 'AUD', serverId: null },
    { value: 'AZN', serverId: null },
    { value: 'BAM', serverId: null },
    { value: 'BGN', serverId: null },
    { value: 'BRL', serverId: null },
    { value: 'BTC', serverId: null },
    { value: 'BWP', serverId: null },
    { value: 'CAD', serverId: null },
    { value: 'CHF', serverId: null },
    { value: 'CLP', serverId: null },
    { value: 'CNY', serverId: null },
    { value: 'COP', serverId: null },
    { value: 'CZK', serverId: null },
    { value: 'DKK', serverId: null },
    { value: 'EGP', serverId: null },
    { value: 'EUR', serverId: null },
    { value: 'GBP', serverId: null },
    { value: 'HKD', serverId: null },
    { value: 'HUF', serverId: null },
    { value: 'IDR', serverId: null },
    { value: 'ILS', serverId: null },
    { value: 'INR', serverId: null },
    { value: 'JPY', serverId: null },
    { value: 'KES', serverId: null },
    { value: 'KRW', serverId: null },
    { value: 'MAD', serverId: null },
    { value: 'MMK', serverId: null },
    { value: 'MXN', serverId: null },
    { value: 'MYR', serverId: null },
    { value: 'NGN', serverId: null },
    { value: 'NOK', serverId: null },
    { value: 'NPR', serverId: null },
    { value: 'NZD', serverId: null },
    { value: 'PEN', serverId: null },
    { value: 'PHP', serverId: null },
    { value: 'PLN', serverId: null },
    { value: 'RON', serverId: null },
    { value: 'RUB', serverId: null },
    { value: 'SEK', serverId: null },
    { value: 'SGD', serverId: null },
    { value: 'THB', serverId: null },
    { value: 'TRY', serverId: null },
    { value: 'TWD', serverId: null },
    { value: 'TZS', serverId: null },
    { value: 'UAH', serverId: null },
    { value: 'USD', serverId: null },
    { value: 'UYU', serverId: null },
    { value: 'VND', serverId: null },
    { value: 'XOF', serverId: null },
    { value: 'ZAR', serverId: null }
  ];

  optionsMock = Array.from(Array(1), (_, i) => {
    return {
      groupName: 'all currencies',
      options: this.currencies.map(currency => ({
        value: currency.value,
        id: currency.value,
        selected: null
      }))
    };
  });

  @ViewChild('bSplitInput') private bSplitInput_component;
  bSplitInput_SubscrValue;
  bSplitInput_EventValue;
  bSplitInput_SubscrCounter = 0;
  bSplitInput_EventCounter = 0;
  bSplitInput_label = 'Input label';
  bSplitInput_placeholder = 'Input placeholder';
  bSplitInput_value = {
    inputValue: 100,
    selectValue: 'AED'
  };
  bSplitInput_selectOptions = this.optionsMock;
  bSplitInput_disabled = this.global_disabled;
  bSplitInput_required = this.global_required;
  bSplitInput_hint = 'Input hint text';
  bSplitInput_warn = this.global_warn ? this.global_warn_value : '';
  bSplitInput_error = this.global_error ? this.global_error_value : '';
  bSplitInput_setValEmit = this.global_setValEmit;
  bSplitInput_updateOn_mode = 'change';
  bSplitInput_subscribtion;
  bSplitInput_formControlEnabled = this.global_formControlEnabled;
  bSplitInput_directValueInput = this.global_directValueInput;
  bSplitInput_setInputProgrammatically = this.global_setInputProgrammatically;
  bSplitInput_formSubmitted = false;

  bSplitInput_Form = new FormGroup({
    bSplitInput: new FormControl(this.globalFormControlStartValue, {
      updateOn: this.bSplitInput_updateOn_mode as any
    })
  });
  bSplitInput = this.bSplitInput_Form.get('bSplitInput');

  ///////////////////////////////////

  setValue(name) {
    if (this[name]) {
      this[name].setValue(this[name + '_value'], {
        emitEvent: this[name + '_setValEmit']
      });
    }
  }

  onValueInput(name, event, parse = false) {
    const value = parse ? JSON.parse(event.target.value) : event.target.value;
    if (this[name + '_setInputProgrammatically']) {
      event.preventDefault();
      this[name + '_component'].value = value;
      this[name + '_component'].ngOnChanges({
        value: new SimpleChange(null, value, false)
      });
    } else {
      this[name + '_value'] = value;
    }
  }

  onEvent(name, $event) {
    if (!isString($event)) {
      $event = JSON.stringify($event);
    }

    const value =
      this.global_numberOfCustEvents === 1
        ? $event
        : (this[name + '_EventValue']
            ? this[name + '_EventValue']
                .split('\n')
                .slice((this.global_numberOfCustEvents - 1) * -1) + ' \n '
            : '') + $event;

    this[name + '_EventValue'] = value;
    this[name + '_EventCounter']++;

    if (this.global_consoleLog) {
      console.log('------------------------');
      console.log(name + ' custom event ' + this[name + '_EventCounter'] + ':');
      console.log($event);
    }
  }

  subscribeToValueChanges(name) {
    this[name + '_subscribtion'] =
      this[name] &&
      this[name].valueChanges.subscribe(value => {
        this[name + '_SubscrValue'] = value;
        this[name + '_SubscrCounter']++;
        if (this.global_consoleLog) {
          console.log('------------------------');
          console.log(
            name + ' valueChanges ' + this[name + '_SubscrCounter'] + ':'
          );
          console.log(this[name + '_SubscrValue']);
        }
      });
  }

  unSubscribeFromValueChanges(name) {
    this[name + '_subscribtion'].unsubscribe();
  }

  subscribeToAll(names) {
    names.forEach(name => {
      this.subscribeToValueChanges(name);
    });
  }

  unSubscribeFromAll(names) {
    names.forEach(name => {
      this.unSubscribeFromValueChanges(name);
    });
  }

  setUpdateOnMode(name, mode) {
    const value = this[name + '_Form'].get(name).value;
    const newControl = new FormControl(value, {
      updateOn: mode
    });
    this[name + '_Form'].setControl(name, newControl);
    this[name] = this[name + '_Form'].get(name);
    this.unSubscribeFromValueChanges(name);
    this.subscribeToValueChanges(name);
  }

  globalControlChange(control) {
    let value;

    if (control.includes('error') || control.includes('warn')) {
      value = this[control + '_value'];
    } else {
      value = this[control];
    }
    this.allFormElements.forEach(name => {
      this[name + '_' + control.split('_')[1]] = value;
    });
  }

  globalClearWarnErrors() {
    this.global_error = false;
    this.global_warn = false;
    this.allFormElements.forEach(name => {
      this[name + '_warn'] = '';
      this[name + '_error'] = '';
    });
  }

  setGlobalFormControlValue(event) {
    const val = this.globalFormControlStartValues[event.target.value];
    this.globalFormControlStartValue = val;

    this.allFormElements.forEach(name => {
      this[name + '_value'] = val;
      this.setValue(name);
    });
  }

  inverseVisibleComponents() {
    Object.keys(this.global_visibleComponents).forEach(key => {
      this.global_visibleComponents[key] = !this.global_visibleComponents[key];
    });
  }

  getProp(prop) {
    return this[prop];
  }

  onSubmit(event, name) {
    if (!this[name + '_Form'].valid) {
      event.preventDefault();
      return false;
    }

    this[name + '_formSubmitted'] = true;
    if (this.global_consoleLog) {
      console.log('------------------------');
      console.log(name + ' form submitted.');
      console.log(this[name + '_Form'].value);
    }
  }

  onSubmitClick(name) {
    const form = document.querySelector(
      'section.' + name + ' form'
    ) as HTMLFormElement;

    let submitButton = document.querySelector(
      'section.' + name + ' .hidden-submit'
    ) as HTMLElement;

    if (!submitButton) {
      submitButton = document.createElement('button');
      (submitButton as any).type = 'submit';
      submitButton.id = 'hidden-submit-' + name;
      submitButton.className = 'hidden-submit';
      submitButton.style.opacity = '0';
      submitButton.style.position = 'absolute';
      submitButton.style.border = '0';
      submitButton.style.padding = '0';
      submitButton.style.overflow = 'hidden';
      submitButton.style.width = '1px';
      submitButton.style.height = '1px';
      submitButton.style.clip = 'rect(0 0 0 0)';
      submitButton.style.margin = '-1px';
      submitButton = form.appendChild(submitButton) as HTMLElement;
    }

    submitButton.click();
  }

  logEvent(event) {
    console.log(event);
  }

  logComponent(name) {
    console.log(this[name + '_component']);
  }

  type(smth) {
    let thisType = String(typeof smth);

    if (smth === null) {
      thisType = 'null';
    }
    if (thisType === 'object' && isArray(smth)) {
      thisType = 'array';
    }
    return thisType;
  }

  ///////////////////////////////////

  ngOnInit() {
    this.subscribeToAll(this.allFormElements);
  }

  ngOnDestroy() {
    this.unSubscribeFromAll(this.allFormElements);
  }
}
