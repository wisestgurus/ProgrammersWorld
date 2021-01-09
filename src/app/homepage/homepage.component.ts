import { Component, OnInit } from '@angular/core';
import { GettingStartedWithTheWebConfig, HTMLConfig, MetaAndTitleService } from '../shared/shared';

interface dashboardItemsInterface {
  name: string, imageUrl: string, children: Array<{
    name: string, categories: Array<string>, briefDescriptions: Array<string>, path?: string
  }>, noLoadMoreButton?: true
}

@Component({
  selector: 'pw-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  constructor(private metaAndTitleService: MetaAndTitleService) {
  }

  briefDescription = `
      Are you an aspiring programmer wanting to learn or expand on a new language? Then worry no more.
      Whether you are a beginner, an intermediate or an expert in any programming language, this section is
      for you. We offer top notch tutorials including HTML, CSS, JavaScript and much more, 
      each having organized objectives to follow, quiz section and exercises to go play with. 
      All our tutorials are easy, short, straightforward and fun to learn. Start learning today. It's free!!!`


  dashboardItems: Array<dashboardItemsInterface> = [
    {
      name: 'tutorials',
      imageUrl: '../../assets/tutorials.jpg',

      children: [
        {
          ...GettingStartedWithTheWebConfig.buttonsConfig.main,
          categories: ['web development'],
          briefDescriptions: [
            'The web (www or World Wide Web) is not the internet',
            `It is a compilation of different series of HTML documents with all 
            its web resources linked together`
          ],
        },


        {
          ...HTMLConfig.buttonsConfig.main,
          categories: ['web development'],
          briefDescriptions: [
            'HTML stands for HyperText Markup Language',
            'It is the language used by the web to structure and display webpages',
          ],
          ...HTMLConfig.buttonsConfig.main
        },

        {
          ...HTMLConfig.buttonsConfig.main,
          categories: ['web development'],
          briefDescriptions: [
            'HTML stands for HyperText Markup Language',
            'It is the language used by the web to structure and display webpages',
          ],
          ...HTMLConfig.buttonsConfig.main
        },

        {
          ...HTMLConfig.buttonsConfig.main,
          categories: ['web development'],
          briefDescriptions: [
            'HTML stands for HyperText Markup Language',
            'It is the language used by the web to structure and display webpages',
          ],
          ...HTMLConfig.buttonsConfig.main
        },

        {
          ...HTMLConfig.buttonsConfig.main,
          categories: ['web development'],
          briefDescriptions: [
            'HTML stands for HyperText Markup Language',
            'It is the language used by the web to structure and display webpages',
          ],
          ...HTMLConfig.buttonsConfig.main
        }
      ],
    },

    {
      name: 'practice projects',
      imageUrl: 'url../../assets/practice-projects.jpg',
      children: [],
    },

    {
      name: 'find or post a job',
      imageUrl: '../../assets/job.jpg',
      children: [],
      noLoadMoreButton: true,
    },

    {
      name: 'about us / how to get involved / FAQ',
      imageUrl: '../../assets/about-us.jpg',
      children: [],
      noLoadMoreButton: true,
    }
  ]


  ngOnInit(): void {
    this.metaAndTitleService.setTitle();

    this.metaAndTitleService.setMetaTags([
      {
        name: 'description', content: this.briefDescription
      },
      {
        name: 'keywords', content: [
          'Said no to programming',
          'Say no to life',
          'We rule',
          'tutorials', 'practice projects', 'post a job', 'find job',
          'freelancers', 'everything programming', 'for programmers'
        ].toString().toLowerCase()
      }
    ]);
  }
}
