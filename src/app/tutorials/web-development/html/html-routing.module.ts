import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HTMLConfig } from 'src/app/shared/shared';
import { IntroductionToHTMLComponent } from './introduction-to-html/introduction-to-html.component';

import { HTMLComponent } from './html.component';

const routes: Routes = [
  {
    path: '', component: HTMLComponent, children: [
      { path: '', redirectTo: HTMLConfig.routesPathConfig.introductionToHTML.path, pathMatch: 'full' },
      { path: HTMLConfig.routesPathConfig.introductionToHTML.path, component: IntroductionToHTMLComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HTMLRoutingModule { }
