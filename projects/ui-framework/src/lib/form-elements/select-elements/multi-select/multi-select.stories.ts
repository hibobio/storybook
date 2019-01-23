import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { array, boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { ComponentGroupType } from '../../../consts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectGroupOption } from '../select.interface';
import { SelectModule } from '../select.module';

const selectStories = storiesOf(ComponentGroupType.FormElements, module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs);

const template = `
<b-multi-select style="display:block; width: 400px;"
                [options]="options"
                [value]="value"
                [showSingleGroupHeader]="showSingleGroupHeader"
                (selectChange)="selectChange($event)">
</b-multi-select>
`;

const note = `
  ## Single select Element

  #### Properties

  Name | Type | Description
  --- | --- | ---
  options | SelectGroupOption[] | model of selection group
  value | (string or number)[] | selected id
  showSingleGroupHeader | boolean | shows header for single groups (default=false)
  selectChange | action | returns selectedIds as Array

  ~~~
  ${ template }
  ~~~
`;

const optionsMock = [
  {
    groupName: 'Basic Info',
    options: [
      { value: 'Basic Info 1', id: 1 },
      { value: 'Basic Info 2', id: 2 },
    ],
  },
  {
    groupName: 'Personal',
    options: [
      { value: 'Personal 1', id: 11 },
      { value: 'Personal 2', id: 12 },
    ],
  },
];

selectStories.add(
  'Multi select',
  () => {
    return {
      template,
      props: {
        options: object<SelectGroupOption>('options', optionsMock),
        value: array<number>('value', [1, 2]),
        showSingleGroupHeader: boolean('showSingleGroupHeader', false),
        selectChange: action(),
      },
      moduleMetadata: {
        imports: [
          BrowserAnimationsModule,
          SelectModule,
        ]
      }
    };
  },
  { notes: { markdown: note } }
);
