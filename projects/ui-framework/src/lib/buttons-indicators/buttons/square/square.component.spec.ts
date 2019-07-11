import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareButtonComponent } from './square.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonSize, ButtonType } from '../buttons.enum';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';
import { IconComponent } from '../../../icons/icon.component';
import { Icons, IconSize } from '../../../icons/icons.enum';
import { SimpleChanges } from '@angular/core';

describe('ButtonComponent', () => {
  let component: SquareButtonComponent;
  let fixture: ComponentFixture<SquareButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SquareButtonComponent,
        MockComponent(IconComponent),
      ],
      imports: [
        MatButtonModule,
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SquareButtonComponent);
        component = fixture.componentInstance;
        component.icon = Icons.file_copy;
        spyOn(component.clicked, 'emit');
        fixture.detectChanges();
      });
  }));

  describe('onClick', () => {
    it('Should emit the click event', () => {
      const e = {
        id: 1
      };
      component.onClick(e);
      expect(component.clicked.emit).toHaveBeenCalledWith(e);
    });
  });

  describe('OnChanges', () => {
    it('should set icon size to large by default', () => {
      const icon = fixture.debugElement.query(By.css('b-icon'));
      expect(icon.componentInstance.size).toEqual(IconSize.large);
    });
    it('should set icon size to medium if size is small', () => {
      const changes: SimpleChanges = {
        size: {
          previousValue: undefined,
          currentValue: ButtonSize.small,
          firstChange: true,
          isFirstChange: () => true
        }
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();
      const icon = fixture.debugElement.query(By.css('b-icon'));
      expect(icon.componentInstance.size).toEqual(IconSize.large);
    });
  });

  describe('button classes', () => {
    it('should have type as class', () => {
      component.type = ButtonType.tertiary;
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button'));
      expect(buttonElement.nativeElement.classList).toContain('tertiary');
    });
    it('should not have disabled class by default', () => {
      const buttonElement = fixture.debugElement.query(By.css('button'));
      expect(buttonElement.nativeElement.classList).not.toContain('disabled');
    });
    it('should have disabled class', () => {
      component.disabled = true;
      fixture.detectChanges();
      const buttonElement = fixture.debugElement.query(By.css('button'));
      expect(buttonElement.nativeElement.classList).toContain('disabled');
    });
  });
});
