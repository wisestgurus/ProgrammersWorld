import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTMLRoutingModule } from './html-routing.module';
import { IntroductionToHTMLComponent } from './introduction-to-html/introduction-to-html.component';
import { TutorialsRootModule } from '../../tutorials-root/tutorials-root.module';
import { BasicSyntaxExplainedComponent } from './basic-syntax-explained/basic-syntax-explained.component';


@NgModule({
  declarations: [IntroductionToHTMLComponent, BasicSyntaxExplainedComponent],
  imports: [
    CommonModule,
    HTMLRoutingModule,
    TutorialsRootModule
  ]
})
export class HTMLModule { }
