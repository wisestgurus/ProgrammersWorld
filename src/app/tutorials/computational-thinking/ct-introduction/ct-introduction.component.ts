import { Component, OnInit } from '@angular/core';
import { tutorialItems } from './ct-introduction.data';
import { ctButtons } from '../ct-button.data';

@Component({
  templateUrl: './ct-introduction.component.html',
  styleUrls: ['./ct-introduction.component.scss']
})
export class CTIntroductionComponent implements OnInit {

  tutorialItems = tutorialItems;
  decompositionButton = ctButtons.decomposition;
  patternRecognitionButton = ctButtons.patternRecognition;
  abstractionButton = ctButtons.abstraction;
  algorithmButton = ctButtons.algorithm;

  constructor() { }

  ngOnInit(): void {
  }

}
