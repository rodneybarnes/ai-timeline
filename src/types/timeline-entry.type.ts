/**
 * This is the type that comes in from the fetch to the Google Sheets data,
 * which is why the property names are upper-cased.
 */
export type TimelineEntryType = {
    Day: string,
    Month: string,
    Year: string,
    Headline: string,
    Text?: string,
    Group?: string,
    Type?: string,
}
