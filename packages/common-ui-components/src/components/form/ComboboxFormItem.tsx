import Combobox from "../combobox/Combobox";
import type { ComboboxProps } from "../combobox/Combobox";
import TopLabelFormItemBase from "./common/TopLabelFormItemBase";
import type { TopLabelFormItemBaseProps } from "./common/TopLabelFormItemBase";

export type ComboboxFormItemProps<T> = Omit<
  TopLabelFormItemBaseProps,
  "children"
> &
  ComboboxProps<T>;

/**
 * Renders a label above a combobox.
 *
 * Required state is applied to both the label and combobox.
 *
 * @typeParam T - Type used for combobox item keys
 * @param label - Text displayed above the combobox
 * @param required - Whether the label and combobox are required
 * @param comboboxProps - Remaining props forwarded to the combobox
 */
export default function ComboboxFormItem<T>({
  label,
  required,
  ...comboboxProps
}: ComboboxFormItemProps<T>) {
  return (
    <TopLabelFormItemBase label={label} required={required}>
      <Combobox required={required} {...comboboxProps} />
    </TopLabelFormItemBase>
  );
}
