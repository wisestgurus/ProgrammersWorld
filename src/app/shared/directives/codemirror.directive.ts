import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { CODEMIRROR_TOKEN } from '../services/codemirror.service';

@Directive({
    selector: '[wgCodeMirror]'
})

export class CodeMirrorDirective implements OnInit {
    constructor(@Inject(CODEMIRROR_TOKEN) private codemirror: any, private elem: ElementRef) { }

    ngOnInit() {
        this.codemirror.fromTextArea(this.elem.nativeElement, {
            lineNumbers: true,
            mode:
                { name: 'javascript', typescript: 'true' },
            autocorrect: true,
        });
    }
}