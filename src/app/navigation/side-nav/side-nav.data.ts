import { mainRoutePath, tutorialsRoutePath } from '../../shared/shared'
import { mainNavItemsInterface } from './side-nav.interface';

const tutorialsStartingPath = `/${mainRoutePath.tutorials}/`

export const mainNavItems: mainNavItemsInterface[] = [
    {
        name: 'tutorials', links: [
            {
                name: 'computational thinking',
                path: tutorialsStartingPath.concat(`${tutorialsRoutePath.CT.main}`)
            },
        ]
    }
]