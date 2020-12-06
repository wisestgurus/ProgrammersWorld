// import { tutorialItemsInterface } from '../../app/shared/interfaces/tutorials.interface';
// // import { computationalThinkingButtonsConfig, webDevelopmentButtonsConfig } from '../../app/shared/shared';

// export class ComputationalThinkingController {
//     static computationalThinkingIntroduction(req, res) {

//         const computationalThinkingIntroductionData: tutorialItemsInterface = {
//             header: 'Introduction',
//             prerequisites:
//                 [
//                     { name: 'Nothing' },
//                 ],
//             objectives:
//                 [
//                     'What computational thinking is and what it is not',
//                     'The keywords involved when talking about CT',
//                     'The overview of the 4 stages of CT'
//                 ],

//             buttons: {
//                 next:
//                 {
//                     name: computationalThinkingButtonsConfig.decomposition.name,
//                     path: computationalThinkingButtonsConfig.decomposition.path
//                 }
//             }
//         }

//         res.json(computationalThinkingIntroductionData);
//     }

//     static computationalThinkingDecomposition() {

//     }
// }