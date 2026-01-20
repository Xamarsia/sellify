import { SliderRange } from "../../types";

export interface FilterPropertyValue {}

export class FilterPropertyValueImpl<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  public get value(): T {
    return this._value;
  }

  public set value(value: T) {
    this._value = value;
  }
}

export class CheckboxFilterPropertyValue extends FilterPropertyValueImpl<boolean> {}

export class RangeFilterPropertyValue extends FilterPropertyValueImpl<SliderRange> {}

export class MultiSelectionComboboxFilterPropertyValue<
  T,
> extends FilterPropertyValueImpl<Map<T, string>> {}
