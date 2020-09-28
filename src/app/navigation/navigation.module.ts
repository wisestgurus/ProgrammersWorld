import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BottomNavComponent, } from './bottom-nav/bottom-nav.component';
import { SearchComponent } from './search/search.component';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  exports: [
    NavContainerComponent,
    PageNotFoundComponent,
    TopNavComponent,
    SearchComponent,
    BottomNavComponent,
    SideNavComponent,
  ],

  declarations: [
    PageNotFoundComponent,
    NavContainerComponent,
    TopNavComponent,
    SearchComponent,
    BottomNavComponent,
    SideNavComponent
  ],

  providers: [
  ]

})
export class NavigationModule { }
