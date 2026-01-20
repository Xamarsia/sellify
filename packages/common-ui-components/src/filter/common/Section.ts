import {
  CheckboxFilterProperty,
  ComboboxFilterProperty,
  RangeFilterProperty,
} from "./Property";

export class FilterSection {
  private readonly _key: string;
  private _properties: Array<
    CheckboxFilterProperty | RangeFilterProperty | ComboboxFilterProperty
  >;

  constructor(
    key: string,
    properties: Array<
      CheckboxFilterProperty | RangeFilterProperty | ComboboxFilterProperty
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
