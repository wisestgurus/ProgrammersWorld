import { Component, OnInit } from '@angular/core';
import { tutorialItems } from './ct-abstraction.data';

@Component({
  selector: 'app-ct-abstraction',
  templateUrl: './ct-abstraction.component.html',
  styleUrls: ['./ct-abstraction.component.scss']
})
export class CTAbstractionComponent implements OnInit {

  tutorialItems = tutorialItems

  constructor() { }

  ngOnInit(): void {
  }

}
