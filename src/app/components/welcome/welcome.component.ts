import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'b-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() {
    console.log('KLKLKLKLKL');
  }

  ngOnInit() {
  }

  test(): boolean {
    return true;
  }

}
