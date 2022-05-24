/**
 * @class A handy little class to help define our filters!
 * @property {string} name The name of the filter.
 * @property {string} values The values to display in the filter.
 */
class Filter {
    name: string;
    values: string[];

    /**
     * Create a new Filter.
     * @param name The name of the filter.
     * @param values The values to display in the filter.
     */
    constructor(name, values) {
        this.name = name;
        this.values = values;
    }
}

export default Filter;