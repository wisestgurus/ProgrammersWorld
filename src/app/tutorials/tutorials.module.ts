import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../navigation/navigation.module';
import { SharedModule } from '../shared/shared';
import { TutorialsComponent } from './tutorials.component';


@NgModule({
  declarations: [TutorialsComponent],
  imports: [
    CommonModule,
    NavigationModule,
    SharedModule
  ],

  exports: [
    NavigationModule,
    SharedModule,
    TutorialsComponent
  ]
})
export class TutorialsModule { }
