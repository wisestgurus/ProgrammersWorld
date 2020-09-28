import { NgModule } from '@angular/core';
import { TutorialsContainerComponent } from './tutorials-container/tutorials-container.component';
import { SharedModule } from '../shared/shared';
import { NavigationModule } from '../navigation/navigation.module';


@NgModule({
  declarations: [TutorialsContainerComponent],

  exports: [
    NavigationModule,
    SharedModule,
    TutorialsContainerComponent,
  ],

  imports: [
    NavigationModule,
    SharedModule,
  ]
})
export class TutorialsModule { }
