import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import {
  CheckboxFilterProperty,
  RangeFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import {
  CheckboxFilterPropertyValue,
  RangeFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";

// TODO Add "Rank by category"
export const ProductsFilterSections: Array<FilterSection> = [
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
];
