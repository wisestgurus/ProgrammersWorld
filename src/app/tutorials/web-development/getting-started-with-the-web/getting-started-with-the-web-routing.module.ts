import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GettingStartedWithTheWebConfig }
  from 'src/app/shared/shared';

import { GettingStartedWithTheWebComponent } from
  './getting-started-with-the-web.component';
import { HistoryOfTheWebComponent } from './history-of-the-web/history-of-the-web.component';
import { IntroductionToTheWebComponent } from './introduction-to-the-web/introduction-to-the-web.component';

const routes: Routes = [
  {
    path: '', component: GettingStartedWithTheWebComponent, children: [
      {
        path: '',
        redirectTo: GettingStartedWithTheWebConfig.routesPathConfig.introduction.path, pathMatch: 'full'
      },

      {
        ...GettingStartedWithTheWebConfig.routesPathConfig.introduction,
        component: IntroductionToTheWebComponent
      },

      {
        ...GettingStartedWithTheWebConfig.routesPathConfig.history,
        component: HistoryOfTheWebComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GettingStartedWithTheWebRoutingModule { }
