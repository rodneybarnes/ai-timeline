import type { FilterParam } from "src/types/filter-param.type";

/**
 * A collection of static helper functions for the URL.
 */
class URLHelper {

    /**
     * Parses the current filter parameters from the URL.
     * @param {[string, string][]} urlSearchParams The query parameters in the URL.
     * @returns {FilterParam[]} The current filter parameters.
     */
    static getFilterParams = (urlSearchParams: [string, string][]): FilterParam[] =>
        urlSearchParams.map(this.#mapFilterParam);


    /**
     * Maps a key-value pair from the url query params to an internal FilterParam type.
     * @param {string} key The key.
     * @param {string} value The value.
     * @returns {FilterParam} The FilterParam object.
     */
    static #mapFilterParam([key, value]: [string, string]): FilterParam {
        return { by: key, value };
    }

    /**
     * Returns the value of the id param if it exists.
     * @param urlSearchParams The query parameters in the URL.
     * @returns {string | undefined} The value if found, otherwise undefined
     */
    static getSelectedEntryId = (urlSearchParams: [string, string][]): string | undefined =>
        urlSearchParams.find(([key]) => key === 'id')?.[1];
}

export default URLHelper;