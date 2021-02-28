import { TutorialsRoutingConfig, navigationItemsInterface }
    from '../shared/shared';

export const profileNavigationItems: navigationItemsInterface = {
    heading: 'profile', items: [
        { name: 'signup', path: '/profile/signup' },
        { name: 'login', path: '/profile/login' },
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
        { ...TutorialsRoutingConfig.main.buttonConfig },
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