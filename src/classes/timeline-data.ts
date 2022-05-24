import type { FilterParam } from "src/types/filter-param.type";
import type { RawTimelineEntryType } from "src/types/raw-timeline-entry.type";
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
    constructor(fetchedData: RawTimelineEntryType[]) {
        this.data = fetchedData.map(this.#mapRawDataToTimeLineEntry);
    }

    /**
     * Parses a raw timeline entry into an internal type we can more appropriately use.
     * @param {RawTimelineEntryType} rawData A raw timeline data entry.
     * @returns {TimelineEntryType} The validated timeline entry type that we will use internally.
     */
    #mapRawDataToTimeLineEntry(rawData: RawTimelineEntryType): TimelineEntryType {
        return { 
            ...rawData,
            day: rawData.Day && Number(rawData.Day),
            month: rawData.Month && Number(rawData.Month),
            year: Number(rawData.Year),
            headline: rawData.Headline,
            text: rawData.Text,
            group: rawData.Group,
            type: rawData.Type,
            endYear: Number(rawData["End Year"])
        };
    }

    get eras(): TimelineEntryType[] {
        return this.data.filter((datum) => datum.type === 'era');
    }

    get groups() {
        return [...new Set(this.data.filter((datum) => datum.group !== undefined).map((datum) => datum.group))];
    }

    get entries() {
        return this.data.filter((datum) => datum.type === undefined || datum.type === '');
    }

    /**
     * Filters the timeline entries.
     * @param {FilterParam[]} filterParams The filter parameters to apply.
     * @returns {TimelineEntryType[]} The filtered entries.
     */
    filterEntries(filterParams: FilterParam[]): TimelineEntryType[] {

        let filteredEntries = [...this.entries];

        filterParams.forEach((param) => {
            switch (param.by) {
                case 'era':
                    filteredEntries = this.#filterByEra(param.value, filteredEntries);
                    break;
                case 'group':
                    filteredEntries = this.#filterByGroup(param.value, filteredEntries);
                    break;
                default:
                    break;
            }
        })

        return filteredEntries;
    }

    /**
     * Filters the timeline entries by the selected era.
     * @param {string} selectedEra The selected era to filter for.
     * @param {TimelineEntryType[]} entries The entries to filter.
     * @returns {TimelineEntryType[]} A list of timeline entries filtered by the selected era.
     */
    #filterByEra(selectedEra: string, entries: TimelineEntryType[]): TimelineEntryType[] {
        if (!selectedEra) {
            return entries;
        }

        const foundEra = this.eras.find((era) => era.headline === selectedEra);

        if (!foundEra) {
            throw new Error(`Invalid era passed to filter: ${selectedEra}`);
        }

        return entries.filter((timeLineEntry) =>
            Number(timeLineEntry.year) >= Number(foundEra.year) &&
            Number(timeLineEntry.year) <= Number(foundEra.endYear));
    }

    /**
     * Filters the timeline entries by the selected group.
     * @param {string} group The group to filter by. 
     * @returns {TimelineEntryType[]} A list of timeline entries filtered by the selected group.
     */
    #filterByGroup(group: string, entries: TimelineEntryType[]): TimelineEntryType[] {
        if (!group) {
            return entries;
        }

        return entries.filter((timeLineEntry) => timeLineEntry.group === group);
    }
}

export default TimelineData;