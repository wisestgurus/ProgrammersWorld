import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { PWRootComponent } from '../app/pw-root/pw-root.component';

import { PWRootModule } from '../app/pw-root/pw-root.module';

@NgModule({
  imports: [
    PWRootModule,
    ServerModule
  ],

  bootstrap: [PWRootComponent],
})
export class PWRootServerModule { }
