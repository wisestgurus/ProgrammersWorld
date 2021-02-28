import { Component, OnInit } from '@angular/core';
import { navigationItemsInterface, TutorialsRoutingConfig } from 'src/app/shared/shared';
import { tutorialsNavigation } from '../tutorials-navigation.data';

@Component({
  selector: 'pw-tutorials',
  templateUrl: './tutorials-root.component.html',
  styleUrls: ['./tutorials-root.component.scss']
})
export class TutorialsRootComponent implements OnInit {

  constructor() { }

  tutorialsNavigation = tutorialsNavigation;

  ngOnInit(): void {
  }

}
