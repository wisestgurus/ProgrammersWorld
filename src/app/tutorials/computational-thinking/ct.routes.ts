import { Routes } from '@angular/router';
import { tutorialsRoutePath } from '../../shared/shared';
import { CTRootComponent } from './ct-root/ct-root.component';
import { CTIntroductionComponent } from './ct-introduction/ct-introduction.component';
import { CTDecompositionComponent } from './ct-decomposition/ct-decomposition.component';
import { CTPatternRecognitionComponent } from './ct-pattern-recognition/ct-pattern-recognition.component';
import { CTAbstractionComponent } from './ct-abstraction/ct-abstraction.component';
import { CTAlgorithmComponent } from './ct-algorithm/ct-algorithm.component';

export const routes: Routes = [
    {
        path: '', component: CTRootComponent, children: [
            { path: tutorialsRoutePath.CT.introduction, component: CTIntroductionComponent },
            { path: tutorialsRoutePath.CT.decomposition, component: CTDecompositionComponent },
            { path: tutorialsRoutePath.CT.patternRecognition, component: CTPatternRecognitionComponent },
            { path: tutorialsRoutePath.CT.abstraction, component: CTAbstractionComponent },
            { path: tutorialsRoutePath.CT.algorithm, component: CTAlgorithmComponent },
        ]
    }
]