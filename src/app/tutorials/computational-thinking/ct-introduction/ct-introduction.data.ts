import { ctButtons } from '../ct-button.data';
import { tutorialItemsInterface } from '../../tutorials.interface';

export const tutorialItems: tutorialItemsInterface = {
    header: 'Introduction',
    briefIntro:
        [
            'Computational thinking is a problem solving skill.',
            'This tutorial teaches you everything about computational thinking.',
            'Computational thinking is very simple and fun to learn - You will enjoy it.'
        ],
    prerequisites:
        [
            { name: 'Nothing.' },
        ],
    objectives:
        [
            'Differentiate what computational thinking is and what it is not.',
            'Know (or remember) the keywords when talking about CT.',
            'Understand the overview of the 4 stages of CT.'
        ],

    buttons: {
        next: { name: ctButtons.decomposition.name, path: ctButtons.decomposition.path }
    }
}