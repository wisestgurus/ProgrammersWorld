import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NavigationModule } from './navigation/navigation.module';
import { SharedModule } from './shared/shared';
import { WGRootRoutingModule } from './pw-root-routing.module';

import { PWRootComponent } from './pw-root.component';
import { GettingStartedWithTheWebModule } from
  './tutorials/web-development/getting-started-with-the-web/getting-started-with-the-web.module';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({

  declarations: [
    PWRootComponent,
    HomepageComponent,
    PageNotFoundComponent,
  ],

  imports: [
    NavigationModule,
    WGRootRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    GettingStartedWithTheWebModule,
  ],

  providers: [
  ],

  bootstrap: [PWRootComponent]
})
export class PWRootModule { }
