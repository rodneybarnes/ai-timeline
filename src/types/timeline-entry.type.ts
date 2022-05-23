/**
 * The timeline entry type we'll use for everything internal.
 */
export type TimelineEntryType = {
    day?: number,
    month?: number,
    year: number,
    headline: string,
    text?: string,
    group?: string,
    type?: string,
    endYear: number,
}
