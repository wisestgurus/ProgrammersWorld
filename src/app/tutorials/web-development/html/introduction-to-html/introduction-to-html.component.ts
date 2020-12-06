import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { tutorialItemsInterface, HTMLConfig, GettingStartedWithTheWebConfig } from 'src/app/shared/shared';

@Component({
  selector: 'wg-introduction-to-html',
  templateUrl: './introduction-to-html.component.html',
  styleUrls: ['./introduction-to-html.component.scss']
})
export class IntroductionToHTMLComponent implements OnInit {

  constructor(private title: Title) { }

  tutorialItems: tutorialItemsInterface = {
    heading: 'introduction to html',

    briefIntro: ['s', 'a'],

    prerequisites: [
      {
        name: 'computational thinking', path: 'wefe4r', isOptional: true
      },

      {
        ...GettingStartedWithTheWebConfig.buttonsConfig.main,
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
          'HTML attributes',
          'HTML elements',
        ]
      },

      {
        heading: 'A Markup language', definitions: [
          'A markup language is _____'
        ], examples: [
          'HTML',
          'XML',
        ]
      }

    ],

    buttons: {
      next: HTMLConfig.buttonsConfig.basicSyntaxExplained,
    }
  }

  ngOnInit(): void {
    this.title.setTitle('ProgrammersWorld - Introduction to HTML');
  }

}
