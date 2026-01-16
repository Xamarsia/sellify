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
  private readonly _range: RangeFilterPropertyValue;
  private readonly _defaultValue: RangeFilterPropertyValue;

  constructor(
    key: string,
    range: RangeFilterPropertyValue,
    defaultValue: RangeFilterPropertyValue,
  ) {
    super(key, PropertyType.Range);
    this._defaultValue = defaultValue;
    this._range = range;
  }

  public get defaultValue() {
    return this._defaultValue;
  }

  public get range() {
    return this._range;
  }
}
