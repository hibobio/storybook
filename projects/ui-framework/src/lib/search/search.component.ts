import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IconColor, Icons, IconSize } from '../icons';
import { InputComponent } from '../form-elements/input/input.component';
import { InputTypes } from '../form-elements/input/input.enum';
import { set } from 'lodash';
import { InputEvent } from '../form-elements/input/input.interface';

@Component({
  selector: 'b-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent extends InputComponent implements OnInit {

  readonly searchIcon: String = Icons.search;
  readonly resetIcon: String = Icons.reset_x;
  readonly iconSize: String = IconSize.small;
  readonly iconColor: String = IconColor.dark;

  inputTypes = InputTypes;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.value = '';
  }

  onInputEvents(event: InputEvent): void {
    this.value = event.value as string;
    this.inputEvents.emit(event);
  }

  onResetClick() {
    this.value = '';
  }
}
