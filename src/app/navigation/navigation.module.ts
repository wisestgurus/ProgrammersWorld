import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared';

import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SearchNavigationComponent } from './search-navigation/search-navigation.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { NavigationContainerComponent } from './navigation-container/navigation-container.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { SocialMediaNavigationComponent } from './social-media-navigation/social-media-navigation.component';
@NgModule({
  imports: [
    SharedModule,
  ],

  exports: [
    NavigationContainerComponent,
    TopNavigationComponent
  ],

  declarations: [
    TopNavigationComponent,
    SearchNavigationComponent,
    SideNavigationComponent,
    NavigationContainerComponent,
    BottomNavigationComponent,
    SocialMediaNavigationComponent
  ],

  providers: [
  ]
})

export class NavigationModule { }
