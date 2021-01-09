import { Component, Input, OnInit } from '@angular/core';
import { Token } from 'prismjs';
import * as Prism from 'prismjs';
@Component({
  selector: ':not(pre)[pw-code]',
  templateUrl: './code-tokenizer.component.html',
})
export class CodeTokenizerComponent implements OnInit {

  constructor() { }

  tokens: any;

  private grammar: any;

  @Input() set language(language: string) {
    this.grammar = !!language ? Prism.languages[language] : undefined;
  }

  @Input('pw-code') set highlight(source: string | Token[]) {
    this.tokens = typeof (source) === 'string' ? this.tokenize(source) : source;
  }

  isString(token: string | Token): boolean { return typeof (token) === 'string' }

  private tokenize(source: string): (string | Token)[] {
    if (!source) { return ['']; }

    if (!this.grammar) { return [source]; }

    return Prism.tokenize(source, this.grammar);
  }

  ngOnInit(): void {
  }

}
