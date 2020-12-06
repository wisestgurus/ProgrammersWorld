import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/ext-beautify';

const theme = 'ace/theme/xcode'
const mode = 'ace/mode/javascript'

@Component({
  selector: 'wg-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  
  @ViewChild('editor', { static: true }) editor: ElementRef
  constructor() { }
  codeEditor: ace.Ace.Editor;
  options: Partial<ace.Ace.EditorOptions> = {
    highlightActiveLine: false,
    theme: theme,
    showLineNumbers: false,
    readOnly: true,
    fadeFoldWidgets: true,
    copyWithEmptySelection: true,
    minLines: 12,
    maxLines: Infinity,
  }

  ngOnInit() {
    this.codeEditor = ace.edit(this.editor.nativeElement, this.options);
    this.codeEditor.session.setMode(mode);
  }
}
