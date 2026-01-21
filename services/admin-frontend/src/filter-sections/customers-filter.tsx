import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import {
  CheckboxFilterProperty,
  RangeFilterProperty,
  SearchFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import {
  CheckboxFilterPropertyValue,
  RangeFilterPropertyValue,
  SearchFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";

export const CustomersFilterSections: Array<FilterSection> = [
  new FilterSection("customer-name", [
    new SearchFilterProperty(
      "customer-name",
      new SearchFilterPropertyValue(""),
    ),
  ]),
  new FilterSection("customer-id", [
    new SearchFilterProperty("customer-id", new SearchFilterPropertyValue("")),
  ]),
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
