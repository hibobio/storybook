import { MockComponent } from 'ng-mocks';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IconsModule } from '../../icons/icons.module';
import { EventManagerPlugins } from '../../services/utils/eventManager.plugins';
import { simpleChange } from '../../services/utils/functional-utils';
import {
  elementFromFixture,
  getPseudoContent,
  inputValue as _inputValue,
} from '../../services/utils/test-helpers';
import { DateParseService } from '../date-picker/date-parse-service/date-parse.service';
import { FormElementLabelComponent } from '../form-element-label/form-element-label.component';
import { InputMessageModule } from '../input-message/input-message.module';
import { FormElementKeyboardCntrlService } from '../services/keyboard-cntrl.service';
import { TimePickerComponent } from './timepicker.component';

describe('TimePickerComponent', () => {
  let component: TimePickerComponent;
  let fixture: ComponentFixture<TimePickerComponent>;
  let componentElem: HTMLElement;
  let labelElem: HTMLElement;
  let labelComp: FormElementLabelComponent;
  let hhInputElem: HTMLInputElement;
  let mmInputElem: HTMLInputElement;
  let messageElem: HTMLElement;

  let inputValue: (input, value) => void;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          TimePickerComponent,
          MockComponent(FormElementLabelComponent),
        ],
        imports: [NoopAnimationsModule, InputMessageModule, IconsModule],
        providers: [
          DateParseService,
          FormElementKeyboardCntrlService,
          EventManagerPlugins[0],
        ],
        schemas: [NO_ERRORS_SCHEMA],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(TimePickerComponent);
          component = fixture.componentInstance;
          componentElem = fixture.nativeElement;

          component.ignoreEvents = [];
          component.label = 'Label';
          component.hintMessage = 'Hint';
          component.required = true;

          fixture.detectChanges();

          labelElem = elementFromFixture(fixture, '.bfe-label');
          labelComp = fixture.debugElement.query(
            By.css('.bfe-label')
          ).componentInstance;
          hhInputElem = elementFromFixture(
            fixture,
            '.btmpckr-input-hours'
          ) as HTMLInputElement;
          mmInputElem = elementFromFixture(
            fixture,
            '.btmpckr-input-minutes'
          ) as HTMLInputElement;
          messageElem = elementFromFixture(fixture, '[b-input-message]');

          inputValue = (input, value) => {
            _inputValue(input, value, true, true);
            component.onHostFocusOut({
              target: input,
              relatedTarget: null,
              preventDefault: () => {},
            } as any);
          };

          spyOn(component.changed, 'emit');
          component.changed.subscribe(() => {});
          spyOn(component, 'propagateChange');
        });
    })
  );

  afterEach(() => {
    component.changed.complete();
  });

  describe('Init & Basic inputs', () => {
    it('should display label', () => {
      expect(labelComp.label).toEqual('Label');
      expect(getPseudoContent(labelElem, 'after')).toContain('*');
    });

    it('should display hint message', () => {
      expect(messageElem.innerText).toContain('Hint');
    });
  });

  describe('Input messages', () => {
    it('should display error message', () => {
      component.errorMessage = 'Error';
      fixture.detectChanges();

      expect(componentElem.classList).toContain('error');
      expect(messageElem.innerText).toContain('Error');
    });
  });

  describe('Value input', () => {
    beforeEach(() => {
      component.ngOnChanges(
        simpleChange({
          value: '6:5',
        })
      );
      fixture.detectChanges();
    });

    it('should correctly parse value', () => {
      expect(component.valueHours).toEqual('06');
      expect(component.valueMinutes).toEqual('05');
      expect(component.value).toEqual('06:05');
    });

    it('should emit changed event', () => {
      expect(component.changed.emit).toHaveBeenCalledWith({
        event: 'onWrite',
        value: '06:05',
      });
      expect(component.propagateChange).toHaveBeenCalledWith('06:05');
    });
  });

  describe('Keyboard input', () => {
    beforeEach(() => {
      inputValue(hhInputElem, '7');
      inputValue(mmInputElem, '8');
      fixture.detectChanges();
    });

    it('should correctly parse value', () => {
      expect(component.valueHours).toEqual('07');
      expect(component.valueMinutes).toEqual('08');
      expect(component.value).toEqual('07:08');
    });

    it('should emit changed event', () => {
      expect(component.changed.emit).toHaveBeenCalledWith({
        event: 'onBlur',
        value: '07:08',
      });
      expect(component.propagateChange).toHaveBeenCalledWith('07:08');
    });
  });

  describe('Value parsing', () => {
    it('should not allow hours more than 23', () => {
      inputValue(hhInputElem, '33');
      fixture.detectChanges();
      expect(component.valueHours).toEqual('23');
    });

    it('should not allow minutes more than 59', () => {
      component.ngOnChanges(
        simpleChange({
          value: '6:133',
        })
      );
      fixture.detectChanges();
      expect(component.valueMinutes).toEqual('59');
    });

    it('should assume 00 hours if only minutes entered', () => {
      inputValue(mmInputElem, '33');
      fixture.detectChanges();

      expect(component.value).toEqual('00:33');
      expect(component.changed.emit).toHaveBeenCalledWith({
        event: 'onBlur',
        value: '00:33',
      });
    });

    it('should assume 00 minutes if only hours entered', () => {
      inputValue(hhInputElem, '15');
      fixture.detectChanges();

      expect(component.value).toEqual('15:00');
      expect(component.propagateChange).toHaveBeenCalledWith('15:00');
    });
  });
});
