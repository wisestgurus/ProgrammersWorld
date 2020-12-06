import { Component, Input, OnInit } from '@angular/core';
import { ScreenLayoutService } from 'src/app/shared/shared';
import { mainNavigationItems } from '../navigation.data';

@Component({
  selector: 'wg-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  constructor(private screenLayoutService: ScreenLayoutService) { }

  @Input() otherNavigationItems;

  mainNavigationItems = mainNavigationItems;

  isHandset$ = this.screenLayoutService.isHandset$;
  isTablet$ = this.screenLayoutService.isTablet$;
  
  ngOnInit(): void {

  }
}
