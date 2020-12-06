import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavigationModule } from './navigation/navigation.module';
import { SharedModule } from './shared/shared';
import { WGRootRoutingModule } from './wg-root-routing.module';

import { WGRootComponent } from './wg-root.component';
import { GettingStartedWithTheWebModule } from
  './tutorials/web-development/getting-started-with-the-web/getting-started-with-the-web.module';
import { HomepageComponent } from './homepage/homepage.component';


const $ = window['$']
@NgModule({

  declarations: [
    WGRootComponent,
    HomepageComponent,
  ],

  imports: [
    NavigationModule,
    WGRootRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    GettingStartedWithTheWebModule,
  ],

  providers: [
  ],

  bootstrap: [WGRootComponent]
})
export class WGRootModule { }
