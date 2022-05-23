import type { RawTimelineEntryType } from "src/types/raw-timeline-entry.type";

/**
 * Fetches the timeline data.
 * @param {(url: string) => Promise<Response>} fetch Sveltekit's implementation of Javascript's fetch function. 
 * See {@link https://kit.svelte.dev/docs/types#sveltejs-kit-loadinput} for more information.
 * @returns {Promise<RawTimelineEntryType>} The parsed timeline data.
 */
export const fetchTimelineData = async (fetch: (url: string) => Promise<Response>): Promise<RawTimelineEntryType[]> => {
    const url = 'https://opensheet.elk.sh/1xOrcYodnYn-mR9WCXsD-x6JxNWusemQD4gXuArqvaeA/Sheet1';
    const response = await fetch(url);
    return await response.json();
}