import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { mainRoutePath } from '../shared/shared';
import { HomepageComponent } from '../homepage/homepage.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [

    { path: '', component: HomepageComponent, data: { animation: 'homepage' } },

    {
        path: mainRoutePath.tutorials, loadChildren: () =>
            import('../tutorials/tutorials-root/tutorials-root.module').then(m => m.TutorialsRootModule),
        data: { animation: 'tutorials' }
    },

    {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule),
        data: { animation: 'profile' }
    },

    { path: '**', redirectTo: '404-page-not-found', pathMatch: 'full' },

    { path: '**', component: PageNotFoundComponent, data: { animation: 'pageNotFound' } }

]

@NgModule({

    imports: [
        RouterModule.forRoot(routes,
            {
                scrollPositionRestoration: 'enabled', urlUpdateStrategy: 'eager',
                relativeLinkResolution: 'legacy'
            })
    ],
    exports: [
        RouterModule
    ],
})

export class PWRootRoutingModule { } 