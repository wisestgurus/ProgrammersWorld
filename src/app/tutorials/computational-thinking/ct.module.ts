import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CTIntroductionComponent } from './ct-introduction/ct-introduction.component';
import { CTDecompositionComponent } from './ct-decomposition/ct-decomposition.component';
import { CTAbstractionComponent } from './ct-abstraction/ct-abstraction.component';
import { CTPatternRecognitionComponent } from './ct-pattern-recognition/ct-pattern-recognition.component';
import { routes } from './ct.routes';
import { CTAlgorithmComponent } from './ct-algorithm/ct-algorithm.component';
import { SharedModule } from '../../shared/shared';
import { CTRootComponent } from './/ct-root/ct-root.component';
import { TutorialsModule } from '../tutorials.module';
@NgModule({
  declarations: [
    CTIntroductionComponent,
    CTDecompositionComponent,
    CTPatternRecognitionComponent,
    CTAbstractionComponent,
    CTAlgorithmComponent,
    CTRootComponent
  ],
  imports: [
    TutorialsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],

  providers:[
  ]
})
export class CTModule { }
