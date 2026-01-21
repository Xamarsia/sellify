import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import {
  RangeFilterProperty,
  SearchFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import {
  RangeFilterPropertyValue,
  SearchFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";

export const CategoriesFilterSections: Array<FilterSection> = [
  new FilterSection("category-title", [
    new SearchFilterProperty(
      "category-title",
      new SearchFilterPropertyValue(""),
    ),
  ]),
  new FilterSection("category-id", [
    new SearchFilterProperty("category-id", new SearchFilterPropertyValue("")),
  ]),
  new FilterSection("related-products-amount", [
    new RangeFilterProperty(
      "related-products-amount",
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
    ),
  ]),
];
