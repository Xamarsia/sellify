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

export const CategoriesFilterSections: Array<FilterSection> = [
  new FilterSection("category-title", [
    new InputFilterProperty(
      "category-title",
      new InputFilterPropertyValue(""),
      "Category Title",
    ),
  ]),
  new FilterSection("category-id", [
    new IdInputFilterProperty("category-id", new InputFilterPropertyValue("")),
  ]),
  new FilterSection("related-products-amount", [
    new RangeFilterProperty(
      "related-products-amount",
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
    ),
  ]),
];
