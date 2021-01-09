import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ScreenLayoutService } from 'src/app/shared/shared';
import { mainNavigationItems } from '../navigation.data';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'pw-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {


  constructor(private navigationService: NavigationService, private screenLayoutService: ScreenLayoutService) { }

  isHandset$ = this.screenLayoutService.isHandset$;
  isTablet$ = this.screenLayoutService.isTablet$

  nameOfWebsite: { name: string, path: string } = {
    name: 'ProgrammersWorld', path: ''
  }

  mainNavigationItems = mainNavigationItems;


  toggleSideNavigation() {
    this.navigationService.toggleSideNavigation()
  }

  ngOnInit(): void {
  }
}