import { Component, ViewChild, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ScreenLayoutService } from '../../shared/shared';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'wg-nav-container',
  templateUrl: './nav-container.component.html',
  styleUrls: ['./nav-container.component.scss']
})

export class NavContainerComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;
  @Input() navItems;
  isHandset$: Observable<boolean> = this.screenLayoutService.isHandset$;

  constructor(private screenLayoutService: ScreenLayoutService) { }

}
