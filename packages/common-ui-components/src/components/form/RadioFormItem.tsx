import type { ComponentProps } from "react";

import Radio from "../input/Radio";
import LeftLabelFormItemBase from "./common/LeftLabelFormItemBase";
import type { LeftLabelFormItemBaseProps } from "./common/LeftLabelFormItemBase";

export type RadioFormItemProps = Omit<LeftLabelFormItemBaseProps, "children"> &
  ComponentProps<typeof Radio>;

/**
 * Renders a radio control followed by a label.
 *
 * Disabled state is applied to both the radio control and its label.
 *
 * @param label - Text displayed beside the radio control
 * @param disabled - Whether the radio control and label are disabled
 * @param radioProps - Remaining props forwarded to the radio control
 */
export default function RadioFormItem({
  disabled,
  label,
  ...radioProps
}: RadioFormItemProps) {
  return (
    <LeftLabelFormItemBase label={label} disabled={disabled}>
      <Radio disabled={disabled} {...radioProps} />
    </LeftLabelFormItemBase>
  );
}
