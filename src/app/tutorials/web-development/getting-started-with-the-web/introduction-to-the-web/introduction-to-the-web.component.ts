import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'wg-introduction-to-the-web',
  templateUrl: './introduction-to-the-web.component.html',
  styleUrls: ['./introduction-to-the-web.component.scss']
})
export class IntroductionToTheWebComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('ProgrammersWorld - Introduction to the web');
  }

}
