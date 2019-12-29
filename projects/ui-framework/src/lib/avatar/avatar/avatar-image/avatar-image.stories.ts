import { storiesOf } from '@storybook/angular';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { zipObject } from 'lodash';
import { AvatarSize, AvatarBadge, AvatarOrientation } from '../avatar.enum';
import { ComponentGroupType } from '../../../consts';
import { StoryBookLayoutModule } from '../../../story-book-layout/story-book-layout.module';
import { AvatarModule } from '../avatar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsModule } from '../../../icons/icons.module';
import { ChipType } from '../../../chips/chips.enum';
import { mockNames, mockJobs, mockAvatar } from '../../../mock.const';
import { Icons } from '../../../icons/icons.enum';

const story = storiesOf(ComponentGroupType.Avatar, module).addDecorator(
  withKnobs
);

const sizeOptionsKeys = Object.values(AvatarSize).filter(
  key => typeof key === 'string'
) as string[];
const sizeOptionsValues = Object.values(AvatarSize).filter(
  key => typeof key === 'number'
) as number[];
const sizeOptions = zipObject(sizeOptionsKeys, sizeOptionsValues);

const icons = [
  Icons.calendar,
  Icons.chat,
  Icons.doc_add,
  Icons.doc_icon,
  Icons.email,
  Icons.harmonise,
  Icons.home_main,
  Icons.home,
  Icons.infinite,
  Icons.lock,
  Icons.megaphone,
  Icons.note,
  Icons.department_icon,
  Icons.person,
  Icons.person_check,
  Icons.print,
  Icons.success,
  Icons.tag,
];

const template = `
<b-avatar-image
  [size]="size"
  [imageSource]="imageSource"
  [backgroundColor]="backgroundColor"
  [icon]="icon"
  [badge]="badge"
  [disabled]="disabled"
  (clicked)="onClick($event)">
</b-avatar-image>
`;

const note = `
  ## Avatar Image Element
  #### Module
  *AvatarModule*

  #### Properties
  Name | Type | Description | Default value
  --- | --- | --- | ---
  [imageSource] | string | URL of the avatar image<br>\
  **Important!** <br>\
  use **EmployeeAvatarService<wbr>.getOptimizedAvatarImage<wbr>(employee.about.avatar, AvatarSize)** <br>\
  to get correct avatar image | &nbsp;
  [backgroundColor] | string | background color | &nbsp;
  [size] | AvatarSize | enum for setting the avatar size | mini
  (clicked) | EventEmitter<wbr>&lt;MouseEvent&gt; | emitted on avatar click | &nbsp;

  ~~~
  ${template}
  ~~~
`;

const storyTemplate = `
<b-story-book-layout [title]="'Avatar Image'">
    ${template}
</b-story-book-layout>
`;

story.add(
  'Avatar Image',
  () => {
    return {
      template: storyTemplate,
      props: {
        imageSource: text('imageSource', mockAvatar()),
        size: select('size', sizeOptions, AvatarSize.large),
        backgroundColor: select('background color', [
          0,
          '#fff',
          'red',
          'black',
        ]),
        icon: select('icon', [0, ...icons]),
        badge: select(
          'badge',
          [0, ...Object.keys(AvatarBadge)],
          AvatarBadge.approved
        ),
        disabled: boolean('disabled', false),
        onClick: action('Avatar Clicked'),
      },
      moduleMetadata: {
        imports: [
          BrowserAnimationsModule,
          StoryBookLayoutModule,
          AvatarModule,
          IconsModule,
        ],
      },
    };
  },
  { notes: { markdown: note } }
);
