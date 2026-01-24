import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import {
  RangeFilterProperty,
  InputFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import {
  RangeFilterPropertyValue,
  InputFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";

export const RolesFilterSections: Array<FilterSection> = [
  new FilterSection("role-title", [
    new InputFilterProperty(
      "role-title",
      new InputFilterPropertyValue(""),
      "Role Title",
    ),
  ]),
  new FilterSection("related-users-amount", [
    new RangeFilterProperty(
      "related-users-amount",
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
      new RangeFilterPropertyValue({ min: 0, max: 344 }),
    ),
  ]),
];
