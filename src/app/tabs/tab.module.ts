import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirsttabComponent } from './firsttab/firsttab.component';
import { SecondtabComponent } from './secondtab/secondtab.component';
import { ThirdtabComponent } from './thirdtab/thirdtab.component';
import { TabRouteModule } from './tab-router';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TabRouteModule
  ],
  declarations: [
    FirsttabComponent,
    SecondtabComponent,
    ThirdtabComponent
  ]
})
export class TabModule { }
