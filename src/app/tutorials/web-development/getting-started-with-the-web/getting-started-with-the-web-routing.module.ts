import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialsRoutingConfig } from '../../../shared/shared';

import { HistoryOfTheWebComponent } from './history-of-the-web/history-of-the-web.component';
import { HowTheInternetWorksComponent } from './how-the-internet-works/how-the-internet-works.component';
import { HowTheWebWorksComponent } from './how-the-web-works/how-the-web-works.component';
import { IntroductionToTheWebComponent } from './introduction-to-the-web/introduction-to-the-web.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: TutorialsRoutingConfig.gettingStartedWithTheWeb.routesPath.introduction.path
  },

  {
    ...TutorialsRoutingConfig.gettingStartedWithTheWeb.routesPath.introduction,
    component: IntroductionToTheWebComponent
  },

  {
    ...TutorialsRoutingConfig.gettingStartedWithTheWeb.routesPath.history,
    component: HistoryOfTheWebComponent
  },

  {
    ...TutorialsRoutingConfig.gettingStartedWithTheWeb.routesPath.howTheInternetWorks,
    component: HowTheInternetWorksComponent
  },

  {
    ...TutorialsRoutingConfig.gettingStartedWithTheWeb.routesPath.howTheWebWorks,
    component: HowTheWebWorksComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GettingStartedWithTheWebRoutingModule { }