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
}

export default URLHelper;