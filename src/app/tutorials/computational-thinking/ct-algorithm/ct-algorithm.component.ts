import { Component, OnInit } from '@angular/core';
import { tutorialItems } from './ct-algorithm.data';

@Component({
  selector: 'app-ct-algorithm',
  templateUrl: './ct-algorithm.component.html',
  styleUrls: ['./ct-algorithm.component.scss']
})
export class CTAlgorithmComponent implements OnInit {

  tutorialItems = tutorialItems;


  constructor() { }

  ngOnInit(): void {
  }

}
