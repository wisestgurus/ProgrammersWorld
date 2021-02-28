import { Component, OnInit } from '@angular/core';
import { TutorialsRoutingConfig, tutorialItemsInterface } from 'src/app/shared/shared';

@Component({
  selector: 'pw-how-the-internet-works',
  templateUrl: './how-the-internet-works.component.html',
  styleUrls: ['./how-the-internet-works.component.scss']
})
export class HowTheInternetWorksComponent implements OnInit {

  constructor() { }

  tutorialItems: tutorialItemsInterface = {
    heading: 'How the internet works',

    prerequisites: [
      { ...TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.introduction }
    ],

    objectives: [
      'what a url is',
      'what a domain name is and what a domain name system(DNS) is',
      'how tcp / ip works'
    ],

    glossaries: [
      {
        heading: 'url', definitions: [
          `URL stands for Uniform Resource Locator`,
          `A URL is a mechanism used by the internet, to point, retrieve and 
          show a location to a resource`,
          `A URL uses a path-like address format`,
          `Think of a URL as the address of your house - If someone wants to 
          visit you, he/she definitely must follow that path`,
          `A domain name is included in a URL`,
          `See domain name below`
        ],

        examples: [
          `For a real example, Look at the address bar located at the top of your web browser - 
          The text in it, is called a URL`
        ]
      },

      {
        heading: 'domain name (or domain)', definitions: [
          `A domain name is a registered name used for identifying services on the internet`,
          `Every domain name is unique`,
          `The internet only understands what we call an IP address. But an IP address 
          (e.g. 162.111.65.34) is fairly difficult to understand, memorize or remember 
          by humans (we easily understand letters faster than numbers right). 
          This is where a domain name comes to play`,
          `Think of a domain name as just an alternative to an IP address. Infact
          behind the scene, every domain name is mapped with its corresponding IP address`,
          `See DNS below`
        ],
      },

      {
        heading: 'domain name system (DNS)', definitions: [
          `A  DNS is a mechanism or a system used in mapping a domain name with its corresponding
          IP address`,
          `See domain name above`,
        ],

        examples: [
          `When a user types in a domain name in the address bar of a web browser, DNS converts 
          the name into an IP address behind the scene and the website associated with it, gets loaded`
        ]
      },
    ],

    summaries: [

    ],

    buttons: {
      prevPath: TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.introduction.path,
      nextPath: TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.howTheWebWorks.path
    }
  }

  ngOnInit(): void {
  }

}
