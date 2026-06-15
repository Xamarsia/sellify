import type { ComponentProps } from "react";

import MediaInput from "../input/media-input/MediaInput";
import TopLabelFormItemBase from "./common/TopLabelFormItemBase";
import type { TopLabelFormItemBaseProps } from "./common/TopLabelFormItemBase";

export type MediaInputFormItemProps = Omit<
  TopLabelFormItemBaseProps,
  "children"
> &
  ComponentProps<typeof MediaInput>;

/**
 * Renders a label above a media input.
 *
 * Required state affects the label because the media input has no native
 * required state.
 *
 * @param label - Text displayed above the media input
 * @param required - Whether the label displays a required indicator
 * @param mediaInputProps - Remaining props forwarded to the media input
 */
export default function MediaInputFormItem({
  label,
  required,
  ...mediaInputProps
}: MediaInputFormItemProps) {
  return (
    <TopLabelFormItemBase label={label} required={required}>
      <MediaInput {...mediaInputProps} />
    </TopLabelFormItemBase>
  );
}
