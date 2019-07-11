import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { CardsLayoutComponent } from './cards-layout.component';
import { CardsModule } from '../cards.module';
import { CardType } from '../cards.enum';

describe('CardsLayoutComponent', () => {
  let fixture: ComponentFixture<CardsLayoutComponent>;
  let component: CardsLayoutComponent;
  let cardsListElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CardsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideComponent(CardsLayoutComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CardsLayoutComponent);
        fixture.nativeElement.style.width = '950px';
        component = fixture.componentInstance;
        component.type = CardType.regular;
        fixture.detectChanges();
        cardsListElement = fixture.debugElement.query(By.css('.cards-list'))
          .nativeElement;
      });
  }));

  describe('Type', () => {
    it('should be of type primary by default', () => {
      expect(cardsListElement.classList).toContain('cards-regular');
    });
    it('should change type on type input change', () => {
      component.type = CardType.large;
      fixture.detectChanges();
      expect(cardsListElement.classList).toContain('cards-large');
    });
    it('should change type on type input change', () => {
      component.type = CardType.small;
      fixture.detectChanges();
      expect(cardsListElement.classList).toContain('cards-small');
    });
  });
});
