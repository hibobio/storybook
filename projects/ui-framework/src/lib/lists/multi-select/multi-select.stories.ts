import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  object,
  select,
  withKnobs,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { AvatarImageComponent } from '../../avatar/avatar/avatar-image/avatar-image.component';
import { AvatarModule } from '../../avatar/avatar/avatar.module';
import { ButtonsModule } from '../../buttons/buttons.module';
import { ComponentGroupType, STORIES_KNOBS_OPTIONS } from '../../consts';
import { FormElementSize } from '../../form-elements/form-elements.enum';
// @ts-ignore: md file and not a module
import formElemsPropsDoc from '../../form-elements/form-elements.properties.md';
import { FormElementsCommonProps } from '../../form-elements/form-elements.stories.common';
import { Icons } from '../../icons/icons.enum';
import { mockText } from '../../mock.const';
import {
  cloneDeep,
  cloneDeepSimpleObject,
} from '../../services/utils/functional-utils';
import { StoryBookLayoutModule } from '../../story-book-layout/story-book-layout.module';
import { TypographyModule } from '../../typography/typography.module';
import { ListModelService } from '../list-service/list-model.service';
import { SelectMode } from '../list.enum';
import { SelectGroupOption } from '../list.interface';
// @ts-ignore: md file and not a module
import listInterfaceDoc from '../list.interface.md';
// @ts-ignore: md file and not a module
import listSelectsPropsDoc from '../lists-selects.properties.md';
import { optionsMock, optionsMockDef } from '../multi-list/multi-list.mock';
// @ts-ignore: md file and not a module
import selectsSelectPanelsPropsDoc from '../selects-select-panels.properties.md';
// @ts-ignore: md file and not a module
import selectsPropsDoc from '../selects.properties.md';
import { SSPjobsOptionsMock } from '../single-select-panel/single-select-panel.stories';
import { MultiSelectComponent } from './multi-select.component';
import { MultiSelectModule } from './multi-select.module';

const story = storiesOf(ComponentGroupType.FormElements, module).addDecorator(
  withKnobs
);

const story2 = storiesOf(ComponentGroupType.Lists, module).addDecorator(
  withKnobs
);

const template = `
<b-multi-select #bms [value]="value"
                [options]="optns === 'plain' ? options_plain : options_avatars"
                [optionsDefault]="optionsDefault"
                [mode]="selectMode"
                [label]="label"
                [placeholder]="placeholder || undefined"
                [description]="description"
                [showSingleGroupHeader]="showSingleGroupHeader"
                [startWithGroupsCollapsed]="startWithGroupsCollapsed"
                [min]="min"
                [max]="max"
                [defaultIcon]="defaultIcon"
                [disabled]="disabled"
                [required]="required"
                [readonly]="readonly"
                [hintMessage]="hintMessage"
                [errorMessage]="errorMessage"
                [size]="size"
                [focusOnInit]="focusOnInit"
                (opened)="opened()"
                (closed)="closed()"
                (selectChange)="selectChange($event)"
                (changed)="selectValueChange($event)"
                (selectModified)="selectModified($event)"
                (selectCancelled)="selectCancelled($event)">

    <b-text-button footerAction
        [text]="'Action'"
        (clicked)="bms.listActionsState={apply:{disabled:false}}">
    </b-text-button>
</b-multi-select>

<button *ngIf="false" (click)="logData(bms)" type="button">log</button>
`;

const templateForNotes = `<b-multi-select [value]="value"
                [options]="options"
                [optionsDefault]="optionsDefault"
                [label]="label"
                [placeholder]="placeholder"
                [description]="description"
                [showSingleGroupHeader]="showSingleGroupHeader"
                [startWithGroupsCollapsed]="startWithGroupsCollapsed"
                [disabled]="disabled"
                [required]="required"
                [readonly]="readonly"
                [hintMessage]="hintMessage"
                [errorMessage]="errorMessage"
                (selectChange)="selectChange($event)"
                (changed)="selectValueChange($event)">

    <b-text-button footerAction
        [text]="'Action'">
    </b-text-button>

</b-multi-select>`;

const sel2code = `showSingleGroupHeader = false;
startWithGroupsCollapsed = false;
options = [{ ..., groupSelectable: false  }]`;

const storyTemplate = `
<style>
  body,html { overflow: hidden;}
</style>
<div class="app-content">
  <b-story-book-layout [title]="'Multi select'" cdkScrollable class="content-wrapper" style="overflow: auto; max-height: 100vh; min-height: 0;">

    <div style="max-width: 350px; min-height: 130vh;">
      ${template}

      <br><br>

      <b-multi-select
        [options]="options1g"
        [showSingleGroupHeader]="true"
        [startWithGroupsCollapsed]="false"
      ></b-multi-select>
      <br>
      <textarea style="resize: none;padding: 0;height: 85px;width: 100%;border: 0;background: transparent;" readonly disabled [value]="options1g_code">
      </textarea>
    </div>

  </b-story-book-layout>
</div>
`;

