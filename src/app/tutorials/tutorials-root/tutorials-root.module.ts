import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../../navigation/navigation.module';
import { SharedModule } from '../../shared/shared';
import { CodeModule } from '../code/code.module';

import { TutorialsContainerComponent } from '../tutorials-container/tutorials-container.component';
import { TutorialsHomeComponent } from '../tutorials-home/tutorials-home.component';
import { TutorialsRootRoutingModule } from './tutorials-root-routing.module';
import { TutorialsRootComponent } from './tutorials-root.component';

@NgModule({
  declarations: [
    TutorialsContainerComponent,
    TutorialsHomeComponent,
    TutorialsRootComponent,
  ],
  imports: [
    CommonModule,
    NavigationModule,
    TutorialsRootRoutingModule,
    SharedModule,
  ],

  exports: [
    NavigationModule,
    SharedModule,
    TutorialsContainerComponent,
    CodeModule
  ]
})
export class TutorialsRootModule { }
