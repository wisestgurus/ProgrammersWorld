import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'wg-tutorials-container',
  templateUrl: './tutorials-container.component.html',
  styleUrls: ['./tutorials-container.component.scss']
})
export class TutorialsContainerComponent implements OnInit {

  @Input() tutorialItems;
  constructor() { }

  ngOnInit(): void {
  }

}
