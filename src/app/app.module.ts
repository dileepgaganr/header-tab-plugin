import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ROUTER_CONFIGURATION,RouterModule}from '@angular/router';

import { AppComponent } from './app.component';
import { HeadertabComponent } from './headertab/headertab.component';
import { AppRouteModule } from './app-router';
import { TabModule } from './tabs/tab.module';




@NgModule({
  declarations: [
    AppComponent,
    HeadertabComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouteModule,
    TabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