const note = `
  ## Multi Select

  #### Module
  *MultiSelectModule*

  ~~~
  ${templateForNotes}
  ~~~

  #### MultiSelect properties
  Name | Type | Description | Default
  --- | --- | --- | ---
  [value] | (number / string)[] | array of selected options's IDs.<br>\
   If present, the \`.selected\` props of \`[options]\` will be ignored, \
   and instead \`[value]\` will be used to select options | &nbsp;
  (selectModified) | EventEmitter<wbr>&lt;ListChange&gt; | emits ListChange - on every option change.<br>\
  **Note:** In most cases, it's better to use \`(selectChange)\` or \`(changed)\`, \
  that emit on Apply (see doc below) | &nbsp;
  (selectCancelled) | EventEmitter<wbr>&lt;ListChange&gt; | emits ListChange - on Cancel. \
  Only relevant if you use \`(selectModified)\` | &nbsp;

  ${listSelectsPropsDoc}

  ${selectsPropsDoc}

  ${selectsSelectPanelsPropsDoc}

  ${formElemsPropsDoc}

  ${listInterfaceDoc}
`;

const options = ListModelService.prototype.selectAll<SelectGroupOption>(
  cloneDeep(optionsMock)
);
const optionsDef = cloneDeep(optionsMockDef);

const options1g = [cloneDeepSimpleObject(options[2])];
options1g[0].groupName = 'Employees';
options1g[0].suffixComponent = options[1].suffixComponent;
options1g[0].suffixComponent.attributes.placeholder = 'Include inactive';
options1g[0].groupSelectable = false;
options1g[0].options.forEach((o) => {
  o.selected = o.disabled = false;
  o.description = null;
});

const toAdd = () => ({
  template: storyTemplate,
  props: {
    logData: (bms: MultiSelectComponent) => {
      console.log('Options:', bms['options']);
      console.log('Value (Selected IDs):', bms['value']);
      console.log(
        'Selected Group Options:',
        bms['listChangeSrvc']
          .getListChange(bms.options, bms.value)
          .getSelectedGroupOptions()
      );
    },
    value: select(
      'value',
      options.length >= 4
        ? [
            [
              options[2].options[0].id,
              options[2].options[2].id,
              options[3].options[3].id,
              options[4].options[2].id,
            ],
            [
              options[3].options[1].id,
              options[2].options[3].id,
              options[2].options[2].id,
              options[4].options[0].id,
            ],
            [
              options[3].options[3].id,
              options[2].options[2].id,
              options[4].options[0].id,
              options[2].options[1].id,
            ],
          ]
        : [],
      options.length >= 4
        ? [
            options[2].options[0].id,
            options[2].options[2].id,
            options[3].options[3].id,
            options[4].options[2].id,
          ]
        : [],
      'Props'
    ),

    showSingleGroupHeader: boolean('showSingleGroupHeader', true, 'Props'),
    startWithGroupsCollapsed: boolean(
      'startWithGroupsCollapsed',
      true,
      'Props'
    ),
    selectMode: select(
      'selectMode',
      Object.values(SelectMode),
      SelectMode.classic,
      'Props'
    ),
    min: number('min', 0, {}, 'Props'),
    max: number('max', 0, {}, 'Props'),

    defaultIcon: select(
      'defaultIcon',
      [null, Icons.people_alt2],
      null,
      'Props'
    ),

    ...FormElementsCommonProps('Multi select', '', mockText(30), 'Props'),

    size: select(
      'size',
      Object.values(FormElementSize),
      FormElementSize.regular,
      'Props'
    ),

    optns: select(
      'options',
      ['plain', 'with avatars'],
      'with avatars',
      'Options'
    ),
    options_plain: SSPjobsOptionsMock,
    options_avatars: options,
    options_notes: object<SelectGroupOption[]>(
      'options data',
      options,
      'Options'
    ),
    optionsDefault: optionsDef,
    opened: action('Panel opened'),
    closed: action('Panel closed'),
    selectChange: action('Change Applied'),
    selectValueChange: action('Value (Selected IDs)'),
    selectModified: action('Options modified'),
    selectCancelled: action('Changes Cancelled'),

    options1g: options1g,
    options1g_code: sel2code,
  },
  moduleMetadata: {
    imports: [
      MultiSelectModule,
      ButtonsModule,
      TypographyModule,
      BrowserAnimationsModule,
      StoryBookLayoutModule,
      AvatarModule,
      ScrollingModule,
    ],
    entryComponents: [AvatarImageComponent],
  },
});

story.add('Multi select', toAdd, {
  notes: { markdown: note },
  knobs:STORIES_KNOBS_OPTIONS
});
story2.add('Multi select', toAdd, {
  notes: { markdown: note },
  knobs: STORIES_KNOBS_OPTIONS
});
