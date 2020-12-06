import { mainRoutePath, tutorialsRoutePath } from '../../routes-path';

const startingPathForButtons = {
    tutorials: `/${mainRoutePath.tutorials}/`,

    gettingStartedWithTheWeb:
        `${tutorialsRoutePath.webDevelopment.main}/${tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.main}/`,
}

export class GettingStartedWithTheWebConfig {

    static routesPathConfig = {
        main: {
            path: mainRoutePath.tutorials.concat(`/${tutorialsRoutePath.webDevelopment.main}`,
                `/${tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.main}`),
        },

        introductionToTheWeb: {
            path: tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.introductionToTheWeb
        },

        historyOfTheWeb: {
            path: tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.historyOfTheWeb
        },

        howTcpIpWorks: {
            path: tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.howTcpIpWorks
        },

        howTheWebWorks: {
            path: tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.howTheWebWorks
        },

        whatIsWebDevelopment: {
            path: tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.whatIsWebDevelopment
        },

        fieldsInWebDevelopment: {
            path: tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.fieldsInWebDevelopment
        }
    }

    static buttonsConfig = {
        main: {
            name: 'getting started with the web',
            path: `${startingPathForButtons.tutorials}`.concat(startingPathForButtons.gettingStartedWithTheWeb)
        },

        introductionToTheWeb: {
            name: 'introduction to the web',
            path: `${startingPathForButtons.tutorials}`.
                concat(startingPathForButtons.gettingStartedWithTheWeb,
                    tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.introductionToTheWeb)
        },

        historyOfTheWeb: {
            name: 'history of the web',
            path: `${startingPathForButtons.tutorials}`.
                concat(startingPathForButtons.gettingStartedWithTheWeb,
                    tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.historyOfTheWeb)
        },

        howTcpIpWorks: {
            name: 'how tcp/ip works',
            path: `${startingPathForButtons.tutorials}`.
                concat(startingPathForButtons.gettingStartedWithTheWeb,
                    tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.howTcpIpWorks)
        },

        howTheWebWorks: {
            name: 'how the web works',
            path: `${startingPathForButtons.tutorials}`.
                concat(startingPathForButtons.gettingStartedWithTheWeb,
                    tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.howTheWebWorks)
        },

        whatIsWebDevelopment: {
            name: 'what is web development',
            path: `${startingPathForButtons.tutorials}`.
                concat(startingPathForButtons.gettingStartedWithTheWeb,
                    tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.whatIsWebDevelopment)
        },

        fieldsInWebDevelopment: {
            name: 'fields in web development',
            path: `${startingPathForButtons.tutorials}`.
                concat(startingPathForButtons.gettingStartedWithTheWeb,
                    tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.fieldsInWebDevelopment)
        }
    }
}