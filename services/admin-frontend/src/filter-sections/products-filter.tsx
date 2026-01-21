import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import {
  CheckboxFilterProperty,
  MultiSelectionComboboxFilterProperty,
  RangeFilterProperty,
  SearchFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import {
  CheckboxFilterPropertyValue,
  MultiSelectionComboboxFilterPropertyValue,
  RangeFilterPropertyValue,
  SearchFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";
import { getCategoryComboboxItems } from "common/actions/category-actions";

const categories: Map<number, string> = getCategoryComboboxItems();

export const ProductsFilterSections: Array<FilterSection> = [
  new FilterSection("product-title", [
    new SearchFilterProperty(
      "product-title",
      new SearchFilterPropertyValue(""),
    ),
  ]),
  new FilterSection("product-id", [
    new SearchFilterProperty("product-id", new SearchFilterPropertyValue("")),
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
    new SearchFilterProperty(
      "product-title",
      new SearchFilterPropertyValue(""),
    ),
  ]),
  new FilterSection("product-id", [
    new SearchFilterProperty("product-id", new SearchFilterPropertyValue("")),
  ]),
];
