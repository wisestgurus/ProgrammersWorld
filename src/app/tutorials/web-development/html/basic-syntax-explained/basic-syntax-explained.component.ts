import { Component, OnInit } from '@angular/core';
import { HTMLConfig, MetaAndTitleService, tutorialItemsInterface } from 'src/app/shared/shared';
@Component({
  selector: 'pw-basic-syntax-explained',
  templateUrl: './basic-syntax-explained.component.html',
  styleUrls: ['./basic-syntax-explained.component.scss']
})
export class BasicSyntaxExplainedComponent implements OnInit {

  constructor(private metaAndTitleService: MetaAndTitleService) { }

  tutorialItems: tutorialItemsInterface = {
    heading: 'Basic Syntax Explained',
    prerequisites: [{ ...HTMLConfig.buttonsConfig.introduction }],
    objectives: [
      'The basic tags included in every HTML document, with an explanation of how browsers render each one of them',
      'The best practice involved in using either a single or a double quote for attribute values',
      'Whether tags or attributes name should be case insensitive or sensitive'
    ],

    summaries: [],
    buttons: {
      prevPath: HTMLConfig.buttonsConfig.introduction.path
    }
  }

  ngOnInit(): void {

    this.metaAndTitleService.setMetaTag({
      name: 'keywords', content: [
        'What DOM is', 'Basic DOM structure in HTML', 'Single vs double quote for attribute values',
        'Case insensitive vs sensitive for tags or attributes name'
      ].toString().toLowerCase()
    })
    this.metaAndTitleService.setTitle(this.tutorialItems.heading)
  }

}
