import {
  CheckboxFilterPropertyValue,
  RangeFilterPropertyValue,
  ComboboxFilterPropertyValue,
} from "./PropertyValues";

export enum PropertyType {
  Checkbox,
  Range,
  Combobox,
}

export class FilterProperty {
  private readonly _key: string;
  private readonly _type: PropertyType;

  constructor(key: string, type: PropertyType) {
    this._key = key;
    this._type = type;
  }

  public get key(): string {
    return this._key;
  }

  public get type(): PropertyType {
    return this._type;
  }
}

export class CheckboxFilterProperty extends FilterProperty {
  private readonly _defaultValue: CheckboxFilterPropertyValue;

  constructor(key: string, defaultValue: CheckboxFilterPropertyValue) {
    super(key, PropertyType.Checkbox);
    this._defaultValue = defaultValue;
  }

  public get defaultValue(): CheckboxFilterPropertyValue {
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

  public get defaultValue(): RangeFilterPropertyValue {
    return this._defaultValue;
  }

  public get range(): RangeFilterPropertyValue {
    return this._range;
  }
}

export class ComboboxFilterProperty extends FilterProperty {
  private readonly _items: Map<string, string>;
  private readonly _defaultValue: ComboboxFilterPropertyValue;

  constructor(
    key: string,
    items: Map<string, string>,
    defaultValue: ComboboxFilterPropertyValue,
  ) {
    super(key, PropertyType.Combobox);
    this._defaultValue = defaultValue;
    this._items = items;
  }

  public get defaultValue(): ComboboxFilterPropertyValue {
    return this._defaultValue;
  }

  public get items(): Map<string, string> {
    return this._items;
  }
}
