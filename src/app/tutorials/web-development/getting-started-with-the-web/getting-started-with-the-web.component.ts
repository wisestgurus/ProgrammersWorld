import { Component, OnInit } from '@angular/core';
import { navigationItemsInterface, GettingStartedWithTheWebConfig } from 'src/app/shared/shared';

@Component({
  selector: 'pw-getting-started-with-the-web',
  templateUrl: './getting-started-with-the-web.component.html',
  styleUrls: ['./getting-started-with-the-web.component.scss']
})
export class GettingStartedWithTheWebComponent implements OnInit {

  constructor() { }

  otherNavigationItems: navigationItemsInterface = {
    heading: GettingStartedWithTheWebConfig.buttonsConfig.main.name, items: [
      {
        ...GettingStartedWithTheWebConfig.buttonsConfig.introduction,
      },

      {
        expansionHeader: 'the web is not the internet', expansionContents: [
          {
            links: [
              {
                ...GettingStartedWithTheWebConfig.buttonsConfig.history
              },

              {
                name: 'how tcp/ip works', path: 'q'
              },

              {
                name: 'how the web works', path: 'q'
              },


              {
                name: 'the web standards', path: 'q'
              }
            ]
          },

        ]
      },


      {
        expansionHeader: 'introduction to web development', expansionContents: [
          {
            links: [
              {
                name: 'what is web development', path: 'q'
              },

              {
                name: 'fields in web development', path: 'q'
              },

              {
                name: 'job opportunities in web development', path: 'q'
              },

              {
                name: 'importance of web development', path: 'q'
              },

            ]
          }

        ],
      },

      {
        expansionHeader: 'what to know before coding a website', expansionContents: [
          {
            links: [
              {
                name: 'code editors', path: 'q'
              },

              {
                name: 'dealing with files', path: 'q'
              },

              {
                name: 'choosing a perfect font', path: 'q'
              },

              {
                name: 'choosing a nice colour', path: 'q'
              },

            ]
          }

        ],
      }
    ]


  }
  ngOnInit(): void {
  }

}
