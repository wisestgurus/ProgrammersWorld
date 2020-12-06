import { Component, Input, OnInit } from '@angular/core';
import { tutorialItemsInterface } from '../shared/shared';

@Component({
  selector: 'wg-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {

  @Input() tutorialItems: tutorialItemsInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
