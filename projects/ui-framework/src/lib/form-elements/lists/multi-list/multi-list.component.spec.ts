import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatPseudoCheckboxModule, MatTooltipModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from '../../../navigation/search/search.module';
import { ButtonsModule } from '../../../buttons-indicators/buttons';
import { IconsModule } from '../../../icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputModule } from '../../input';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ListModelService } from '../list-service/list-model.service';
import { SelectGroupOption } from '../list.interface';
import { By } from '@angular/platform-browser';
import { MultiListComponent } from './multi-list-component';
import { FiltersModule } from '../../../filters/filters.module';

describe('MultiListComponent', () => {
  let component: MultiListComponent;
  let optionsMock: SelectGroupOption[];
  let fixture: ComponentFixture<MultiListComponent>;

  beforeEach(async(() => {
    optionsMock = [
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

    TestBed.configureTestingModule({
      declarations: [
        MultiListComponent,
      ],
      providers: [
        ListModelService,
      ],
      imports: [
        NoopAnimationsModule,
        CommonModule,
        FormsModule,
        InputModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        SearchModule,
        ButtonsModule,
        IconsModule,
        MatTooltipModule,
        FlexLayoutModule,
        ScrollingModule,
        MatPseudoCheckboxModule,
        FiltersModule,
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MultiListComponent);
        component = fixture.componentInstance;
        component.options = optionsMock;
        component.value = [1, 11];
        spyOn(component.selectChange, 'emit');
        fixture.autoDetectChanges();
      });
  }));

  describe('ngOnInit', () => {
    it('should create headerModel based on options', () => {
      expect(component.listHeaders).toEqual([
        {
          groupName: 'Basic Info',
          isCollapsed: false,
          placeHolderSize: 88,
          selected: false,
        },
        {
          groupName: 'Personal',
          isCollapsed: false,
          placeHolderSize: 88,
          selected: false,
        }
      ]);
    });
    it('should create optionsModel based on options', () => {
      expect(component.listOptions).toEqual([
        {
          isPlaceHolder: true,
          groupName: 'Basic Info',
          value: 'Basic Info',
          id: 'Basic Info',
          selected: null,
        },
        {
          value: 'Basic Info 1',
          id: 1,
          groupName: 'Basic Info',
          isPlaceHolder: false,
          selected: true,
        },
        {
          value: 'Basic Info 2',
          id: 2,
          groupName: 'Basic Info',
          isPlaceHolder: false,
          selected: false,
        },
        {
          isPlaceHolder: true,
          groupName: 'Personal',
          value: 'Personal',
          id: 'Personal',
          selected: null,
        },
        {
          value: 'Personal 1',
          id: 11,
          groupName: 'Personal',
          isPlaceHolder: false,
          selected: true,
        },
        {
          value: 'Personal 2',
          id: 12,
          groupName: 'Personal',
          isPlaceHolder: false,
          selected: false,
        },
      ]);
    });
    it('should render 2 headers', () => {
      const headers = fixture.debugElement.queryAll(By.css('.header'));
      expect(headers.length).toEqual(2);
    });
    it('should render 4 options', () => {
      const options = fixture.debugElement.queryAll(By.css('.option'));
      expect(options.length).toEqual(4);
    });
    it('should set the checkbox of options where (id=1,11) as checked', () => {
      const checkboxes = fixture.debugElement.queryAll(By.css('.option .checkbox'));
      expect(checkboxes[0].nativeElement.getAttribute('ng-reflect-state')).toEqual('checked');
      expect(checkboxes[2].nativeElement.getAttribute('ng-reflect-state')).toEqual('checked');
    });
    it('should set the checkbox of options where (id=2,12) as unchecked', () => {
      const checkboxes = fixture.debugElement.queryAll(By.css('.option .checkbox'));
      expect(checkboxes[1].nativeElement.getAttribute('ng-reflect-state')).toEqual('unchecked');
      expect(checkboxes[3].nativeElement.getAttribute('ng-reflect-state')).toEqual('unchecked');
    });
  });
  describe('header collapse', () => {
    it('should render 2 options if 1 group is collapsed', () => {
      const headerCollapseTrigger = fixture.debugElement.queryAll(By.css('.header-collapse-trigger'))[0];
      headerCollapseTrigger.triggerEventHandler('click', null);
      fixture.autoDetectChanges();
      const options = fixture.debugElement.queryAll(By.css('.option'));
      expect(options.length).toEqual(2);
    });
    it('should not render options if 2 group are collapsed', () => {
      const headerCollapseTrigger = fixture.debugElement.queryAll(By.css('.header-collapse-trigger'));
      headerCollapseTrigger[0].triggerEventHandler('click', null);
      headerCollapseTrigger[1].triggerEventHandler('click', null);
      fixture.autoDetectChanges();
      const options = fixture.debugElement.queryAll(By.css('.option'));
      expect(options.length).toEqual(0);
    });
  });
  describe('option click', () => {
    it('should update value when option is clicked with the option id', () => {
      const options = fixture.debugElement.queryAll(By.css('.option'));
      options[3].triggerEventHandler('click', null);
      expect(component.value).toEqual([1, 11, 12]);
    });
    it('should emit event when selecting an option', () => {
      const options = fixture.debugElement.queryAll(By.css('.option'));
      options[3].triggerEventHandler('click', null);
      expect(component.selectChange.emit).toHaveBeenCalledWith([1, 11, 12]);
    });
  });
  describe('header checkbox click', () => {
    it('should select all options in group when selecting header', () => {
      const headerCheckbox = fixture.debugElement.queryAll(By.css('.header .checkbox'));
      headerCheckbox[0].triggerEventHandler('click', null);
      fixture.autoDetectChanges();
      expect(component.value).toEqual([1, 11, 2]);
    });
    it('should deselect all options in group when deselecting header', () => {
      const headerCheckbox = fixture.debugElement.queryAll(By.css('.header .checkbox'));
      headerCheckbox[0].triggerEventHandler('click', null);
      fixture.autoDetectChanges();
      expect(component.value).toEqual([1, 11, 2]);
      headerCheckbox[0].triggerEventHandler('click', null);
      fixture.autoDetectChanges();
      expect(component.value).toEqual([11]);
    });
    it('should not update options model when header is collapsed', () => {
      const expectedHeaderModel = [
        {
          groupName: 'Basic Info',
          isCollapsed: true,
          placeHolderSize: 88,
          selected: true,
        },
        {
          groupName: 'Personal',
          isCollapsed: false,
          placeHolderSize: 88,
          selected: false,
        }
      ];
      const expectedOptionsModel = [
        {
          isPlaceHolder: true,
          groupName: 'Basic Info',
          value: 'Basic Info',
          id: 'Basic Info',
          selected: null,
        },
        {
          isPlaceHolder: true,
          groupName: 'Personal',
          value: 'Personal',
          id: 'Personal',
          selected: null,
        },
        {
          value: 'Personal 1',
          id: 11,
          groupName: 'Personal',
          isPlaceHolder: false,
          selected: true,
        },
        {
          value: 'Personal 2',
          id: 12,
          groupName: 'Personal',
          isPlaceHolder: false,
          selected: false,
        },
      ];
      const headerCollapseTrigger = fixture.debugElement.queryAll(By.css('.header-collapse-trigger'))[0];
      headerCollapseTrigger.triggerEventHandler('click', null);
      fixture.autoDetectChanges();
      const headerCheckbox = fixture.debugElement.queryAll(By.css('.header .checkbox'));
      headerCheckbox[0].triggerEventHandler('click', null);
      fixture.autoDetectChanges();
      expect(component.listHeaders).toEqual(expectedHeaderModel);
      expect(component.listOptions).toEqual(expectedOptionsModel);
    });
    it('should emit event when header is selected', () => {
      const headerCheckbox = fixture.debugElement.queryAll(By.css('.header .checkbox'));
      headerCheckbox[0].triggerEventHandler('click', null);
      fixture.autoDetectChanges();
      expect(component.selectChange.emit).toHaveBeenCalledWith([1, 11, 2]);
    });
  });
});
