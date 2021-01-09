import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pre[pw-code]',
  templateUrl: './code-highlighter.component.html',
  styleUrls: ['./code-highlighter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'pw-code',
    '[class.language-none]': '!disabled'
  }
})
export class CodeHighlighterComponent implements OnInit {

  constructor() { }

  disabled = false;

  @Input() set disableHighlight(value: boolean) {
    this.disabled = coerceBooleanProperty(value);
  }

  @Input() language: string;

  @Input('pw-code') source: string;

  ngOnInit(): void {
  }

}
