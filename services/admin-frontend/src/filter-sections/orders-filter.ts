import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import {
  CheckboxFilterProperty,
  RangeFilterProperty,
  InputFilterProperty,
  IdInputFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import {
  CheckboxFilterPropertyValue,
  RangeFilterPropertyValue,
  InputFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";

export const OrdersFilterSections: Array<FilterSection> = [
  new FilterSection("order-id", [
    new IdInputFilterProperty("order-id", new InputFilterPropertyValue("")),
  ]),
  new FilterSection("customer-name", [
    new InputFilterProperty(
      "customer-name",
      new InputFilterPropertyValue(""),
      "Customer name",
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

export const OrderProductsFilterSections: Array<FilterSection> = [
  new FilterSection("product-title", [
    new InputFilterProperty(
      "product-title",
      new InputFilterPropertyValue(""),
      "Product Title",
    ),
  ]),
  new FilterSection("quantity-range", [
    new RangeFilterProperty(
      "quantity-range",
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
    ),
  ]),
  new FilterSection("price-range", [
    new RangeFilterProperty(
      "price-range",
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
    ),
  ]),
];
