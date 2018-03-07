import { Component, OnInit, EventEmitter, Input } from '@angular/core';

import { HeaderConfigModel } from './model/headerConfigModel';


@Component({
  selector: 'custom-headertab',
  templateUrl: './headertab.component.html',
  styleUrls: ['./headertab.component.css']
})
export class HeadertabComponent implements OnInit {


  @Input() tabConfiguration;
  selected: any;
  constructor() {
  }

  ngOnInit() {
  }

  select(item) {
    this.selected = item;
  };

  isActive(item) {
    return this.selected === item;
  };

}
