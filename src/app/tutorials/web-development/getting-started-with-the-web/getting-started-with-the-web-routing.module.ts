import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GettingStartedWithTheWebConfig }
  from 'src/app/shared/shared';

import { GettingStartedWithTheWebComponent } from
  './getting-started-with-the-web.component';
import { IntroductionToTheWebComponent } from './introduction-to-the-web/introduction-to-the-web.component';

const routes: Routes = [
  {
    path: '', component: GettingStartedWithTheWebComponent, children: [
      {
        path: '',
        redirectTo: GettingStartedWithTheWebConfig.routesPathConfig.introductionToTheWeb.path, pathMatch: 'full'
      },

      {
        path: GettingStartedWithTheWebConfig.routesPathConfig.introductionToTheWeb.path,
        component: IntroductionToTheWebComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GettingStartedWithTheWebRoutingModule { }
