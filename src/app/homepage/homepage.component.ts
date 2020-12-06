import { Component, OnInit } from '@angular/core';

interface dashboardItemsInterface {
  heading: string, briefDescription: Array<string>,
  filterBy: Array<string>,
  children: Array<{
    heading: string, category: string, briefDescription: string,
  }>
}

@Component({
  selector: 'wg-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  constructor() { }
  chidren = [];
  filteredBy;
  dashboardItems: Array<dashboardItemsInterface> = [
    {
      heading: 'tutorials', briefDescription: ['ca'],
      filterBy: ['all', 'html',
        'css and frameworks', 'js and frameworks', 'web development'],
      children: [
        { heading: 'html', category: 'web development', briefDescription: 'Abba dfghjhgfd' },
        { heading: 'css and frameworks', category: 'web development', briefDescription: 'Abba dfghjhgfd' },
        { heading: 'js and frameworks', category: 'web development', briefDescription: 'Abba dfghjhgfd' },
      ]
    }
  ]
  ngOnInit(): void {

  }

}
