import { mainRoutePath, tutorialsRoutePath } from '../../routes-path';

export const tutorialsStartingPath = `/${mainRoutePath.tutorials}/`;

export class TutorialsRoutingConfig {
    static main = {
        buttonConfig: { name: 'tutorials', path: tutorialsStartingPath }
    };

    static home = {
        routePath:
            tutorialsRoutePath.home,

        buttonConfig: {
            name: 'home',
            path: tutorialsStartingPath.concat(tutorialsRoutePath.home)
        }
    };

    static gettingStartedWithTheWeb = {
        routesPath: {
            main: {
                path: `${tutorialsRoutePath.webDevelopment.main}/`.concat
                    (tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.main),
            },
            introduction: {
                path: tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.introduction
            },
            history: {
                path: tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.history
            },
            howTheInternetWorks: {
                path: tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.howTheInternetWorks
            },
            howTheWebWorks: {
                path: tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.howTheWebWorks
            }
        },
        buttonsConfig: {
            main: {
                name: 'getting started with the web',
                path: tutorialsStartingPath.concat(
                    `${tutorialsRoutePath.webDevelopment.main}/`,
                    `${tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.main}/`),
            },
            introduction: {
                name: 'introduction to the web',
                path: tutorialsStartingPath.concat(
                    `${tutorialsRoutePath.webDevelopment.main}/`,
                    `${tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.main}/`,
                    tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.introduction
                )
            },
            history: {
                name: 'history of the web',
                path: tutorialsStartingPath.concat(
                    `${tutorialsRoutePath.webDevelopment.main}/`,
                    `${tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.main}/`,
                    tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.history
                )
            },
            howTheInternetWorks: {
                name: 'how the internet works',
                path: tutorialsStartingPath.concat(
                    `${tutorialsRoutePath.webDevelopment.main}/`,
                    `${tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.main}/`,
                    tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.howTheInternetWorks
                )
            },
            howTheWebWorks: {
                name: 'how the web works',
                path: tutorialsStartingPath.concat(
                    `${tutorialsRoutePath.webDevelopment.main}/`,
                    `${tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.main}/`,
                    tutorialsRoutePath.webDevelopment.gettingStartedWithTheWeb.howTheWebWorks
                )
            }
        }
    };

    static HTML = {
        routesPath: {
            main: {
                path: `${tutorialsRoutePath.webDevelopment.main}`.concat(
                    `/${tutorialsRoutePath.webDevelopment.HTML.main}`),
            },

            introduction: {
                path: tutorialsRoutePath.webDevelopment.HTML.introduction
            },

            basicSyntaxExplained: {
                path: tutorialsRoutePath.webDevelopment.HTML.basicSyntaxExplained
            },
        },

        buttonsConfig: {
            main: {
                name: 'html',
                path: `/${mainRoutePath.tutorials}/`.concat(`${tutorialsRoutePath.webDevelopment.main}/`,
                    `${tutorialsRoutePath.webDevelopment.HTML.main}/`)
            },

            introduction: {
                name: 'Introduction',
                path: `/${mainRoutePath.tutorials}/`.concat(`${tutorialsRoutePath.webDevelopment.main}/`,
                    `${tutorialsRoutePath.webDevelopment.HTML.main}/`, tutorialsRoutePath.webDevelopment.HTML.introduction)
            },

            basicSyntaxExplained: {
                name: 'basic syntax explained',
                path: `/${mainRoutePath.tutorials}/`.concat(`${tutorialsRoutePath.webDevelopment.main}/`,
                    `${tutorialsRoutePath.webDevelopment.HTML.main}/`, tutorialsRoutePath.webDevelopment.HTML.basicSyntaxExplained)
            },
        }
    }
}