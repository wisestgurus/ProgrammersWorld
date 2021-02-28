import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsRoutingConfig } from 'src/app/shared/shared';
import { IntroductionToHTMLComponent } from './introduction-to-html/introduction-to-html.component';

import { BasicSyntaxExplainedComponent } from './basic-syntax-explained/basic-syntax-explained.component';

const routes: Routes = [

  { ...TutorialsRoutingConfig.HTML.routesPath.introduction, component: IntroductionToHTMLComponent },
  { ...TutorialsRoutingConfig.HTML.routesPath.basicSyntaxExplained, component: BasicSyntaxExplainedComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HTMLRoutingModule { }
