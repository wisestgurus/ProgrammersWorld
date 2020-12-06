import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GettingStartedWithTheWebRoutingModule } from './getting-started-with-the-web-routing.module';
import { GettingStartedWithTheWebComponent } from
  './getting-started-with-the-web.component';
import { TutorialsModule } from '../../tutorials.module';
import { IntroductionToTheWebComponent } from './introduction-to-the-web/introduction-to-the-web.component';

@NgModule({
  declarations: [GettingStartedWithTheWebComponent, IntroductionToTheWebComponent],
  imports: [
    CommonModule,
    GettingStartedWithTheWebRoutingModule,
    TutorialsModule
  ]
})
export class GettingStartedWithTheWebModule { }
