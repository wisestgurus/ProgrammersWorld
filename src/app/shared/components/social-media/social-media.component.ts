import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wg-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  generalSocialMediaClass = 'icons font-weight-bolder'
  socialMedias = [
    {
      ariaLabel: 'Github account', icon: 'fab fa-github',
      link: 'https://www.github.com/wisestgurus/programmersworld',
      class: `${this.generalSocialMediaClass} text-dark`
    },
    {
      ariaLabel: 'Instagram account', icon: 'fab fa-instagram',
      link: '',
      class: `${this.generalSocialMediaClass} text-danger`
    },
    {
      ariaLabel: 'Facebook account', icon: 'fab fa-facebook',
      link: '',
      class: `${this.generalSocialMediaClass} text-primary`
    },
    {
      ariaLabel: 'Twitter account', icon: 'fab fa-twitter',
      link: '',
      class: `${this.generalSocialMediaClass} text-info`
    },
    {
      ariaLabel: 'Slack account', icon: 'fab fa-slack',
      link: '',
      class: `${this.generalSocialMediaClass} text-warning`
    },
    {
      ariaLabel: 'Whatsapp account', icon: 'fab fa-whatsapp',
      link: '',
      class: `${this.generalSocialMediaClass} text-success`
    },
    {
      ariaLabel: 'LinkedIn account', icon: 'fab fa-linkedin',
      link: '',
      class: `${this.generalSocialMediaClass} text-primary`
    },
    {
      ariaLabel: 'Youtube account', icon: 'fab fa-youtube',
      link: '',
      class: `${this.generalSocialMediaClass} text-danger`
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
