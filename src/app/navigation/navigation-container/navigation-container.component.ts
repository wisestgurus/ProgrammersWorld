import { Component, Input, OnInit } from '@angular/core';
import { ScreenLayoutService } from 'src/app/shared/shared';
import { NavigationService } from '../navigation.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'pw-navigation-container',
  templateUrl: './navigation-container.component.html',
  styleUrls: ['./navigation-container.component.scss'],
})

export class NavigationContainerComponent implements OnInit {

  constructor(private navigationService: NavigationService,
    private router: Router, private screenLayoutService: ScreenLayoutService) { }

  @Input() otherNavigationItems;

  sideNavigationOpened: boolean;
  mode: 'side' | 'over';

  isHandset$ = this.screenLayoutService.isHandset$;
  isTablet$ = this.screenLayoutService.isTablet$;

  defaultSideNavigationState() {
    this.isHandset$.subscribe((isHandset) => {
      if (isHandset) {
        this.navigationService.sideNavigationOpened = false;
        this.sideNavigationOpened = this.navigationService.sideNavigationOpened;
        this.mode = 'over';
        this.navigationService.mode = this.mode;
        this.navigationService.closeSideNavigation();
      }

      else {
        this.navigationService.sideNavigationOpened = true;
        this.sideNavigationOpened = this.navigationService.sideNavigationOpened;
        this.mode = 'side';
        this.navigationService.mode = this.mode;
        this.navigationService.openSideNavigation();
      }
    })

    this.router.events.pipe(filter(event =>
      event instanceof NavigationStart
    )).subscribe(() => {
      if (this.mode === 'over' && this.navigationService.sideNavigationOpened === true) {
        this.navigationService.closeSideNavigation();
      }
    })
  }

  ngOnInit(): void {
    this.defaultSideNavigationState();
  }
}
