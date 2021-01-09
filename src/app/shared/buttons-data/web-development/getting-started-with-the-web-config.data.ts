import { mainRoutePath, tutorialsRoutePath } from '../../routes-path';

const startingPathForButtons = {

    gettingStartedWithTheWeb: `/${mainRoutePath.tutorials}/`.concat(
        `${tutorialsRoutePath.webDevelopment.main}/`,
        `${tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.main}/`
    ),
}

export class GettingStartedWithTheWebConfig {

    static routesPathConfig = {
        main: {
            path: `${mainRoutePath.tutorials}/`.concat(
                `${tutorialsRoutePath.webDevelopment.main}/`,
                tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.main),
        },

        introduction: {
            path: tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.introduction
        },

        history: {
            path: tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.history
        }

    }

    static buttonsConfig = {
        main: {
            name: 'getting started with the web',
            path: `${startingPathForButtons.gettingStartedWithTheWeb}`,
        },

        introduction: {
            name: 'introduction',
            path: `${startingPathForButtons.gettingStartedWithTheWeb}`.concat(
                tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.introduction
            )
        },

        history: {
            name: 'history of the web',
            path: `${startingPathForButtons.gettingStartedWithTheWeb}`.concat(
                tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.history
            )
        }
    }
}