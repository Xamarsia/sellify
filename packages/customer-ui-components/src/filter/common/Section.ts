import { CheckboxFilterProperty, RangeFilterProperty } from "./Property";

export class FilterSection {
    private readonly _key: string;
    private _properties: Array<CheckboxFilterProperty | RangeFilterProperty>;

    constructor(key: string, properties: Array<CheckboxFilterProperty | RangeFilterProperty>) {
        this._key = key;
        this._properties = properties;
    }

    public get key() {
        return this._key;
    }

    public get properties() {
        return this._properties;
    }
};
