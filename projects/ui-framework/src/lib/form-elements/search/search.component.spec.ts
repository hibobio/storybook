import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { InputModule } from '../input/input.module';
import { IconsModule } from '../../icons/icons.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
      ],
      imports: [
        NoopAnimationsModule,
        FormsModule,
        InputModule,
        IconsModule,
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        spyOn(component.inputEvents, 'emit');
        fixture.detectChanges();
      });
  }));

  describe('onInputEvents', () => {
    it('should show reset icon if search has value', () => {
      const inputElement = fixture.debugElement.query(By.css('input'));
      let resetElement = fixture.debugElement.query(By.css('.reset-button'));
      expect(resetElement).toBe(null);

      inputElement.nativeElement.value = 'change input value';
      inputElement.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      resetElement = fixture.debugElement.query(By.css('.reset-button'));
      expect(resetElement).not.toBe(null);
    });
  });

  describe('onResetClick', () => {
    it('should set value to be empty', () => {
      const inputElement = fixture.debugElement.query(By.css('input'));
      expect(component.value).toBe('');

      inputElement.nativeElement.value = 'change input value';
      inputElement.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.value).toBe('change input value');

      const resetElement = fixture.debugElement.query(By.css('.reset-button b-icon'));
      resetElement.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(component.value).toBe('');
    });
  });
});
