import { environment } from 'src/environments/environment';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { NavigationModule } from '../navigation/navigation.module';
import { SharedModule } from '../shared/shared';
import { PWRootRoutingModule } from './pw-root-routing.module';

import { PWRootComponent } from './pw-root.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@NgModule({

  declarations: [
    PWRootComponent,
    HomepageComponent,
    PageNotFoundComponent,
  ],

  imports: [
    NavigationModule,
    PWRootRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
  ],

  providers: [
  ],

  bootstrap: [PWRootComponent]
})
export class PWRootModule { }
