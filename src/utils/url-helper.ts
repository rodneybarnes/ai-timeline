import type { QueryParam } from "src/types/query-param.type";

/**
 * A collection of static helper functions for the URL.
 */
class URLHelper {

    /**
     * Parses all of the query parameters in the URL.
     * @param {[string, string][]} urlSearchParams The query parameters in the URL.
     * @returns {QueryParam[]} The current filter parameters.
     */
    static getQueryParams = (urlSearchParams: [string, string][]): QueryParam[] =>
        urlSearchParams.map(this.#mapQueryParam);


    /**
     * Maps a key-value pair from the url query params to an internal QueryParam type for easier use.
     * @param {string} key The key.
     * @param {string} value The value.
     * @returns {QueryParam} The FilterParam object.
     */
    static #mapQueryParam([key, value]: [string, string]): QueryParam {
        return { key, value };
    }

    /**
     * Returns the value of a given param if it exists.
     * @param param The param to search for.
     * @param urlSearchParams The query parameters in the URL.
     * @returns {string | undefined} The value if found, otherwise undefined
     */
    static getQueryParam = (param, urlSearchParams: [string, string][]): string | undefined =>
        urlSearchParams.find(([key]) => key === param)?.[1];
}

export default URLHelper;