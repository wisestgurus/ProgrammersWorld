import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { WGRootServerModule } from './server/wg-root.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
