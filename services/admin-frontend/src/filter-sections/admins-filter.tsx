import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import { CheckboxFilterProperty, ComboboxFilterProperty } from "../../../../packages/common-ui-components/src/filter/common/Property";
import { CheckboxFilterPropertyValue, ComboboxFilterPropertyValue } from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";
import { getRolePreviewsComboboxItems } from "common/actions/roles-actions";

const roles: Map<string, string> = getRolePreviewsComboboxItems();

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
  new FilterSection("Role", [
    new ComboboxFilterProperty(
      "Role",
      roles,
      new ComboboxFilterPropertyValue(""),
    ),
  ]),
];
