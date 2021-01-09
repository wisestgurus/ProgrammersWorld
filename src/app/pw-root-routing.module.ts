import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { GettingStartedWithTheWebConfig, HTMLConfig } from './shared/shared';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
    { path: '', component: HomepageComponent },

    {
        ...GettingStartedWithTheWebConfig.routesPathConfig.main,
        loadChildren: () => import('./tutorials/web-development/getting-started-with-the-web/getting-started-with-the-web.module').
            then(m => m.GettingStartedWithTheWebModule)
    },

    {
        ...HTMLConfig.routesPathConfig.main,
        loadChildren: () => import('./tutorials/web-development/html/html.module').then(m => m.HTMLModule)
    },

    { path: '**', component: PageNotFoundComponent }
]

@NgModule({

    imports: [
        RouterModule.forRoot(routes,
            {
                scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules,
                urlUpdateStrategy: 'eager', relativeLinkResolution: 'legacy'
            })
    ],
    exports: [
        RouterModule
    ],
})

export class WGRootRoutingModule { } 