import { GettingStartedWithTheWebConfig, HTMLConfig, navigationItemsInterface }
    from '../shared/shared';

export const profileNavigationItems: navigationItemsInterface = {
    heading: 'profile', items: [
        { name: 'signup', path:'a' },
        { name: 'login', path:'a' },
        {
            expansionHeader: 'my profile', expansionContents: [
                {
                    links: [
                       
                    ]
                }
            ]
        }
    ]
}

export const mainNavigationItems: navigationItemsInterface = {
    heading: 'main', items: [
        {
            expansionHeader: 'tutorials', expansionContents: [
                {
                    innerHeader: 'web development', links: [
                        {
                            ...GettingStartedWithTheWebConfig.buttonsConfig.main
                        },

                        {
                            ...HTMLConfig.buttonsConfig.main
                        }
                    ]
                }
            ]
        },

        {
            name: 'practice projects', path: 'p'
        },

        {
            name: 'find / post a job', path: 'p'
        },

        {
            expansionHeader: 'about', expansionContents: [{
                links: [
                    { name: 'about us', path: 'q' },
                    { name: 'how to get involved', path: 'w' },
                    { name: 'FAQ', path: 'v' }

                ]
            }]
        }
    ]
} 