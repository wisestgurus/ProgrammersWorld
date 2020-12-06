import { Component, OnInit } from '@angular/core';
import { navigationItemsInterface, HTMLConfig } from 'src/app/shared/shared';

@Component({
  selector: 'wg-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HTMLComponent implements OnInit {

  constructor() { }
  otherNavigationItems: navigationItemsInterface = {
    heading: 'HTML', items: [
      {
        heading: 'HTML', contents: [
          {
            links: [
              HTMLConfig.buttonsConfig.introductionToHTML,
              HTMLConfig.buttonsConfig.basicSyntaxExplained
            ]
          }
        ]
      }
    ]
  }
  ngOnInit(): void {
  }

}
