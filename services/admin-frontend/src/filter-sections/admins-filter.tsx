import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import {
  CheckboxFilterProperty,
  MultiSelectionComboboxFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import {
  CheckboxFilterPropertyValue,
  MultiSelectionComboboxFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";
import { getRolePreviewsComboboxItems } from "common/actions/roles-actions";

const roles: Map<number, string> = getRolePreviewsComboboxItems();

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
  new FilterSection("role", [
    new MultiSelectionComboboxFilterProperty<number>(
      "role",
      new MultiSelectionComboboxFilterPropertyValue(roles),
    ),
  ]),
];
