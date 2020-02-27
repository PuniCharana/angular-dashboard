import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
