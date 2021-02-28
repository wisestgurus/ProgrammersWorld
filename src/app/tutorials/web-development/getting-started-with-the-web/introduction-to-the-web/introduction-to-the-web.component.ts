import { Component, OnInit } from '@angular/core';
import { TutorialsRoutingConfig, MetaAndTitleService, tutorialItemsInterface }
  from 'src/app/shared/shared';

@Component({
  selector: 'pw-introduction-to-the-web',
  templateUrl: './introduction-to-the-web.component.html',
  styleUrls: ['./introduction-to-the-web.component.scss']
})
export class IntroductionToTheWebComponent implements OnInit {

  constructor(private metaAndTitleService: MetaAndTitleService) { }

  tutorialItems: tutorialItemsInterface = {
    heading: TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.introduction.name,
    briefIntro: [
      'The web (www or World Wide Web) is not the internet',
      `The web is a compilation of different series of HTML documents with all 
      its resources linked together`
    ],

    prerequisites: [
      // { name: 'computational thinking', path: '', isOptional: true }
      { name: 'nothing' }
    ],

    objectives: [
      'what a web asset is',
      'what a webpage, a static webpage and a dynamic webpage are',
      'what a website and a single page website are',
      'what a web browser is',
      'what an address bar is',
      'what a search bar and a search engine are',
      'what the web is',
      'what the internet is',
      'the difference between the internet and the web'
    ],

    glossaries: [
      {
        heading: 'web asset (or asset)', definitions: [
          'A web asset is an additional file added to a HTML document',
          `This file includes, but is not limited to; any media file 
          (audio, video, images, etc), style files, script files and so on`
        ],

        examples: [
          'An image file',
          'A video file',
          'An audio file',
          'A CSS file',
          'A font type file',
          'A JavaScript file'
        ]
      },

      {
        heading: 'webpage (web page or page)', definitions: [
          `A webpage is a single HTML (or web) document`,
          `The page you are currently on is an example of a webpage`,
          `A webpage can consist of either text, images, videos, audios or other web assets
          like; styles, script and so on, which collectively makes up the page`
        ],

        examples: [
          'The page you are currently on'
        ]
      },

      {
        heading: 'static webpage', definitions: [
          'Static means anything fixed or anything that does not change, unless changed manually',
          `Therefore, a static webpage is when the contents of the webpage 
        remains fixed and does not change unless changed manually`
        ],

        examples: [
          `Hint; Most static webpages are built with HTML and other web assets alone, 
          excluding a script file`
        ]
      },

      {
        heading: 'dynamic webpage', definitions: [
          `Dynamic (opposite of static) means anything that is not fixed 
        or anything that changes automatically based on an event of some sort`,
          `Therefore, a dynamic webpage is when the contents of the webpage 
        change automatically based on an event of some sort`
        ],

        examples: [
          `Hint; Most webpages can only be dynamic with the help of a 
          programming language like; JavaScript. (i.e. a script file 
            included in a HTML document)`
        ]
      },

      {
        heading: 'website (web site or site)', definitions: [
          `A website is the combination of 2 or more webpages linked together and present in
          the same location`,
          `ProgrammersWorld is an example of a website; not only the page you are currently 
          on is taken into consideration, but all pages it constitutes`,
        ],

        examples: [
          'ProgrammersWorld as a whole'
        ]
      },

      {
        heading: 'single page website', definitions: [
          `A single page website is a single webpage present in its unique location`,
          `For more information, see the defintition of a webpage and a website above`
        ]
      },

      {
        heading: 'address bar', definitions: [
          `An address bar is an input box, which has the same functionality 
          similar to a search bar (but does'nt come with a search engine by default) and its 
          primary goal or purpose is to collect and display the current location or the 
          web address of a website - which is simply the URL`,
          `See search bar below`
        ]
      },

      {
        heading: 'search bar', definitions: [
          `A search bar is an input box that allows users to type in what they
        want to search on the web. You can type in a single word or a phrase 
        (and must not be the address) and a search engine handles the rest`,
          `See search engine below`
        ]
      },

      {
        heading: 'search bar vs address bar', definitions: [
          `The difference between an address bar and a search bar is that, an address bar is ideally 
      meant to just point and show the location or web address of a website, while a search bar
      must not contain any address, you can type in just a single word in a search bar and a
      search engine handles the rest`,
          `Fortunately enough though, web browsers by default now integrate an address bar with 
         a search engine making it easier to browse the web even when using an address bar without
         needing to know the address of the website`,
          `See search engine below`
        ]
      },

      {
        heading: 'web crawler (spider, spiderbot or crawler)', definitions: [
          `A web crawler is a bot or a mechanism that systematically browses 
          the world wide web typically for the purpose of web indexing`,
          `Web crawlers gather different sort of informations from almost every website 
          on the web, just to make sure that the website can be viewed, when searched 
          by a search engine`,
          `Hint: when your website is not viewed on the web yet, this is because web crawlers
          haven't yet indexed your site and in turn search engines cannot find it`,
          `see search engine below`
        ]
      },

      {
        heading: 'search engine', definitions: [
          `All search engines come with a default search bar`,
          `A search bar is the visible part (what you see) in a web browser`,
          `A search engine is a computer or a machine that uses a search bar to collect 
          search queries from a user, runs an algorithm on a web crawler 
          and returns back links to different results (based on the alogrithm) to the browser.
          The pages in which the results are returned back are referred to as 
          search engine result pages (SERPs)`,
        ],

        examples: [
          'Google search engine',
          'Bing search engine',
          'Yahoo search engine'
        ]
      },

      {
        heading: 'web browser (or browser)', definitions: [
          'A web browser is also called a user agent',
          `A web browser is a software application used in searching, browsing, 
          surfing or navigating the web`,
          `All web browsers come with a default search engine, an address bar
           and other tools to help you out when dealing with anything related to the web`,
        ],

        examples: [
          'Mozilla Firefox',
          'Microsoft Edge',
          'Google Chrome'
        ]
      },

    ],

    summaries: [
      'A web asset is an asset included in a webpage',
      `A webpage is the combination of a single HTML document with all 
      its web assets`,
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
      nextPath: TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.howTheInternetWorks.path
    }

  }

  ngOnInit(): void {
    this.metaAndTitleService.setTitle('Introduction to the web');
  }
}
