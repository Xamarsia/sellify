import MultiSelectionCombobox from "../combobox/MultiSelectionCombobox";
import type { MultiSelectionComboboxProps } from "../combobox/MultiSelectionCombobox";
import TopLabelFormItemBase from "./common/TopLabelFormItemBase";
import type { TopLabelFormItemBaseProps } from "./common/TopLabelFormItemBase";

export type MultiSelectionComboboxFormItemProps<T extends string | number> =
  Omit<TopLabelFormItemBaseProps, "children"> & MultiSelectionComboboxProps<T>;

/**
 * Renders a label above a multi-selection combobox.
 *
 * Required state is applied to both the label and multi-selection combobox.
 *
 * @typeParam T - String or number type used for combobox item keys
 * @param label - Text displayed above the multi-selection combobox
 * @param required - Whether the label and multi-selection combobox are required
 * @param multiSelectionComboboxProps - Remaining props forwarded to the multi-selection combobox
 */
export default function MultiSelectionComboboxFormItem<
  T extends string | number,
>({
  label,
  required,
  ...multiSelectionComboboxProps
}: MultiSelectionComboboxFormItemProps<T>) {
  return (
    <TopLabelFormItemBase label={label} required={required}>
      <MultiSelectionCombobox
        required={required}
        {...multiSelectionComboboxProps}
      />
    </TopLabelFormItemBase>
  );
}
