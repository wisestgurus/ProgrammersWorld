import { Component, OnInit } from '@angular/core';
import { ctButtons } from '../ct-button.data';
import { tutorialItems } from './ct-decomposition.data';
@Component({
  templateUrl: './ct-decomposition.component.html',
  styleUrls: ['./ct-decomposition.component.scss']
})
export class CTDecompositionComponent implements OnInit {
  tutorialItems = tutorialItems;

  introductionButton = ctButtons.introduction;
  patternRecognitionButton = ctButtons.patternRecognition;
  abstractionButton = ctButtons.abstraction;
  algorithmButton = ctButtons.algorithm;

  constructor() { }

  ngOnInit(): void {
  }

}
