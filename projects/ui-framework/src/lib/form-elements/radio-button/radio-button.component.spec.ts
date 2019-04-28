import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioButtonComponent } from './radio-button.component';
import { By } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioDirection } from './radio-button.enum';
import { RadioConfig } from './radio-button.interface';

describe('RadioButtonComponent', () => {
  let component: RadioButtonComponent;
  let fixture: ComponentFixture<RadioButtonComponent>;
  let radioConfigMock: RadioConfig[];

  beforeEach(async(() => {
    radioConfigMock = [
      { id: 11, label: 'option one' },
      { id: 12, label: 'option two' },
      { id: 13, label: 'option three' },
    ];
    TestBed.configureTestingModule({
      declarations: [
        RadioButtonComponent,
      ],
      imports: [
        NoopAnimationsModule,
        CommonModule,
        FormsModule,
        MatRadioModule,
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(RadioButtonComponent);
        component = fixture.componentInstance;
        component.radioConfig = radioConfigMock;
        spyOn(component.radioChange, 'emit');
        spyOn(component, 'propagateChange');
        fixture.detectChanges();
      });
  }));

  describe('init', () => {
    it('should render three options', () => {
      const matRadioButtons = fixture.debugElement.queryAll(By.css('mat-radio-button'));
      expect(matRadioButtons.length).toEqual(3);
    });
  });

  describe('option click', () => {
    it('should set selected option to be checked and emit radioChange event with id', () => {
      const matRadioButtonLabel = fixture.debugElement.queryAll(By.css('mat-radio-button label'))[2];
      matRadioButtonLabel.nativeElement.click();
      fixture.detectChanges();
      expect(component.radioChange.emit).toHaveBeenCalledWith(13);
    });
    it('should invoke propagateChange', () => {
      const matRadioButtonLabel = fixture.debugElement.queryAll(By.css('mat-radio-button label'))[2];
      matRadioButtonLabel.nativeElement.click();
      fixture.detectChanges();
      expect(component.propagateChange).toHaveBeenCalledWith(13);
    });
  });

  describe('direction', () => {
    it('should set direction class with row by default', () => {
      const matRadioGroup = fixture.debugElement.query(By.css('mat-radio-group'));
      expect(matRadioGroup.nativeElement.classList).toContain('direction-row');
    });
    it('should set direction class with column by attr', () => {
      component.direction = RadioDirection.column;
      fixture.detectChanges();
      const matRadioGroup = fixture.debugElement.query(By.css('mat-radio-group'));
      expect(matRadioGroup.nativeElement.classList).toContain('direction-column');
    });
  });

  describe('OnChanges', () => {
    it('should mark selected radio option with the matching value', () => {
      const changes: SimpleChanges = {
        value: {
          previousValue: undefined, currentValue: 12, firstChange: true, isFirstChange: () => true,
        }
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();
      const matRadioButtons = fixture.debugElement.queryAll(By.css('mat-radio-button'));
      expect(matRadioButtons.length).toEqual(3);
      for (let i = 0; i < matRadioButtons.length; i++) {
        if (i === 1) {
          expect(matRadioButtons[i].componentInstance.checked).toBe(true);
        } else {
          expect(matRadioButtons[i].componentInstance.checked).toBe(false);
        }
      }
    });
    it('should not emit change from value change', () => {
      const changes: SimpleChanges = {
        value: {
          previousValue: undefined, currentValue: 12, firstChange: true, isFirstChange: () => true,
        }
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();
      expect(component.radioChange.emit).not.toHaveBeenCalled();
    });
  });
});
