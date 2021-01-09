import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pw-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input() a;
  @Input() language;
  constructor() { }

  ngOnInit(): void {
  }

}
