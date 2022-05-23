/**
 * This is the type that comes in from the fetch to the Google Sheets data,
 * which is why the property names are upper-cased.
 */
export type RawTimelineEntryType = {
    Day: number,
    Month: number,
    Year: number,
    Headline: string,
    Text?: string,
    Group?: string,
    Type?: string,
    EndYear: number,
}