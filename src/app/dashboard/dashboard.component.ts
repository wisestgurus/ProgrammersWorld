import { Component, OnInit } from '@angular/core';
import { dashboardItems } from './dashboard.data';

@Component({
  selector: 'wg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  dashboardItems = dashboardItems;

  ngOnInit(): void {

  }

}
