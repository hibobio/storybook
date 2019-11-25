import { storiesOf } from '@storybook/angular';
import { array, boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { ComponentGroupType } from '../../consts';
import { ButtonType } from '../../buttons/buttons.enum';
import { MenuModule } from './menu.module';
import { ButtonsModule } from '../../buttons/buttons.module';
import { IconsModule } from '../../icons/icons.module';
import { Icons } from '../../icons/icons.enum';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoryBookLayoutModule } from '../../story-book-layout/story-book-layout.module';
import { MenuItem } from './menu.interface';

const story = storiesOf(ComponentGroupType.Navigation, module).addDecorator(withKnobs);

const template = `
<b-menu [id]="'employee-menu'"
        [menu]="menu"
        [openLeft]="openLeft"
        [disabled]="disabled"
        (actionClick)="onActionClick($event)"
        (openMenu)="onMenuOpen($event)"
        (closeMenu)="onMenuClose($event)">
  <b-square-button menu-trigger
                   type="${ButtonType.secondary}"
                   icon="${Icons.three_dots}">
  </b-square-button>
</b-menu>
`;

const storyTemplate = `
<b-story-book-layout [title]="'Actions menu'">
    ${template}
</b-story-book-layout>
`;

const note = `
  ## Panel Element

  #### Module
  *MenuModule*

  #### Properties
  Name | Type | Description | Default value
  --- | --- | --- | ---
  [id] | string | menu id (can be used to reference the item, that has the menu) | &nbsp;
  [menu] | MenuItem[] | array of menu items | &nbsp;
  [openLeft] | boolean | open left by default | false
  [disabled] | boolean | disables menu | &nbsp;
  (actionClick) | &lt;MenuItem&gt; | notifies on action click, emits menu item, \
  enriched with menu id (if present) | &nbsp;
  (openMenu) | &lt;string / void&gt; | notifies on menu open, outputs menu's id, if present | &nbsp;
  (closeMenu) | &lt;string / void&gt; | notifies on menu close, outputs menu's id, if present | &nbsp;

  ~~~
  ${template}
  ~~~

  #### Example \`MenuItem[]\` config:

  ~~~
menu = [
    {
      label: 'Employee',
      key: 'employee',

      children: [
        {
          label: 'Update work details',
          key: 'update.work.details',
          action: (event: MenuItem) => {
            const {id: itemID, key: actionKey} = event;
            this[actionKey](itemID);
          }
        },
        {
          label: 'Delete file',
          key: 'delete.file',
          action: (event: MenuItem) => {
            this.deleteFile(event.id)
          }
        },
      ],
    }
  ]
~~~

#### Note
If you utilize menu \`id\` input (for example, referencing the item that has \
  the menu) and \`key\` of menu items, you might not need to provide \
  menu item actions at all. You can use single \`(actionClick)\` binding \
  (that receives MenuItem with menu \`id\` and action \`key\`) to have single handler for all actions.

~~~
menu = [
    {
      label: 'Employee',

      children: [
        {
          label: 'Update work details',
          key: 'updateDetails',
        },
        {
          label: 'Delete file',
          key: 'deleteFile',
        },
      ],
    }
  ]

  <b-menu [id]="'employee-123'"
          [menu]="menu"
          (actionClick)="onActionClick($event)">

  onActionClick(event) {
    const {id: itemID, key: actionKey} = event;

    // itemID equals menu [id] ('employee-123'),
    // actionKey equals menu item .key ('updateDetails')

    this[actionKey](itemID);
  }
~~~
`;

const menuMock: MenuItem[] = [
  {
    label: 'Employee',
    key: 'employee',

    children: [
      {
        label: 'Update work details',
        key: 'update.work.details',

        children: [
          {
            label: 'Update site',
            action: action('update site'),
            key: 'update.site'
          },
          {
            label: 'Update email',
            action: action('update email'),
            key: 'update.email'
          },
          {
            label: 'Update reports to',
            disabled: true,
            action: action('update reports to'),
            key: 'update.reportsto'
          }
        ]
      },

      {
        label: 'Update internal details',
        key: 'update.internal.details',

        children: [
          {
            label: 'Terminate',
            action: action('terminate'),
            key: 'terminate'
          },
          {
            label: 'Rehire',
            action: action('rehire'),
            key: 'rehire',

            children: [
              {
                label: 'Secret action',
                action: action('Deep action'),
                key: 'deep'
              }
            ]
          }
        ]
      },
      {
        label: 'Delete file',
        action: action('delete file'),
        key: 'delete.file'
      }
    ]
  },
  {
    label: 'View profile',
    action: action('view profile'),
    key: 'view.profile'
  },
  {
    label: 'Request time-off',
    disabled: true,
    action: action('request time off'),
    key: 'request.timeoff'
  }
];

story.add(
  'Menu',
  () => {
    return {
      template: storyTemplate,
      props: {
        openLeft: boolean('openLeft', false),
        disabled: boolean('disabled', false),
        menu: object('menu', menuMock),
        onActionClick: action('action click'),
        onMenuOpen: action('menu open'),
        onMenuClose: action('menu close')
      },
      moduleMetadata: {
        imports: [StoryBookLayoutModule, BrowserAnimationsModule, MenuModule, ButtonsModule, IconsModule]
      }
    };
  },
  { notes: { markdown: note } }
);
