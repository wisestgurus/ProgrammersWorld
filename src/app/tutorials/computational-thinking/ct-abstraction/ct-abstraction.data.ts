import { tutorialItemsInterface } from '../../tutorials.interface';
import { ctButtons } from '../ct-button.data';

export const tutorialItems: tutorialItemsInterface = {
    header: 'Abstraction',
    
    prerequisites: [
        { name: 'Computational Thinking Introduction', path: ctButtons.introduction.path },
        { name: 'Computational Thinking Decomposition', path: ctButtons.decomposition.path },
        { name: 'Computational Thinking Pattern Recognition', path: ctButtons.patternRecognition.path },
    ],

    objectives: [
        'Explain what abstraction is.',
        'Understand the use of abstraction amongst the 4 stages of computational thinking.',
        'Apply abstraction to solve any kind of problem.'
    ],

    buttons: {
        previous: { name: ctButtons.patternRecognition.name, path: ctButtons.patternRecognition.path },
        next: { name: ctButtons.algorithm.name, path: ctButtons.algorithm.path }
    }
}

