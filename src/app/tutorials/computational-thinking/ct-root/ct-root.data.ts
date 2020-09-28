import { mainRoutePath, tutorialsRoutePath } from 'src/app/shared/shared'
import { navItemsInterface } from '../../tutorials.interface';

const tutorialsStartingPath = `/${mainRoutePath.tutorials}/`;
const ctStartingPath = `${tutorialsRoutePath.CT.main}/`;

export const ctNavItems: navItemsInterface = {
    header: 'Computational thinking',
    links: [
        { name: 'Introduction', path: tutorialsStartingPath.concat(ctStartingPath, tutorialsRoutePath.CT.introduction) },
        { name: 'Decomposition', path: tutorialsStartingPath.concat(ctStartingPath, tutorialsRoutePath.CT.decomposition) },
        { name: 'Pattern Recognition', path: tutorialsStartingPath.concat(ctStartingPath, tutorialsRoutePath.CT.patternRecognition) },
        { name: 'Abstraction', path: tutorialsStartingPath.concat(ctStartingPath, tutorialsRoutePath.CT.abstraction) },
        { name: 'Algorithm', path: tutorialsStartingPath.concat(ctStartingPath, tutorialsRoutePath.CT.algorithm) },
    ]
}