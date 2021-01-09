import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pw-social-media-navigation',
  templateUrl: './social-media-navigation.component.html',
  styleUrls: ['./social-media-navigation.component.scss']
})
export class SocialMediaNavigationComponent implements OnInit {

  @Input() shouldIncludeName;

  socialMedias = [
    {
      name: 'github', icon: 'fab fa-github',
      link: 'https://www.github.com/wisestgurus/programmersworld',
      class: 'text-dark'
    },
    {
      name: 'Slack', icon: 'fab fa-slack',
      link: '',
      class: 'text-warning'
    },
    {
      name: 'Youtube', icon: 'fab fa-youtube',
      link: '',
      class: 'text-danger'
    },

    {
      name: 'Gmail', icon: 'fab fa-google',
      link: '',
      class: 'text-danger'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
