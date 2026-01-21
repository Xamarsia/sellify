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

export const OrdersFilterSections: Array<FilterSection> = [
  new FilterSection("order-id", [
    new SearchFilterProperty("order-id", new SearchFilterPropertyValue("")),
  ]),
  new FilterSection("customer-name", [
    new SearchFilterProperty(
      "customer-name",
      new SearchFilterPropertyValue(""),
    ),
  ]),
  new FilterSection("price-range", [
    new RangeFilterProperty(
      "price-range",
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
    ),
  ]),
  new FilterSection("status", [
    new CheckboxFilterProperty("new", new CheckboxFilterPropertyValue(false)),
    new CheckboxFilterProperty(
      "in-progress",
      new CheckboxFilterPropertyValue(false),
    ),
    new CheckboxFilterProperty(
      "shipped",
      new CheckboxFilterPropertyValue(false),
    ),
    new CheckboxFilterProperty(
      "canceled",
      new CheckboxFilterPropertyValue(false),
    ),
  ]),
];
