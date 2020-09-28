import { mainRoutePath, tutorialsRoutePath } from '../../shared/shared';
export const ctButtons = {
    introduction: {
        name: 'Introduction',
        path: `/${mainRoutePath.tutorials}/`.concat(`${tutorialsRoutePath.CT.main}/`, tutorialsRoutePath.CT.introduction)
    },

    decomposition: {
        name: 'Decomposition',
        path: `/${mainRoutePath.tutorials}/`.concat(`${tutorialsRoutePath.CT.main}/`, tutorialsRoutePath.CT.decomposition)
    },

    patternRecognition: {
        name: 'Pattern Recognition',
        path: `/${mainRoutePath.tutorials}/`.concat(`${tutorialsRoutePath.CT.main}/`, tutorialsRoutePath.CT.patternRecognition)
    },

    abstraction: {
        name: 'Abstraction',
        path: `/${mainRoutePath.tutorials}/`.concat(`${tutorialsRoutePath.CT.main}/`, tutorialsRoutePath.CT.abstraction)
    },

    algorithm: {
        name: 'Algorithm',
        path: `/${mainRoutePath.tutorials}/`.concat(`${tutorialsRoutePath.CT.main}/`, tutorialsRoutePath.CT.algorithm)
    }
}