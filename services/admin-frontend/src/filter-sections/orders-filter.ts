import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import {
  CheckboxFilterProperty,
  RangeFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import {
  CheckboxFilterPropertyValue,
  RangeFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";

export const OrdersFilterSections: Array<FilterSection> = [
  new FilterSection("size", [
    new CheckboxFilterProperty("s", new CheckboxFilterPropertyValue(false)),
    new CheckboxFilterProperty("m", new CheckboxFilterPropertyValue(false)),
    new CheckboxFilterProperty("l", new CheckboxFilterPropertyValue(false)),
    new CheckboxFilterProperty("xl", new CheckboxFilterPropertyValue(false)),
  ]),
  new FilterSection("type", [
    new CheckboxFilterProperty(
      "succulents",
      new CheckboxFilterPropertyValue(false),
    ),
    new CheckboxFilterProperty(
      "flowering",
      new CheckboxFilterPropertyValue(false),
    ),
    new CheckboxFilterProperty("herbs", new CheckboxFilterPropertyValue(false)),
    new CheckboxFilterProperty(
      "ornamental",
      new CheckboxFilterPropertyValue(false),
    ),
  ]),
  new FilterSection("light-requirement", [
    new CheckboxFilterProperty("low", new CheckboxFilterPropertyValue(false)),
    new CheckboxFilterProperty(
      "medium",
      new CheckboxFilterPropertyValue(false),
    ),
    new CheckboxFilterProperty(
      "bright-indirect",
      new CheckboxFilterPropertyValue(false),
    ),
    new CheckboxFilterProperty(
      "direct",
      new CheckboxFilterPropertyValue(false),
    ),
  ]),
  new FilterSection("price-range", [
    new RangeFilterProperty(
      "price-range",
      new RangeFilterPropertyValue({ min: 100, max: 344 }),
      new RangeFilterPropertyValue({ min: 200, max: 344 }),
    ),
  ]),
];
