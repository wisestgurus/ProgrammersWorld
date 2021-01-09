import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTMLRoutingModule } from './html-routing.module';
import { HTMLComponent } from './html.component';
import { IntroductionToHTMLComponent } from './introduction-to-html/introduction-to-html.component';
import { TutorialsModule } from '../../tutorials.module';
import { BasicSyntaxExplainedComponent } from './basic-syntax-explained/basic-syntax-explained.component';


@NgModule({
  declarations: [HTMLComponent, IntroductionToHTMLComponent, BasicSyntaxExplainedComponent],
  imports: [
    CommonModule,
    HTMLRoutingModule,
    TutorialsModule
  ]
})
export class HTMLModule { }
