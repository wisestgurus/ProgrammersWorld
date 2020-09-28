import { Component, OnInit } from '@angular/core';
import { tutorialItems } from './ct-pattern-recognition.data';
@Component({
  selector: 'app-ct-pattern-recognition',
  templateUrl: './ct-pattern-recognition.component.html',
  styleUrls: ['./ct-pattern-recognition.component.scss']
})
export class CTPatternRecognitionComponent implements OnInit {

  tutorialItems = tutorialItems;

  constructor() { }

  ngOnInit(): void {
  }

}
