import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { select, withKnobs } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { ButtonsModule } from '../buttons.module';
import { ButtonType } from '../buttons.enum';
import { values } from 'lodash';
import { Icons, IconSize, IconColor } from '../../../icons/icons.enum';
import { IconsModule } from '../../../icons/icons.module';
import { ComponentGroupType } from '../../../consts';
import { StoryBookLayoutModule } from '../../../story-book-layout/story-book-layout.module';

const buttonStories = storiesOf(ComponentGroupType.ButtonsAndIndicators, module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs);

const typeOptions = values(ButtonType);
const iconColor = values(IconColor);
const icons = values(Icons);

const template = `
<b-story-book-layout title="Square button">
  <b-square-button
    (clicked)="onClick($event)"
    [type]="type"
    [icon]="icon"
    [color]="color">
  </b-square-button>
</b-story-book-layout>
`;
const note = `
  ## Square Button Element

  #### Properties

  Name | Type | Description | Default value
  --- | --- | --- | ---
  type | ButtonType | enum for setting the button type | primary (optional)
  icon | Icons | Icon enum value
  color | IconColor | the color of the icon | dark (optional)
  clicked | Function | callback for clicking on the button |

  ~~~
  ${ template }
  ~~~
`;
buttonStories.add(
  'Square Button', () => ({
    template,
    props: {
      type: select('type', typeOptions, ButtonType.secondary),
      icon: select('icon', icons, Icons.phone_link),
      color: select('color', iconColor, IconColor.dark),
      onClick: action(),
    },
    moduleMetadata: {
      imports: [
        ButtonsModule,
        IconsModule,
        StoryBookLayoutModule,
      ]
    }
  }),
  { notes: { markdown: note } }
);

