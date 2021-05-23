import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { ComponentGroupType } from '../../consts';
import { StoryBookLayoutModule } from '../../story-book-layout/story-book-layout.module';
import { summaryInsightsDataMock } from './summary-insights.mock';
import { SummaryInsightsModule } from './summary-insights.module';

const story = storiesOf(ComponentGroupType.Layout, module).addDecorator(
  withKnobs
);

const template1 = `
 <b-summary-insights [data]="data"></b-summary-insights>
`;

const storyTemplate = `
<b-story-book-layout [title]="'Summary Insights'">
  <div style="text-align:left">
    ${template1}
  </div>
</b-story-book-layout>
`;

const note = `
  ## Summary Insights
  #### Module
  *SummaryInsightsModule*

  ~~~
  ${template1}
  ~~~

  #### Properties
  Name | Type | Description
  --- | --- | ---
  [data] | SummaryInsight[] | summary items


  #### interface: SummaryInsight
  Name | Type | Description
  --- | --- | ---
  type | SummaryInsightType | selects item type
  data | LabelValue / ProgressBar / ProgressDonut | for descriptions of interfaces see related components

`;

story.add(
  'Summary Insights',
  () => {
    return {
      template: storyTemplate,
      props: {
        data: object('data', summaryInsightsDataMock),
      },
      moduleMetadata: {
        imports: [
          BrowserAnimationsModule,
          SummaryInsightsModule,
          StoryBookLayoutModule,
        ],
      },
    };
  },
  { notes: { markdown: note } }
);
