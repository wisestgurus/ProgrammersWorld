import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ScreenLayoutService } from 'src/app/shared/shared';

@Component({
  selector: 'wg-navigation-container',
  templateUrl: './navigation-container.component.html',
  styleUrls: ['./navigation-container.component.scss'],
})

export class NavigationContainerComponent implements OnInit {

  constructor(private renderer: Renderer2, private screenLayoutService: ScreenLayoutService) { }

  @Input() otherNavigationItems;

  isHandset$ = this.screenLayoutService.isHandset$;
  isTablet$ = this.screenLayoutService.isTablet$;

  sideNavigationOpened;

  mode: 'side' | 'over';

  openSideNavigation() {

    const activateBackdrop = () => {
      this.renderer.listen(document.querySelector('#other-navigations'),
        'click', () => {
          if (this.mode === 'over') {
            this.closeSideNavigation();
          }

          else {
            return;
          }
        })
    }

    this.sideNavigationOpened = true;

    if (this.mode === 'over') {
      this.renderer.setStyle(document.querySelector('#side-navigation'), 'width', '250px');
      this.renderer.setStyle(document.querySelector('#other-navigations'),
        'marginLeft', '0px');
      this.renderer.setStyle(document.body, 'backgroundColor', 'rgba(0,0,0,0.4)');

      activateBackdrop();

    }

    else {
      this.renderer.setStyle(document.querySelector('#side-navigation'),
        'width', '250px');
      this.renderer.setStyle(document.querySelector('#other-navigations'),
        'marginLeft', '250px');

      this.renderer.setStyle(document.body, 'backgroundColor', 'white');

    }
  }

  closeSideNavigation() {
    this.sideNavigationOpened = false;

    if (this.mode === 'over') {
      this.renderer.setStyle(document.body, 'backgroundColor', 'white');
    }

    this.renderer.setStyle(document.querySelector('#side-navigation'), 'width', '0px');
    this.renderer.setStyle(document.querySelector('#other-navigations'),
      'marginLeft', '0px');
  }

  toggleSideNavigation() {
    this.sideNavigationOpened ? this.closeSideNavigation() : this.openSideNavigation()
  }

  defaultSideNavigationState() {
    this.isHandset$.subscribe((isHandset) => {
      if (isHandset) {
        this.sideNavigationOpened = false;
        this.mode = 'over';
        this.closeSideNavigation();
      }

      else {
        this.sideNavigationOpened = true;
        this.mode = 'side';
        this.openSideNavigation();
      }
    });
  }

  ngOnInit(): void {
    this.defaultSideNavigationState();
  }
}
