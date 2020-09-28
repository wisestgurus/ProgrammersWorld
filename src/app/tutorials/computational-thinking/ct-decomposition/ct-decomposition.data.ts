import { tutorialItemsInterface } from '../../tutorials.interface';
import { ctButtons } from '../ct-button.data';

export const tutorialItems: tutorialItemsInterface = {
    header: 'Decomposition',
    prerequisites:
        [
            { name: 'Computational Thinking Introduction', path: ctButtons.introduction.path },
            
        ],

    objectives:
        [
            'Explain what decomposition is.',
            'Understand the use of decomposition amongst the 4 stages of computational thinking.',
            'Apply decomposition to solve any kind of problem.'
        ],

    buttons: {
        previous: { name: ctButtons.introduction.name, path: ctButtons.introduction.path },
        next: { name: ctButtons.patternRecognition.name, path: ctButtons.patternRecognition.path }
    }
}