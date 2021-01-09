import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { navigationItemsInterface, HTMLConfig, MetaAndTitleService } from 'src/app/shared/shared';

@Component({
  selector: 'pw-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HTMLComponent implements OnInit {

  constructor(private metaAndTitleService: MetaAndTitleService) { }
  otherNavigationItems: navigationItemsInterface = {
    heading: 'HTML', items: [
      HTMLConfig.buttonsConfig.introduction,

      {
        expansionHeader: 'beginners guide', expansionContents: [
          {
            links: [
              HTMLConfig.buttonsConfig.basicSyntaxExplained
            ]
          }
        ]
      }
    ]
  }
  ngOnInit(): void {
    this.metaAndTitleService.setMetaTag({
      name: 'description', content: [
        'HTML stands for HyperText Markup Language',
        'It is the language used by the web to structure and display webpages',
        'HTML is fun and easy to learn - You will enjoy it'
      ].join('. '),
    })
  }
}
