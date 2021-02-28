import { Component, OnInit } from '@angular/core';
import { TutorialsRoutingConfig, tutorialItemsInterface } from 'src/app/shared/shared';

@Component({
  selector: 'pw-how-the-web-works',
  templateUrl: './how-the-web-works.component.html',
  styleUrls: ['./how-the-web-works.component.scss']
})
export class HowTheWebWorksComponent implements OnInit {

  constructor() { }

  tutorialItems: tutorialItemsInterface = {
    heading: 'How the web works',

    prerequisites: [
      { ...TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.howTheInternetWorks }
    ],

    objectives: [
      'what a web client is',
      'what a web server is',
      'what web hosting means',
      'how HTTP works (client-server communication)',
    ],

    glossaries: [

      {
        heading: 'web client (or client)', definitions: [
          `A web client is an application software or a user agent responsible for allowing 
          users to request for data from a web server, on the web`,
          `See web server below`
        ],

        examples: [
          'a web browser'
        ]
      },

      {
        heading: 'web server (or server)', definitions: [
          `A web server is a server software or a system of one or more computers 
          dedicated to running this software that can satisfy client requests on the web`,
          'See web client above'
        ],
      },

      {
        heading: 'web hosts', definitions: [
          `Web hosts are companies that provide space on a web server as well 
          as providing internet connectivity to run the server`,
          `Web hosts offer web hosting`,
          `See web hosting below`
        ],
      },

      {
        heading: 'web hosting', definitions: [
          `Web hosting is a type of internet service that allows individuals and organizations
          to make their website accessible on the web`,
          `Note; Internet Service Providers (ISP) offer web hosting also`
        ],
      },
    ],

    summaries: [

    ],

    buttons: {
      prevPath: TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.howTheInternetWorks.path,
      nextPath: TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.history.path
    }
  }
  ngOnInit(): void {
  }

}
