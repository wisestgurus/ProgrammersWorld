import { mainRoutePath, tutorialsRoutePath } from '../../routes-path';

const startingPathForButtons = {
    HTML:
        `/${mainRoutePath.tutorials}/`.concat(`${tutorialsRoutePath.webDevelopment.main}/`,
            `${tutorialsRoutePath.webDevelopment.HTML.main}/`)
}

export class HTMLConfig {

    static routesPathConfig = {
        main: {
            path: mainRoutePath.tutorials.concat(`/${tutorialsRoutePath.webDevelopment.main}`,
                `/${tutorialsRoutePath.webDevelopment.HTML.main}`),
        },

        introduction: {
            path: tutorialsRoutePath.webDevelopment.HTML.introduction
        },

        basicSyntaxExplained: {
            path: tutorialsRoutePath.webDevelopment.HTML.basicSyntaxExplained
        },
    }

    static buttonsConfig = {
        main: {
            name: 'html',
            path: startingPathForButtons.HTML
        },

        introduction: {
            name: 'Introduction',
            path: startingPathForButtons.HTML.concat(tutorialsRoutePath.webDevelopment.HTML.introduction)
        },

        basicSyntaxExplained: {
            name: 'basic syntax explained',
            path: startingPathForButtons.HTML.concat(tutorialsRoutePath.webDevelopment.HTML.basicSyntaxExplained)
        },
    }
}