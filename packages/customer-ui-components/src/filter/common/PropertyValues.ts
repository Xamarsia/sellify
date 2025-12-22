export interface FilterPropertyValue { };

export class CheckboxFilterPropertyValue implements FilterPropertyValue {
    private _value: boolean;

    constructor(value: boolean) {
        this._value = value;
    }

    public get value() {
        return this._value;
    }

    public set value(value: boolean) {
        this._value = value;
    }
}

export class RangeFilterPropertyValue implements FilterPropertyValue {
    private _value: number;

    constructor(value: number) {
        this._value = value;
    }

    public get value() {
        return this._value;
    }

    public set value(value: number) {
        this._value = value;
    }
}
