import {
  CheckboxFilterProperty,
  MultiSelectionComboboxFilterProperty,
  RangeFilterProperty,
} from "./Property";

export class FilterSection<T = number> {
  private readonly _key: string;
  private _properties: Array<
    | CheckboxFilterProperty
    | RangeFilterProperty
    | MultiSelectionComboboxFilterProperty<T>
  >;

  constructor(
    key: string,
    properties: Array<
      | CheckboxFilterProperty
      | RangeFilterProperty
      | MultiSelectionComboboxFilterProperty<T>
    >,
  ) {
    this._key = key;
    this._properties = properties;
  }

  public get key() {
    return this._key;
  }

  public get properties() {
    return this._properties;
  }
}
