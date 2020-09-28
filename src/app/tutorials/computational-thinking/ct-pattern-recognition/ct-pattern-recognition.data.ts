import { tutorialItemsInterface } from '../../tutorials.interface';
import { ctButtons } from '../ct-button.data';

export const tutorialItems: tutorialItemsInterface = {
    header: 'Pattern Recognition',

    objectives: [
        'Explain what pattern recognition is.',
        'Understand the use of pattern recognition amongst the 4 stages of computational thinking.',
        'Apply pattern recognition to solve any kind of problem.'
    ],

    prerequisites: [
        { name: 'Computational Thinking Introduction', path: ctButtons.introduction.path },
        { name: 'Computational Thinking Decomposition', path: ctButtons.decomposition.path },
    ],
    buttons: {
        previous: { name: ctButtons.decomposition.name, path: ctButtons.decomposition.path },
        next: { name: ctButtons.abstraction.name, path: ctButtons.abstraction.path }
    }

}