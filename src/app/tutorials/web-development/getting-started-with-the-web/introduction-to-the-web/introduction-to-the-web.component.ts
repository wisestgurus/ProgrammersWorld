import { Component, OnInit } from '@angular/core';
import { GettingStartedWithTheWebConfig, MetaAndTitleService, tutorialItemsInterface } from 'src/app/shared/shared';

@Component({
  selector: 'pw-introduction-to-the-web',
  templateUrl: './introduction-to-the-web.component.html',
  styleUrls: ['./introduction-to-the-web.component.scss']
})
export class IntroductionToTheWebComponent implements OnInit {

  constructor(private metaAndTitleService: MetaAndTitleService) { }

  tutorialItems: tutorialItemsInterface = {
    heading: 'Introduction to the web',
    briefIntro: [
      'The web (www or World Wide Web) is not the internet',
      `It is a compilation of different series of HTML documents with all 
      its web resources linked together`
    ],

    prerequisites: [
      { name: 'computational thinking', path: '', isOptional: true }
    ],

    objectives: [
      'what a web resource is',
      'what a webpage is',
      'what a website is',
      'what a static webpage is',
      'what a dynamic webpage is',
      'what a web browser is',
      'what a search bar is',
      'what a search engine is',
      'what the web is',
      'what the internet is',
      'the difference between the internet and the web'
    ],

    glossaries: [
      {
        heading: 'web resource', definitions: [
          'A web resource is an asset included in a webpage',
          'An asset is either a font, a css, an icon, a javascript or a media file'
        ],

        examples: [
          'An image',
          'A video',
          'An audio',
          'A CSS file',
          'A JavaScript file'
        ]
      },

      {
        heading: 'webpage', definitions: [
          `A webpage is the combination of a single HTML document with all its web resources`
        ],

        examples: [
          'The page you are currently on'
        ]
      },

      {
        heading: 'website', definitions: [
          `A website is the combination of 2 or more webpages linked together and present in
          the same location`
        ],

        examples: [
          'ProgrammersWorld as a whole'
        ]
      },

      {
        heading: 'static webpage', definitions: [
          'Static means anything fixed or anything that does not change, unless altered manually',
          `Therefore, a static webpage is simply when the content of the webpage 
        remains fixed and does not change unless altered manually`
        ],

        examples: [
          'A contact us webpage'
        ]
      },

      {
        heading: 'dynamic webpage', definitions: [
          `Dynamic (opposite of static) means anything that is not fixed 
        or anything that changes automatically based on an occurence of some sort`,
          `Therefore, a dynamic webpage is simply when the contents of the webpage 
        change automatically based on an occurence of some sort`
        ],

        examples: [
          'A weather forecast webpage',
          'An ecommerce webpage'
        ]
      },

      {
        heading: 'search bar', definitions: [
          `A search bar is an input box which allows you to type in what you 
        want to search on the web`
        ]
      },

      {
        heading: 'search engine', definitions: [
          'All search engines are integrated with a search bar',
          `A search engine is a machine or a computer that makes searching, 
          browsing or surfing the web possible`,
          `It uses a search bar to accept users input (i.e. what you want to search), 
          processes it and finally displays back the result to the web browser`,
        ],

        examples: [
          'Google search engine',
          'Bing search engine',
          'Yahoo search engine'
        ]
      },

      {
        heading: 'web browser', definitions: [
          'All web browsers come with a default search engine',
          `A web browser (also referred to as a user agent) is a 
        software application used in searching, browsing, surfing or navigating the web`,
        ],

        examples: [
          'Mozilla Firefox',
          'Microsoft Edge',
          'Google Chrome'
        ]
      },

    ],

    summaries: [
      'A web resource is an asset included in a webpage',
      `A webpage is the combination of a single HTML document with all 
      its web resources`,
      `A website is the combination of 2 or more webpages linked together and present in
          the same location`,
      `A static webpage is when the content of the webpage 
          remains fixed and does not change unless altered manually`,
      `A dynamic webpage is when the contents of the webpage 
          change automatically based on an occurence of some sort`,
      `A search bar is an input box which allows you to type in what you 
        want to search on the web`,
      `A search engine is a machine or a computer that makes searching, 
        browsing or surfing the web possible`,
      `A web browser (also referred to as a user agent) is a software 
      application used in searching, browsing, surfing or navigating the web`,
      `The web, by definition is just a combination of different websites linked together
       and shared over the internet`,
      `The internet by definition, is just a network of networks. This is what makes
       connection and sharing of data on the web globally possible`
    ],

    buttons: {
      nextPath: GettingStartedWithTheWebConfig.buttonsConfig.history.path
    }

  }

  ngOnInit(): void {
    this.metaAndTitleService.setTitle('Introduction to the web');
  }

}
