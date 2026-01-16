import { SliderRange } from "../../types";

export interface FilterPropertyValue {}

export class CheckboxFilterPropertyValue implements FilterPropertyValue {
  private _value: boolean;

  constructor(value: boolean) {
    this._value = value;
  }

  public get value(): boolean {
    return this._value;
  }

  public set value(value: boolean) {
    this._value = value;
  }
}

export class RangeFilterPropertyValue implements FilterPropertyValue {
  private _value: SliderRange;

  constructor(value: SliderRange) {
    this._value = value;
  }

  public get value(): SliderRange {
    return this._value;
  }

  public set value(value: SliderRange) {
    this._value = value;
  }
}
