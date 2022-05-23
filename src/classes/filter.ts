/**
 * @class A handy little class to help define our filters!
 */
class Filters {
    name: string;
    values: string[];

    constructor(name, values) {
        this.name = name;
        this.values = values;
    }
}

export default Filters;