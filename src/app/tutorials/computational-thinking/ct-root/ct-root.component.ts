import { Component, OnInit } from '@angular/core';
import { ctNavItems } from './ct-root.data';
@Component({
  selector: 'wg-ct-root',
  templateUrl: './ct-root.component.html',
  styleUrls: ['./ct-root.component.scss']
})
export class CTRootComponent implements OnInit {

  navItems = ctNavItems;
  constructor() { }

  ngOnInit(): void {
  }

}
