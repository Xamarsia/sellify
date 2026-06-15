import type { ComponentProps } from "react";

import Checkbox from "../input/Checkbox";
import LeftLabelFormItemBase from "./common/LeftLabelFormItemBase";
import type { LeftLabelFormItemBaseProps } from "./common/LeftLabelFormItemBase";

export type CheckboxFormItemProps = Omit<
  LeftLabelFormItemBaseProps,
  "children"
> &
  ComponentProps<typeof Checkbox>;

/**
 * Renders a checkbox followed by a label.
 *
 * Disabled state is applied to both the checkbox and its label.
 *
 * @param label - Text displayed beside the checkbox
 * @param disabled - Whether the checkbox and label are disabled
 * @param checkboxProps - Remaining props forwarded to the checkbox
 */
export default function CheckboxFormItem({
  disabled,
  label,
  ...checkboxProps
}: CheckboxFormItemProps) {
  return (
    <LeftLabelFormItemBase label={label} disabled={disabled}>
      <Checkbox disabled={disabled} {...checkboxProps} />
    </LeftLabelFormItemBase>
  );
}
