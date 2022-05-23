import type { TimelineEntryType } from "../types/timeline-entry.type";

/**
 * @class A class that encapsulates the timeline data and its properties.
 * @property {TimelineEntryType[]} data - The unfiltered data.
 * @property {TimelineEntryType[]} eras - The timeline entries classified as eras; these do not have specific timeline data in them, but rather are more like categories.
 * @property {string[]} groups - A list of the unique group categories that timeline entries may be associated with.
 * @property {TimelineEntryType[]} entries - The timeline data we want to display in the timeline.
 */
class TimelineData {
    data: TimelineEntryType[];

    /**
     * Create a new TimelineData class :success-baby:
     * @param {TimelineEntryType[]} fetchedData The timeline data fetched.
     */
    constructor(fetchedData: TimelineEntryType[]) {
        this.data = fetchedData.map(this.#mapRawDataToTimeLineEntry);
    }

    #mapRawDataToTimeLineEntry(rawData): TimelineEntryType {
        return { ...rawData, EndYear: rawData["End Year"] };
    }

    get eras(): TimelineEntryType[] {
        return this.data.filter((i) => i.Type === 'era');
    }

    get groups() {
        return [...new Set(this.data.filter((i) => i.Group !== undefined).map((i) => i.Group))];
    }

    get entries() {
        return this.data.filter((i) => i.Type === undefined || i.Type === '');
    }

    filterEntries(by: string, selectedValue: string): TimelineEntryType[] {
        switch (by) {
            case 'era':
                return this.#filterByEra(selectedValue);
            case 'group':
                return this.#filterByGroup(selectedValue);
            default:
                return this.data;
        }
    }

    #filterByEra(selectedEra: string): TimelineEntryType[] {
        const foundEra = this.eras.find((era) => era.Headline === selectedEra);

        if (!foundEra) {
            throw new Error(`Invalid era passed to filter: ${selectedEra}`);
        }

        return this.entries.filter((timeLineEntry) =>
            Number(timeLineEntry.Year) >= Number(foundEra.Year) &&
            Number(timeLineEntry.Year) <= Number(foundEra.EndYear));
    }

    #filterByGroup(group: string): TimelineEntryType[] {
        return [];
    }
}

export default TimelineData;