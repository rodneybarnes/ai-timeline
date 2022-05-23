import TimelineData from "../classes/timeline-data";
import type { TimelineEntryType } from "../types/timeline-entry.type";

/**
 * Fetches the timeline data.
 * @param {(url: string) => Promise<Response>} fetch Sveltekit's implementation of Javascript's fetch function.
 * @returns {Promise<TimelineData>} The parsed timeline data.
 */
export const fetchTimelineData = async (fetch: (url: string) => Promise<Response>): Promise<TimelineData> => {
    const url = 'https://opensheet.elk.sh/1xOrcYodnYn-mR9WCXsD-x6JxNWusemQD4gXuArqvaeA/Sheet1';
    const response = await fetch(url);
    console.log({response})
    const body: TimelineEntryType[] = await response.json();
    return new TimelineData(body);
}