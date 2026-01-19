import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import { CheckboxFilterProperty } from "../../../../packages/common-ui-components/src/filter/common/Property";
import { CheckboxFilterPropertyValue } from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";

// TODO Add "Rank by Role"
export const AdminFilterSections: Array<FilterSection> = [
  new FilterSection("status", [
    new CheckboxFilterProperty(
      "active",
      new CheckboxFilterPropertyValue(false),
    ),
    new CheckboxFilterProperty(
      "invited",
      new CheckboxFilterPropertyValue(false),
    ),
    new CheckboxFilterProperty(
      "disabled",
      new CheckboxFilterPropertyValue(false),
    ),
  ]),
];
