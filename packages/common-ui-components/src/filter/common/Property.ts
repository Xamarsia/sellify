import {
  CheckboxFilterPropertyValue,
  RangeFilterPropertyValue,
  MultiSelectionComboboxFilterPropertyValue,
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
  private readonly _initialValue: CheckboxFilterPropertyValue;

  constructor(key: string, initialValue: CheckboxFilterPropertyValue) {
    super(key, PropertyType.Checkbox);
    this._initialValue = initialValue;
  }

  public get initialValue(): CheckboxFilterPropertyValue {
    return this._initialValue;
  }
}

export class RangeFilterProperty extends FilterProperty {
  private readonly _fullRange: RangeFilterPropertyValue;
  private readonly _initialRange: RangeFilterPropertyValue;

  constructor(
    key: string,
    fullRange: RangeFilterPropertyValue,
    initialRange?: RangeFilterPropertyValue,
  ) {
    super(key, PropertyType.Range);
    this._initialRange = initialRange ?? fullRange;
    this._fullRange = fullRange;
  }

  public get initialRange(): RangeFilterPropertyValue {
    return this._initialRange;
  }

  public get fullRange(): RangeFilterPropertyValue {
    return this._fullRange;
  }
}

export class MultiSelectionComboboxFilterProperty<T> extends FilterProperty {
  private readonly _items: MultiSelectionComboboxFilterPropertyValue<T>;
  private readonly _initialSelectedKeys: T[];

  constructor(
    key: string,
    items: MultiSelectionComboboxFilterPropertyValue<T>,
    initialSelectedKeys?: T[],
  ) {
    super(key, PropertyType.Combobox);
    this._initialSelectedKeys = initialSelectedKeys ?? [];
    this._items = items;
  }

  public get initialSelectedKeys(): T[] {
    return this._initialSelectedKeys;
  }

  public get items(): MultiSelectionComboboxFilterPropertyValue<T> {
    return this._items;
  }
}
