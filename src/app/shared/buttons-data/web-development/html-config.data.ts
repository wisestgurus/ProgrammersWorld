import { mainRoutePath, tutorialsRoutePath } from '../../routes-path';

const startingPathForButtons = {
    tutorials: `/${mainRoutePath.tutorials}/`,

    HTML:
        `${tutorialsRoutePath.webDevelopment.main}/${tutorialsRoutePath.webDevelopment.HTML.main}/`,
}

export class HTMLConfig {

    static routesPathConfig = {
        main: {
            path: mainRoutePath.tutorials.concat(`/${tutorialsRoutePath.webDevelopment.main}`,
                `/${tutorialsRoutePath.webDevelopment.HTML.main}`),
        },

        introductionToHTML: {
            path: tutorialsRoutePath.webDevelopment.HTML.introductionToHTML
        },
    }

    static buttonsConfig = {
        main: {
            name: 'html',
            path: `${startingPathForButtons.tutorials}`.concat(startingPathForButtons.HTML)
        },

        introductionToHTML: {
            name: 'Introduction to html',
            path: `${startingPathForButtons.tutorials}`.
                concat(startingPathForButtons.HTML,
                    tutorialsRoutePath.webDevelopment.HTML.introductionToHTML)
        },

        basicSyntaxExplained: {
            name: 'basic syntax explained',
            path: `${startingPathForButtons.tutorials}`.
                concat(startingPathForButtons.HTML,
                    tutorialsRoutePath.webDevelopment.HTML.basicSyntaxExplained)
        },
    }
}