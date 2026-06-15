import type { ComponentProps } from "react";

import Input from "../input/Input";
import TopLabelFormItemBase from "./common/TopLabelFormItemBase";
import type { TopLabelFormItemBaseProps } from "./common/TopLabelFormItemBase";

export type InputFormItemProps = Omit<TopLabelFormItemBaseProps, "children"> &
  ComponentProps<typeof Input>;

/**
 * Renders a label above an input.
 *
 * Required state is applied to both the label and input.
 *
 * @param label - Text displayed above the input
 * @param required - Whether the label and input are required
 * @param inputProps - Remaining props forwarded to the input
 */
export default function InputFormItem({
  label,
  required,
  ...inputProps
}: InputFormItemProps) {
  return (
    <TopLabelFormItemBase label={label} required={required}>
      <Input required={required} {...inputProps} />
    </TopLabelFormItemBase>
  );
}
