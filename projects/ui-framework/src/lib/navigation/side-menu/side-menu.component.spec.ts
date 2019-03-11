import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideMenuComponent } from './side-menu.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { getSideMenuOptionsMock } from './side-menu.mock';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideMenuComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    component.options = getSideMenuOptionsMock();
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('should set selectedId to 1', () => {
      expect(component.selectedId).toEqual('1');
    });
  });

  describe('onSelectOption', () => {
    it('should set selectedId to 2', () => {
      component.onSelectOption('2');
      expect(component.selectedId).toEqual('2');
    });
  });

  describe('template', () => {
    let bSideMenuOption: DebugElement[];

    beforeEach(() => {
      bSideMenuOption = fixture.debugElement.queryAll(By.css('b-side-menu-option'));
    });

    it('should display correct amount of b-side-menu-option', () => {
      expect(bSideMenuOption.length).toEqual(5);
    });
  });
});
