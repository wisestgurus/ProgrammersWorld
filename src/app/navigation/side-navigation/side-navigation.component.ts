import { Component, Input, OnInit } from '@angular/core';
import { navigationItemsInterface, ScreenLayoutService } from 'src/app/shared/shared';
import { mainNavigationItems, profileNavigationItems } from '../navigation.data';

@Component({
  selector: 'pw-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  constructor(private screenLayoutService: ScreenLayoutService) { }

  @Input() otherNavigationItems: navigationItemsInterface;

  mainNavigationItems = mainNavigationItems;
  profileNavigationItems = profileNavigationItems;
  isHandset$ = this.screenLayoutService.isHandset$;
  isTablet$ = this.screenLayoutService.isTablet$;

  ngOnInit(): void {

  }
}
