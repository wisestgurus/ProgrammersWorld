import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  renderer: Renderer2;
  constructor(private rendererFactory2: RendererFactory2) {
    this.renderer = this.rendererFactory2.createRenderer(null, null);
  }

  sideNavigationOpened: boolean;

  mode: 'side' | 'over';

  openSideNavigation() {
    const activateBackdrop = () => {
      this.renderer.listen(document.querySelector('#other-navigations'),
        'click', () => {
          if (this.mode === 'over') {
            this.closeSideNavigation();
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
}
