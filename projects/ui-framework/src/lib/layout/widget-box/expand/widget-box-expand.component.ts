import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType, ButtonSize } from '../../../buttons/buttons.enum';

@Component({
  selector: 'b-widget-box-expand',
  templateUrl: 'widget-box-expand.component.html',
  styleUrls: ['./widget-box-expand.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WidgetBoxExpandComponent {
  readonly buttonType = ButtonType;
  readonly buttonSize = ButtonSize;
  showAll: boolean = false;
  @Output() clicked = new EventEmitter<boolean>();

  constructor() { }

  onClick(): void {
    this.showAll = !this.showAll;
    this.clicked.emit(this.showAll);
  }
}
