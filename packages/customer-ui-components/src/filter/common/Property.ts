import {
  CheckboxFilterPropertyValue,
  RangeFilterPropertyValue,
} from "./PropertyValues";

export enum PropertyType {
  Checkbox,
  Range,
}

export class FilterProperty {
  private readonly _key: string;
  private readonly _type: PropertyType;

  constructor(key: string, type: PropertyType) {
    this._key = key;
    this._type = type;
  }

  public get key() {
    return this._key;
  }

  public get type() {
    return this._type;
  }
}

export class CheckboxFilterProperty extends FilterProperty {
  private readonly _defaultValue: CheckboxFilterPropertyValue;

  constructor(key: string, defaultValue: CheckboxFilterPropertyValue) {
    super(key, PropertyType.Checkbox);
    this._defaultValue = defaultValue;
  }

  public get defaultValue() {
    return this._defaultValue;
  }
}

export class RangeFilterProperty extends FilterProperty {
  private readonly _defaultValue: RangeFilterPropertyValue;
  private readonly _min: number;
  private readonly _max: number;

  constructor(
    key: string,
    min: number,
    max: number,
    defaultValue: RangeFilterPropertyValue,
  ) {
    super(key, PropertyType.Range);
    this._min = min;
    this._max = max;
    this._defaultValue = defaultValue;
  }

  public get min() {
    return this._min;
  }

  public get max() {
    return this._max;
  }
  public get defaultValue() {
    return this._defaultValue;
  }
}
