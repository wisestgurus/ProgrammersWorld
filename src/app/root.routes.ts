//Main routes file.

import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { mainRoutePath, tutorialsRoutePath } from './shared/shared';
import { PageNotFoundComponent } from './navigation/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: mainRoutePath.dashboard, component: DashboardComponent
    },

    {
        path: mainRoutePath.tutorials.concat(`/${tutorialsRoutePath.CT.main}`),
        redirectTo: mainRoutePath.tutorials.concat(`/${tutorialsRoutePath.CT.main}/`, `${tutorialsRoutePath.CT.introduction}`),
        pathMatch: 'full'
    },

    {
        path: mainRoutePath.tutorials.concat(`/${tutorialsRoutePath.CT.main}`),
        loadChildren: () =>
            import('./tutorials/computational-thinking/ct.module').then(module => module.CTModule)
    },
    
    { path: '**', component: PageNotFoundComponent },
]