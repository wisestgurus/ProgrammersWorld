import { tutorialItemsInterface } from '../../tutorials.interface';
import { ctButtons } from '../ct-button.data';

export const tutorialItems: tutorialItemsInterface = {
    header: 'Algorithm',
    prerequisites: [
        { name: 'Computational Thinking Introduction', path: ctButtons.introduction.path },
        { name: 'Computational Thinking Decomposition', path: ctButtons.decomposition.path },
        { name: 'Computational Thinking Pattern Recognition', path: ctButtons.patternRecognition.path },
        { name: 'Computational Thinking Abstraction', path: ctButtons.abstraction.path },
    ],

    objectives: [
        'Explain what algorithm is.',
        'Understand the use of algorithm amongst the 4 stages of computational thinking.',
        'Apply algorithm to solve any kind of problem.'
    ],
    buttons: {
        previous: { name: ctButtons.abstraction.name, path: ctButtons.abstraction.path }
    }


}