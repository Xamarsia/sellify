import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import {
  RangeFilterProperty,
  InputFilterProperty,
  IdInputFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import {
  RangeFilterPropertyValue,
  InputFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";

export const InventoryFilterSections: Array<FilterSection> = [
  new FilterSection("product-title", [
    new InputFilterProperty(
      "product-title",
      new InputFilterPropertyValue(""),
      "Product Title",
    ),
  ]),
  new FilterSection("productId", [
    new IdInputFilterProperty("productId", new InputFilterPropertyValue("")),
  ]),
  new FilterSection("quantity-range", [
    new RangeFilterProperty(
      "quantity-range",
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
    ),
  ]),
];
