import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './angular-material/material.module';

import { CodeMirrorDirective } from './/directives/codemirror.directive';
import { BootstrapAlertDirective } from './directives/bootstrap-alert.directive';

@NgModule({

  exports: [
    RouterModule,
    CommonModule,
    BootstrapAlertDirective,
    MaterialModule,
  ],

  declarations: [CodeMirrorDirective, BootstrapAlertDirective]
})
export class SharedModule { }
