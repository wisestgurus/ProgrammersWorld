import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GettingStartedWithTheWebRoutingModule } from './getting-started-with-the-web-routing.module';
import { TutorialsRootModule } from '../../tutorials-root/tutorials-root.module';
import { IntroductionToTheWebComponent } from './introduction-to-the-web/introduction-to-the-web.component';
import { HistoryOfTheWebComponent } from './history-of-the-web/history-of-the-web.component';
import { HowTheInternetWorksComponent } from './how-the-internet-works/how-the-internet-works.component';
import { HowTheWebWorksComponent } from './how-the-web-works/how-the-web-works.component';

@NgModule({
  declarations: [
    IntroductionToTheWebComponent,
    HistoryOfTheWebComponent,
    HowTheInternetWorksComponent,
    HowTheWebWorksComponent
  ],
  imports: [
    CommonModule,
    GettingStartedWithTheWebRoutingModule,
    TutorialsRootModule
  ]
})
export class GettingStartedWithTheWebModule { }
