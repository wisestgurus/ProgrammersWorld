export interface navItemsInterface {
    header: string,
    links: { name: string, path: string }[],
}

export interface tutorialItemsInterface {
    header: string,

    briefIntro?: string[],

    prerequisites: { name: string, path?: string }[],

    objectives: string[],

    terminologies?: { name: string, meaning: string }[],

    buttons: {
        previous?: { name: string, path: string }
        next?: { name: string, path: string },
    }
}