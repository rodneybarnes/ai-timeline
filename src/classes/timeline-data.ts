import type { TimelineEntryType } from "../types/timeline-entry.type";

/**
 * @typedef {Object} TimelineData - A class that encapsulates the timeline data and its properties.
 * @property {TimelineEntryType[]} data - The unfiltered data.
 * @property {TimelineEntryType[]} eras - The timeline entries classified as eras; these do not have specific timeline data in them, but rather are more like categories.
 * @property {string[]} groups - A list of the unique group categories that timeline entries may be associated with.
 * @property {TimelineEntryType[]} entries - The timeline data we want to display in the timeline.
 */
class TimelineData {
    data: TimelineEntryType[];

    constructor(fetchedData: TimelineEntryType[]) {
        this.data = fetchedData;
    }

    get eras():TimelineEntryType[] {
        return this.data.filter((i) => i.Type === 'era');
    }

    get groups() {
        return [...new Set(this.data.filter((i) => i.Group !== undefined).map((i) => i.Group))];
    }

    get entries() {
        return this.data.filter((i) => i.Type === undefined || i.Type === '');
    }
}

export default TimelineData;