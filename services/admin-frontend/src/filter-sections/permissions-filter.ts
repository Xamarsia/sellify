import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import {
  RangeFilterProperty,
  InputFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import {
  RangeFilterPropertyValue,
  InputFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";

export const PermissionsFilterSections: Array<FilterSection> = [
  new FilterSection("permission-title", [
    new InputFilterProperty(
      "permission-title",
      new InputFilterPropertyValue(""),
      "Permission Title",
    ),
  ]),
  new FilterSection("related-roles-amount", [
    new RangeFilterProperty(
      "related-roles-amount",
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
    ),
  ]),
];
