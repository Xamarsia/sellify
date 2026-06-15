import type { ComponentProps } from "react";

import Textarea from "../input/Textarea";
import TopLabelFormItemBase from "./common/TopLabelFormItemBase";
import type { TopLabelFormItemBaseProps } from "./common/TopLabelFormItemBase";

export type TextareaFormItemProps = Omit<
  TopLabelFormItemBaseProps,
  "children"
> &
  ComponentProps<typeof Textarea>;

/**
 * Renders a label above a textarea.
 *
 * Required state is applied to both the label and textarea.
 *
 * @param label - Text displayed above the textarea
 * @param required - Whether the label and textarea are required
 * @param textareaProps - Remaining props forwarded to the textarea
 */
export default function TextareaFormItem({
  label,
  required,
  ...textareaProps
}: TextareaFormItemProps) {
  return (
    <TopLabelFormItemBase label={label} required={required}>
      <Textarea required={required} {...textareaProps} />
    </TopLabelFormItemBase>
  );
}
