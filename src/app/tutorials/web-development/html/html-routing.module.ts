import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HTMLConfig } from 'src/app/shared/shared';
import { IntroductionToHTMLComponent } from './introduction-to-html/introduction-to-html.component';

import { HTMLComponent } from './html.component';
import { BasicSyntaxExplainedComponent } from './basic-syntax-explained/basic-syntax-explained.component';

const routes: Routes = [
  {
    path: '', component: HTMLComponent, children: [
      { path: '', redirectTo: HTMLConfig.routesPathConfig.introduction.path, pathMatch: 'full' },
      { ...HTMLConfig.routesPathConfig.introduction, component: IntroductionToHTMLComponent },
      { ...HTMLConfig.routesPathConfig.basicSyntaxExplained, component: BasicSyntaxExplainedComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HTMLRoutingModule { }
