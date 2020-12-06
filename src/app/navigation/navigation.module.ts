import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SearchComponent } from './search/search.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { NavigationContainerComponent } from './navigation-container/navigation-container.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  exports: [
    NavigationContainerComponent
  ],

  declarations: [
    TopNavigationComponent,
    SearchComponent,
    SideNavigationComponent,
    NavigationContainerComponent,
    BottomNavigationComponent
  ],

  providers: [
  ]
})

export class NavigationModule { }
