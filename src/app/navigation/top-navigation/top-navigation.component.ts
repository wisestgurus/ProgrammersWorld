import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ScreenLayoutService } from 'src/app/shared/shared';
import { mainNavigationItems } from '../navigation.data';

@Component({
  selector: 'wg-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {


  constructor(private screenLayoutService: ScreenLayoutService) { }

  @Output() toggleButtonClicked = new EventEmitter(true);

  isHandset$ = this.screenLayoutService.isHandset$;
  isTablet$ = this.screenLayoutService.isTablet$

  nameOfWebsite: { name: string, path: string } = {
    name: 'ProgrammersWorld', path: ''
  }

  mainNavigationItems = mainNavigationItems;


  toggleSideNavigation() {
    this.toggleButtonClicked.emit(true);
  }

  ngOnInit(): void {
  }
}