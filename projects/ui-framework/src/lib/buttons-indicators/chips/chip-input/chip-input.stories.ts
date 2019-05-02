import { storiesOf, moduleMetadata } from '@storybook/angular';
import {
  text,
  select,
  array,
  boolean,
  withKnobs
} from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { ChipsModule } from '../chips.module';
import { ChipType } from '../chips.enum';
import { values } from 'lodash';
import { ComponentGroupType } from '../../../consts';
import { StoryBookLayoutModule } from '../../../story-book-layout/story-book-layout.module';
import { chipOptionsMock } from './chipsOptionsMock';

const story = storiesOf(
  ComponentGroupType.ButtonsAndIndicators,
  module
).addDecorator(withKnobs);

const options = chipOptionsMock;

const colorService = () => {
  return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
};

const template = `
  <b-chip-input [chips]="options"
              [acceptNew]="acceptNew"
              [colorService]="colorService"
              [label]="label"
              [required]="required"
              [disabled]="disabled"
              [hintMessage]="hintMessage"
              [errorMessage]="errorMessage">
  </b-chip-input>
`;
const template2 = `
  <p b-chip [type]="type">
    Used as directive
  </p>
`;

const note = `
  ## Text-only Chip
  #### Module
  *ChipsModule*

  #### Properties
  Name | Type | Description | Default value
  --- | --- | --- | ---
  text | string | chip text | ''
  type | ChipType | enum for setting the chip type (empty, default, info, success, attention, warning) | default (optional)
  color | string | custom chip color | '' (optional)

  ~~~
  ${template}
  ~~~
`;

const storyTemplate = `
<b-story-book-layout [title]="'Chip Input'">
  <div style="padding: 50px;margin:auto;max-width:600px;">
    ${template}
  </div>
</b-story-book-layout>
`;

story.add(
  'Chip Input',
  () => ({
    template: storyTemplate,
    props: {
      options: options,
      acceptNew: boolean('acceptNew', true),
      colorService: colorService,
      label: text('label', 'What are your hobbies?'),
      disabled: boolean('disabled', false),
      required: boolean('required', false),
      hintMessage: text('hintMessage', 'Stick something in me'),
      errorMessage: text('errorMessage', '')
    },
    moduleMetadata: {
      imports: [ChipsModule, StoryBookLayoutModule]
    }
  }),
  { notes: { markdown: note } }
);
