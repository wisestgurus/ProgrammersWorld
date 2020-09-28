import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from './navigation/navigation.module';

import { RootComponent } from './root.component';
import { ScreenLayoutService, CODEMIRROR_TOKEN, SharedModule } from './shared/shared';
import { routes } from './root.routes';
import { DashboardComponent } from './dashboard/dashboard.component';

let codemirror = window['CodeMirror'];
@NgModule({
  declarations: [
    RootComponent,
    DashboardComponent
  ],
  imports: [
    NavigationModule,
    SharedModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [
    ScreenLayoutService,
    { provide: CODEMIRROR_TOKEN, useValue: codemirror }
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
