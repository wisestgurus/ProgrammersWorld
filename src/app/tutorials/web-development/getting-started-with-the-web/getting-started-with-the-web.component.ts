import { Component, OnInit } from '@angular/core';
import { navigationItemsInterface, GettingStartedWithTheWebConfig } from 'src/app/shared/shared';

@Component({
  selector: 'wg-getting-started-with-the-web',
  templateUrl: './getting-started-with-the-web.component.html',
  styleUrls: ['./getting-started-with-the-web.component.scss']
})
export class GettingStartedWithTheWebComponent implements OnInit {

  constructor() { }

  otherNavigationItems: navigationItemsInterface = {
    heading: 'getting started with the web', items: [
      {
        heading: 'getting started with the web', contents: [
          {
            links: [
              GettingStartedWithTheWebConfig.buttonsConfig.introductionToTheWeb,
              GettingStartedWithTheWebConfig.buttonsConfig.historyOfTheWeb,
              GettingStartedWithTheWebConfig.buttonsConfig.howTcpIpWorks,
              GettingStartedWithTheWebConfig.buttonsConfig.howTheWebWorks,
              GettingStartedWithTheWebConfig.buttonsConfig.whatIsWebDevelopment,
              GettingStartedWithTheWebConfig.buttonsConfig.fieldsInWebDevelopment,
            ]
          }
        ]
      },
    ]
  }
  ngOnInit(): void {
  }

}
