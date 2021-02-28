import { navigationItemsInterface, TutorialsRoutingConfig } from "../shared/shared"

export const tutorialsNavigation: navigationItemsInterface = {
    heading: 'tutorials', items: [

        { ...TutorialsRoutingConfig.home.buttonConfig },

        {
            expansionHeader: TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.main.name,
            expansionContents: [
                {
                    innerHeader: 'introduction to the web', links: [
                        {
                            ...TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.introduction,
                        },
                    ]
                },
                {
                    innerHeader: 'the web is not the internet', links: [
                        {
                            ...TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.howTheInternetWorks
                        },

                        {
                            ...TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.howTheWebWorks
                        },

                        {
                            ...TutorialsRoutingConfig.gettingStartedWithTheWeb.buttonsConfig.history
                        },

                        {
                            name: 'the web standards', path: 'q'
                        },
                    ],
                },
                {
                    innerHeader: 'web development', links: [
                        {
                            name: 'introduction to web development', path: 'q'
                        },

                        {
                            name: 'what is web development', path: 'q'
                        },

                        {
                            name: 'fields in web development', path: 'q'
                        },

                        {
                            name: 'job opportunities in web development', path: 'q'
                        },

                        {
                            name: 'importance of web development', path: 'q'
                        },
                    ]
                },

                {
                    innerHeader: 'next step before programming a website', links: [
                        {
                            name: 'code editors', path: 'q'
                        },

                        {
                            name: 'dealing with files', path: 'q'
                        },

                        {
                            name: 'choosing a perfect font', path: 'q'
                        },

                        {
                            name: 'choosing a nice colour', path: 'q'
                        },

                    ]
                }
            ]
        },

        {
            expansionHeader: 'HTML', expansionContents: [
                {
                    innerHeader: 'introduction to HTML', links: [
                        TutorialsRoutingConfig.HTML.buttonsConfig.introduction,
                    ]
                },
                {
                    innerHeader: 'beginners guide', links: [
                        TutorialsRoutingConfig.HTML.buttonsConfig.basicSyntaxExplained
                    ]
                }
            ]
        }
    ],
}