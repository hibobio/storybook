import {
  Input,
  HostBinding,
  SimpleChanges,
  OnChanges,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import {
  simpleUID,
  asArray,
  isNullOrUndefined,
  cloneValue,
  applyChanges,
  notFirstChanges,
  chainCall,
  Func,
  cloneArray,
} from '../services/utils/functional-utils';
import { InputEventType } from './form-elements.enum';
import { FormEvents } from './form-elements.enum';
import { TransmitOptions } from './form-elements.interface';

export const TRANSMIT_OPTIONS_DEF: Partial<TransmitOptions> = {
  eventType: [InputEventType.onChange],
  emitterName: FormEvents.changed,
  doPropagate: true,
  addToEventObj: {},
  updateValue: false,
};
export const IGNORE_EVENTS_DEF: InputEventType[] = [
  InputEventType.onWrite,
  InputEventType.onFocus,
  InputEventType.onKey,
];

export abstract class BaseFormElement
  implements ControlValueAccessor, OnChanges {
  protected constructor(protected cd: ChangeDetectorRef) {}

  @Input() label: string;
  @Input() description: string;
  @Input() placeholder: string;
  @Input() value: any;
  @Input() hideLabelOnFocus = false;
  @Input() hintMessage: string;
  @Input() errorMessage: string;
  @Input() warnMessage: string;
  @Input() doPropagate = true;

  public inputFocused: boolean | boolean[] = false;
  public id = simpleUID('bfe-');
  public inputTransformers: Func[] = [];
  public outputTransformers: Func[] = [];
  public baseValue: any;
  public wrapEvent = true;
  public ignoreEvents: InputEventType[] = cloneArray(IGNORE_EVENTS_DEF);

  @Output() changed: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.disabled') @Input() disabled = false;
  @HostBinding('class.required') @Input() required = false;
  @HostBinding('class.readonly') @Input() readonly = false;

  @HostBinding('class.error') get hasError(): boolean {
    return this.errorMessage && !this.disabled;
  }
  @HostBinding('class.warn') get hasWarn(): boolean {
    return this.warnMessage && !this.errorMessage && !this.disabled;
  }
  @HostBinding('class.has-label') get hasLabel(): boolean {
    return this.label && !this.hideLabelOnFocus;
  }
  @HostBinding('class.has-message') get hasMessage(): boolean {
    return (
      !!this.hintMessage ||
      (this.errorMessage && !this.disabled) ||
      (this.warnMessage && !this.disabled)
    );
  }

  protected onNgChanges(changes: SimpleChanges): void {}

  @Input() validateFn: Function = (_: FormControl) => {};

  onTouched: Function = (_: any) => {};

  propagateChange: Function = (_: any) => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = chainCall(this.inputTransformers, value);
    }
    if (isNullOrUndefined(this.value) && this.baseValue !== undefined) {
      this.value = cloneValue(this.baseValue);
    }
  }

  protected transmitValue(
    value: any = this.value,
    options: Partial<TransmitOptions> = {}
  ): void {
    options = {
      ...TRANSMIT_OPTIONS_DEF,
      doPropagate: this.doPropagate,
      ...options,
    };
    const {
      eventType,
      emitterName,
      doPropagate,
      addToEventObj,
      updateValue,
    } = options;

    // If value is undefined, it will not be transmitted.
    // Transformers may intentionally set value to undefined,
    // to prevent transmission
    if (
      value !== undefined &&
      (doPropagate || updateValue || this[emitterName].observers.length > 0)
    ) {
      value = chainCall(this.outputTransformers, value);

      if (value === undefined && this.baseValue !== undefined) {
        value = cloneValue(this.baseValue);
      }
      if (updateValue) {
        this.value = value;
      }

      const allowedEvents = asArray(eventType).filter(
        event => !this.ignoreEvents.includes(event)
      );

      if (emitterName && this[emitterName].observers.length > 0) {
        allowedEvents.forEach(event => {
          this[emitterName].emit(
            this.wrapEvent
              ? {
                  event,
                  value,
                  ...addToEventObj,
                }
              : value
          );
        });
      }

      if (
        doPropagate &&
        allowedEvents.filter(event => event !== InputEventType.onFocus).length >
          0
      ) {
        this.propagateChange(value);
      }

      if (doPropagate && allowedEvents.includes(InputEventType.onBlur)) {
        this.onTouched();
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    applyChanges(this, changes, {}, ['value', 'options']);

    if (changes.value) {
      this.writeValue(changes.value.currentValue);
      this.transmitValue(this.value, { eventType: [InputEventType.onWrite] });
    }

    this.onNgChanges(changes);

    if (notFirstChanges(changes) && !this.cd['destroyed']) {
      this.cd.detectChanges();
    }
  }
}
