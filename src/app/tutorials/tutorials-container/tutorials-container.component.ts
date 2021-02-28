import { Component, Input, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/shared/animations/router-animation';
import { tutorialItemsInterface } from '../../shared/shared';

@Component({
  selector: 'pw-tutorials-container',
  templateUrl: './tutorials-container.component.html',
  styleUrls: ['./tutorials-container.component.scss'],
  animations: [
    fadeInAnimation
  ]
})
export class TutorialsContainerComponent implements OnInit {

  constructor() { }
  @Input() tutorialItems: tutorialItemsInterface;
  expanded = true;
  ngOnInit(): void {
  }

}
