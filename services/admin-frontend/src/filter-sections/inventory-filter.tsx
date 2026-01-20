import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import { RangeFilterProperty } from "../../../../packages/common-ui-components/src/filter/common/Property";
import { RangeFilterPropertyValue } from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";

export const InventoryFilterSections: Array<FilterSection> = [
  new FilterSection("quantity-range", [
    new RangeFilterProperty(
      "quantity-range",
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
    ),
  ]),
];
