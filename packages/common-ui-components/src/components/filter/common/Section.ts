import {
  CheckboxFilterProperty,
  MultiSelectionComboboxFilterProperty,
  RangeFilterProperty,
  InputFilterProperty,
  IdInputFilterProperty,
} from "./Property";

export class FilterSection<T = number> {
  private readonly _key: string;
  private _properties: Array<
    | CheckboxFilterProperty
    | RangeFilterProperty
    | InputFilterProperty
    | IdInputFilterProperty
    | MultiSelectionComboboxFilterProperty<T>
  >;

  constructor(
    key: string,
    properties: Array<
      | CheckboxFilterProperty
      | RangeFilterProperty
      | InputFilterProperty
      | IdInputFilterProperty
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
