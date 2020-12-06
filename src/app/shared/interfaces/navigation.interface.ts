export interface navigationItemsInterface {
    heading: string, items: Array<{
        heading: string, path?: string, contents?: Array<{
            heading?: string, links: Array<{
                name: string, path: string
            }>
        }>
    }>
}
