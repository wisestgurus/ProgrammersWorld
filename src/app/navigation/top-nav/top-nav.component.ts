import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ScreenLayoutService } from '../../shared/shared';
import { nameOfWebsiteData } from './top-nav.data';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'wg-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})


export class TopNavComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  nameOfWebsite = nameOfWebsiteData;

  isHandset$: Observable<boolean> = this.screenLayoutService.isHandset$;

  constructor(private screenLayoutService: ScreenLayoutService) { }

  ngOnInit(): void {
  
  }

}
