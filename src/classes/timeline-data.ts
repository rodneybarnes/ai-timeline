import type { QueryParam } from "src/types/query-param.type";
import type { RawTimelineEntryType } from "src/types/raw-timeline-entry.type";
import type { TimelineEntryType } from "../types/timeline-entry.type";

/**
 * @class A class that encapsulates the timeline data and its properties.
 * @property {TimelineEntryType[]} data - The unfiltered data.
 * @property {TimelineEntryType[]} eras - The timeline entries classified as eras; these do not have specific timeline data in them, but rather are more like categories.
 * @property {string[]} themes - A list of the unique categories that timeline entries may be associated with.
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
            text: rawData.Text || '',
            theme: rawData.Group,
            type: rawData.Type,
            endYear: Number(rawData["End Year"])
        };
    }

    get eras(): TimelineEntryType[] {
        return this.data.filter((datum) => datum.type === 'era');
    }

    get themes() {
        return [...new Set(
            this.data
                .filter((datum) => datum.theme !== undefined)
                .map((datum) => datum.theme.split(',').map((theme) => theme.trim()))
                .flat()
                .filter((theme) => theme !== '')
                .map((theme) => `${theme.charAt(0).toUpperCase()}${theme.slice(1).toLowerCase()}`)
                .sort()
            )];
    }

    get entries() {
        return this.data.filter((datum) => datum.type === undefined || datum.type === '');
    }

    /**
     * Filters and orders the timeline entries.
     * @param {QueryParam[]} queryParams The filter and order parameters to apply.
     * @returns {TimelineEntryType[]} The filtered and ordered entries.
     */
    filterEntries(queryParams: QueryParam[]): TimelineEntryType[] {
        let filteredEntries = [...this.entries];
        filteredEntries = this.#applyFilters(queryParams, filteredEntries);

        const orderBy = queryParams.find(param => param.key === 'orderBy')?.value;
        if (orderBy) {
            this.#applyOrder(orderBy, filteredEntries);
        }

        return filteredEntries;
    }

    #applyFilters(queryParams: QueryParam[], filteredEntries): TimelineEntryType[] {
        queryParams.forEach((param) => {
            switch (param.key) {
                case 'era':
                    filteredEntries = this.#filterByEra(param.value, filteredEntries);
                    break;
                case 'theme':
                    filteredEntries = this.#filterByTheme(param.value, filteredEntries);
                    break;
                case 'search':
                    filteredEntries = this.#filterByHeadlineAndText(param.value, filteredEntries);
                    break;
                default:
                    break;
            }
        });

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
     * Filters the timeline entries by the selected theme.
     * @param {string} theme The theme to filter by. 
     * @param entries The entries to filter on.
     * @returns {TimelineEntryType[]} A list of timeline entries filtered by the selected theme.
     */
    #filterByTheme(theme: string, entries: TimelineEntryType[]): TimelineEntryType[] {
        if (!theme) {
            return entries;
        }

        return entries.filter((timeLineEntry) => timeLineEntry.theme === theme);
    }

    /**
     * Searches the given entries for the given value.
     * @param {string} searchValue The value to search by.
     * @param {TimeLineEntryType[]} entries The entries to search.
     * @returns {TimeLineEntryType[]} A list of timeline entries filtered by the search.
     */
    #filterByHeadlineAndText(searchValue: string, entries: TimelineEntryType[]): TimelineEntryType[] {
        if (!searchValue) {
            return entries;
        }

        return entries.filter((entry) =>
            entry.headline?.toLowerCase().includes(searchValue.toLowerCase()) ||
            entry.text?.toLowerCase().includes(searchValue.toLowerCase()));
    }

    /**
     * Orders the given timeline entries.
     * @param orderBy The direction to order by.
     * @param filteredEntries The entries to order.
     * @returns A reference to the entries passed in, which have been sorted in place.
     */
    #applyOrder = (orderBy, filteredEntries): TimelineEntryType[] =>
        filteredEntries.sort((first, second) => {
            if (orderBy === 'asc') {
                return new Date(first.year, first.month, first.day).getTime() - new Date(second.year, second.month, second.day).getTime()
            } else {
                return new Date(second.year, second.month, second.day).getTime() - new Date(first.year, first.month, first.day).getTime()
            }
        });
}

export default TimelineData;