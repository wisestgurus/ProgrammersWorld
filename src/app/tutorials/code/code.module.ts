import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './code.component';
import { CodeHighlighterComponent } from './code-highlighter/code-highlighter.component';
import { CodeTokenizerComponent } from './code-tokenizer/code-tokenizer.component';

@NgModule({
  declarations: [
    CodeComponent,
    CodeHighlighterComponent,
    CodeTokenizerComponent,
  ],
  imports: [
    CommonModule
  ],

  exports: [
    CodeComponent
  ]
})
export class CodeModule { }
