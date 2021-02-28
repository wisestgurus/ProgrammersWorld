import { Component, OnInit } from '@angular/core';

import {
  tutorialItemsInterface, TutorialsRoutingConfig, MetaAndTitleService
} from 'src/app/shared/shared';

@Component({
  selector: 'pw-introduction-to-html',
  templateUrl: './introduction-to-html.component.html',
  styleUrls: ['./introduction-to-html.component.scss']
})
export class IntroductionToHTMLComponent implements OnInit {

  constructor(private metaAndTitleService: MetaAndTitleService) { }

  a = '<html><body><h1>Abba</h1></body></html>'


  tutorialItems: tutorialItemsInterface = {
    heading: 'Introduction to HTML',

    briefIntro: [
      'HTML stands for HyperText Markup Language',
      'It is the language used by the web to structure and display webpages',
    ],

    prerequisites: [
      {
        ...TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.main,
      },
    ],

    objectives: [
      'The meaning of hypertext',
      'The meaning of a markup language',
      'What HTML is',
      'What HTML tag is',
      'What HTML element is',
      'What HTML attribute is'
    ],

    glossaries: [
      {
        heading: 'Hypertext', definitions: [
          'hypetex is ____'
        ], examples: [
          'HTML tags',
        ]
      },

      {
        heading: 'Markup language', definitions: [
          'A markup language is _____'
        ], examples: [
          'HTML',
          'XML',
        ]
      }
    ],

    summaries: [
      'HTML is the document used by the web to structure and display static contents.',
      'A HTML tag is a markup syntax surrounded by angle brackets.',
      'A HTML element is a block of code consisting of tag(s) with either an element content or no element content.',
      'A HTML attribute provides additional information about an element.'
    ],

    buttons: {
      nextPath: TutorialsRoutingConfig.HTML.buttonsConfig.basicSyntaxExplained.path,
    }
  }

  ngOnInit(): void {
    this.metaAndTitleService.setTitle(this.tutorialItems.heading);
    this.metaAndTitleService.setMetaTag({
      name: 'keywords', content: [
        'The meaning of hypertext',
        'The meaning of a markup language',
        'What HTML is',
        'What HTML tag is',
        'What HTML element is',
        'What HTML attribute is'
      ].toString().toLowerCase()
    })
  }
}
