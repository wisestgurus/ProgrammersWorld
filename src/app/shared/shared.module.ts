import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './angular-material/material.module';

// import { EditorComponent } from './components/editor/editor.component';
import { AlertDirective } from './directives/alert.directive';
import { RenderNotOnServerDirective } from './directives/render-not-on-server.directive';
import { RenderOnlyOnServerDirective } from './directives/render-only-on-server.directive';
import { TimerComponent } from './components/timer/timer.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule
  ],

  exports: [
    RouterModule,
    CommonModule,
    RenderNotOnServerDirective,
    RenderOnlyOnServerDirective,
    AlertDirective,
    MaterialModule,
    TimerComponent,
    SocialMediaComponent
  ],

  declarations: [
    AlertDirective,
    RenderNotOnServerDirective,
    RenderOnlyOnServerDirective,
    TimerComponent,
    SocialMediaComponent
  ]
})
export class SharedModule { }
