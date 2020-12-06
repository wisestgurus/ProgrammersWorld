import { GettingStartedWithTheWebConfig, HTMLConfig, navigationItemsInterface }
    from '../shared/shared';

export const mainNavigationItems: navigationItemsInterface = {
    heading: 'main', items: [
        {
            heading: 'tutorials', contents: [
                {
                    heading: 'problem solving skills', links: [
                    ]
                },

                {
                    heading: 'web development', links: [
                        GettingStartedWithTheWebConfig.buttonsConfig.main,
                        HTMLConfig.buttonsConfig.main
                    ]
                },
            ]
        },

        {
            heading: 'practice projects', contents: [
                {
                    links: [
                    ]
                }
            ]
        },

        {
            heading: 'jobs', contents: [
                {
                    heading: '', links: [

                    ]
                }
            ],
        },

        {
            heading: 'about', path: 'abba'
        },

    ]
} 