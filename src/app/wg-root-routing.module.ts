import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { GettingStartedWithTheWebConfig, HTMLConfig } from './shared/shared';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
    { path: '', component: HomepageComponent },

    {
        path: GettingStartedWithTheWebConfig.routesPathConfig.main.path,
        loadChildren: () => import('./tutorials/web-development/getting-started-with-the-web/getting-started-with-the-web.module').
            then(m => m.GettingStartedWithTheWebModule)
    },
    {
        path: HTMLConfig.routesPathConfig.main.path,
        loadChildren: () => import('./tutorials/web-development/html/html.module').then(m => m.HTMLModule)
    },
]

@NgModule({

    imports: [
        RouterModule.forRoot(routes,
            { scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules, urlUpdateStrategy: 'eager' })
    ],
    exports: [
        RouterModule
    ],
})

export class WGRootRoutingModule { } 