export interface navigationItemsInterface {
    heading: string, items: Array<{
        name?: string, path?: string, expansionHeader?: string,
        expansionContents?: Array<{
            innerHeader?: string, links: Array<{ name: string, path: string }>
        }>
    }>
}