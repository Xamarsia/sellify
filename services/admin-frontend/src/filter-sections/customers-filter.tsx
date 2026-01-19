import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import {
  CheckboxFilterProperty,
  RangeFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import {
  CheckboxFilterPropertyValue,
  RangeFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";

export const CustomersFilterSections: Array<FilterSection> = [
  new FilterSection("orders-amount", [
    new RangeFilterProperty(
      "orders-amount",
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
    ),
  ]),
  new FilterSection("total-expenses-amount", [
    new RangeFilterProperty(
      "total-expenses-amount",
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
