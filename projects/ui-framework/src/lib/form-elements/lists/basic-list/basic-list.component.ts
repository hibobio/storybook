import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { BasicListItem } from './basic-list.interface';
import { BasicListActionDirective } from './basic-list-action/basic-list-action.directive';

@Component({
  selector: 'b-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {
  @Input() items: BasicListItem[];

  @ContentChild(BasicListActionDirective, { static: true }) contentChild !: BasicListActionDirective;

  constructor() { }

  ngOnInit() {
  }
}
