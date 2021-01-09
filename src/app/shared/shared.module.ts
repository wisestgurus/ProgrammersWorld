import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './angular-material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertDirective } from './directives/alert.directive';
import { RenderNotOnServerDirective } from './directives/render-not-on-server.directive';
import { RenderOnlyOnServerDirective } from './directives/render-only-on-server.directive';

import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
  ],

  exports: [
    RouterModule,
    CommonModule,
    RenderNotOnServerDirective,
    RenderOnlyOnServerDirective,
    AlertDirective,
    MaterialModule,
    TimerComponent,
  ],

  declarations: [
    AlertDirective,
    RenderNotOnServerDirective,
    RenderOnlyOnServerDirective,
    TimerComponent,
  ]
})
export class SharedModule { }
