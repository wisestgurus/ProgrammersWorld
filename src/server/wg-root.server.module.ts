import { DOCUMENT } from '@angular/common';
import { NgModule, Renderer2 } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { WGRootComponent } from '../app/wg-root.component';

import { WGRootModule } from '../app/wg-root.module';

@NgModule({
  imports: [
    WGRootModule,
    ServerModule
  ],

  bootstrap: [WGRootComponent],
})
export class WGRootServerModule { }
