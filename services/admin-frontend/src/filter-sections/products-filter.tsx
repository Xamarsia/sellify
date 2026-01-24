import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import {
  CheckboxFilterProperty,
  MultiSelectionComboboxFilterProperty,
  RangeFilterProperty,
  InputFilterProperty,
  IdInputFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import {
  CheckboxFilterPropertyValue,
  MultiSelectionComboboxFilterPropertyValue,
  RangeFilterPropertyValue,
  InputFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";
import { getCategoryComboboxItems } from "actions/category-actions";

const categories: Map<number, string> = getCategoryComboboxItems();

export const ProductsFilterSections: Array<FilterSection> = [
  new FilterSection("product-title", [
    new InputFilterProperty(
      "product-title",
      new InputFilterPropertyValue(""),
      "Product Title",
    ),
  ]),
  new FilterSection("product-id", [
    new IdInputFilterProperty("product-id", new InputFilterPropertyValue("")),
  ]),
  new FilterSection("price-range", [
    new RangeFilterProperty(
      "price-range",
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
    ),
  ]),
  new FilterSection("inventory-range", [
    new RangeFilterProperty(
      "inventory-range",
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
    ),
  ]),
  new FilterSection("status", [
    new CheckboxFilterProperty(
      "active",
      new CheckboxFilterPropertyValue(false),
    ),
    new CheckboxFilterProperty(
      "archived",
      new CheckboxFilterPropertyValue(false),
    ),
  ]),
  new FilterSection("category", [
    new MultiSelectionComboboxFilterProperty<number>(
      "category",
      new MultiSelectionComboboxFilterPropertyValue(categories),
    ),
  ]),
];

export const ProductsPreviewFilterSections: Array<FilterSection> = [
  new FilterSection("product-title", [
    new InputFilterProperty(
      "product-title",
      new InputFilterPropertyValue(""),
      "Product Title",
    ),
  ]),
  new FilterSection("product-id", [
    new IdInputFilterProperty("product-id", new InputFilterPropertyValue("")),
  ]),
];
