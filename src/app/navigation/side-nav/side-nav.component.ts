import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ScreenLayoutService } from 'src/app/shared/shared';
import { MatSidenav } from '@angular/material/sidenav';
import { mainNavItems } from './side-nav.data';

@Component({
  selector: 'wg-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  mainNavItems = mainNavItems;
  @Input() navItems;

  closeSideNav() {
    this.screenLayoutService.isMatched$.subscribe(result => {
      if (result.matches) {
        this.sidenav.close();
      }
    })
  }

  isHandset$: Observable<boolean> = this.screenLayoutService.isHandset$;

  constructor(private screenLayoutService: ScreenLayoutService) { }

  ngOnInit(): void {

  }

}
