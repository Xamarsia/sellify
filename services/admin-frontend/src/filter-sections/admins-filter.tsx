import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";
import {
  CheckboxFilterProperty,
  MultiSelectionComboboxFilterProperty,
  SearchFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import {
  CheckboxFilterPropertyValue,
  MultiSelectionComboboxFilterPropertyValue,
  SearchFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";
import { getRolePreviewsComboboxItems } from "actions/roles-actions";

const roles: Map<number, string> = getRolePreviewsComboboxItems();

export const AdminFilterSections: Array<FilterSection> = [
  new FilterSection("admin-name", [
    new SearchFilterProperty("admin-name", new SearchFilterPropertyValue("")),
  ]),
  new FilterSection("admin-id", [
    new SearchFilterProperty("admin-id", new SearchFilterPropertyValue("")),
  ]),
  new FilterSection("role", [
    new MultiSelectionComboboxFilterProperty<number>(
      "role",
      new MultiSelectionComboboxFilterPropertyValue(roles),
    ),
  ]),
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

export const AdminPreviewFilterSections: Array<FilterSection> = [
  new FilterSection("admin-name", [
    new SearchFilterProperty("admin-name", new SearchFilterPropertyValue("")),
  ]),
  new FilterSection("admin-id", [
    new SearchFilterProperty("admin-id", new SearchFilterPropertyValue("")),
  ]),
];
