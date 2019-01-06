import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SwitchToggleComponent } from './switch-toggle.component';

describe('SwitchToggleComponent', () => {
  let component: SwitchToggleComponent;
  let fixture: ComponentFixture<SwitchToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchToggleComponent ],
      imports: [MatSlideToggleModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchToggleComponent);
    component = fixture.componentInstance;
    spyOn(component.changed, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should call changed callback', () => {
    component.onChange({ checked: true } as MatSlideToggleChange);
    expect(component.changed.emit).toHaveBeenCalled();
  });
});
