import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA, Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TruncateTooltipComponent } from './truncate-tooltip.component';

import { DOMhelpers } from '../utils/dom-helpers.service';
import { UtilsService } from '../utils/utils.service';
import { UtilsModule } from '../utils/utils.module';
import { MatTooltipModule } from '@angular/material';

@Component({
  template: `
    <div style="width: 400px; height: 500px; font-size: 10px; line-height: 1;">
      <b-truncate-tooltip class="test1" [maxLines]="maxLines">
        <div style="">
          <p><!-- HTML Comment --></p>
          <div style="font-size: 20px; line-height: 1.5;">
            <p class="right-one">
              TEST{{ testNum }} {{ text1 }}
              <span>{{ text2 }}</span>
            </p>
          </div>
        </div>
      </b-truncate-tooltip>
    </div>
  `,
  providers: []
})
class TestComponent {
  constructor() {}
  @Input() maxLines: number;

  testNum = 1;

  text1 = `
    TEXTSTART If you’re trying to wear official headgear in a public setting, my
    advice is to take yourself as seriously as you expect others to
    take you. A photographer may not allow you to wear the colander if
    you’ve just pulled it out while giggling. But if you walk in
    wearing it – if it is clear that this headgear is truly a serious
    part of your traditional Pastafarian beliefs, as you are claiming
    – then they are less likely to make trouble.
    `;
  text2 = 'And this text too! TEXTEND';
}

describe('RichTextEditorComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testComponent: TestComponent;

  let bttComp1: TruncateTooltipComponent;
  let bttComp1textContainer: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, TruncateTooltipComponent],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        UtilsModule,
        MatTooltipModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [DOMhelpers, UtilsService]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;

        fixture.detectChanges();

        bttComp1 = fixture.debugElement.query(By.css('.test1'))
          .componentInstance;

        setTimeout(() => {
          bttComp1textContainer = fixture.debugElement.query(
            By.css('.test1 .btt')
          ).nativeElement;
          fixture.detectChanges();
        }, 0);
      });
  }));

  describe('Component: Text truncation (1 line)', () => {
    it('should display a single truncated line of text', () => {
      const textContainerStyle = getComputedStyle(bttComp1textContainer);
      expect(
        parseInt(textContainerStyle.height, 10) <= 20 * 1.5 * 1
      ).toBeTruthy();
    });
    it('should display tooltip with full text', () => {
      const tooltipElem = document.querySelector(
        '#cdk-describedby-message-container'
      ) as HTMLElement;
      expect(tooltipElem.innerText).toContain('TEST1');
      expect(tooltipElem.innerText).toContain('TEXTSTART');
      expect(tooltipElem.innerText).toContain('TEXTEND');
    });
  });

  describe('Component: Dynamic MaxLines & Text change; Text line-clamp (3 lines)', () => {
    it('should chnage from 1 line to 3 lines of text', () => {
      testComponent.maxLines = 3;
      fixture.detectChanges();
      const textContainerStyle = getComputedStyle(bttComp1textContainer);
      expect(
        parseInt(textContainerStyle.height, 10) <= 20 * 1.5 * 3
      ).toBeTruthy();
    });

    it('should display tooltip with updated (chanhed) full text', () => {
      testComponent.maxLines = 3;
      testComponent.testNum = 2;
      fixture.autoDetectChanges();
      const tooltipElem = document.querySelector(
        '#cdk-describedby-message-container'
      ) as HTMLElement;
      expect(tooltipElem.innerText).toContain('TEST2');
      expect(tooltipElem.innerText).toContain('TEXTSTART');
      expect(tooltipElem.innerText).toContain('TEXTEND');
    });
  });
});
