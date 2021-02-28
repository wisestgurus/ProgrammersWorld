import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsRoutingConfig } from '../../shared/shared';
import { TutorialsHomeComponent } from '../tutorials-home/tutorials-home.component';
import { TutorialsRootComponent } from './tutorials-root.component';

const routes: Routes = [
  {
    path: '', component: TutorialsRootComponent, children: [

      { path: '', redirectTo: TutorialsRoutingConfig.home.routePath, pathMatch: 'full' },

      { path: TutorialsRoutingConfig.home.routePath, component: TutorialsHomeComponent },

      {
        ...TutorialsRoutingConfig.gettingStartedWithTheWeb.routesPath.main,
        loadChildren: () =>
          import('../web-development/getting-started-with-the-web/getting-started-with-the-web.module').
            then(m => m.GettingStartedWithTheWebModule)
      },

      {
        ...TutorialsRoutingConfig.HTML.routesPath.main,
        loadChildren: () => import('../web-development/html/html.module').then(m => m.HTMLModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialsRootRoutingModule { }
