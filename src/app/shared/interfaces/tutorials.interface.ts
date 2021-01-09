export interface tutorialItemsInterface {
    heading: string,
    briefIntro?: Array<string>,
    prerequisites?: Array<{ name: string, path: string, isOptional?: true }>,
    objectives: Array<string>,
    glossaries?: Array<{ heading: string, definitions: Array<string>, examples?: Array<string> }>,
    summaries: Array<string>,
    buttons: {
        prevPath?: string,
        nextPath?: string
    }
}