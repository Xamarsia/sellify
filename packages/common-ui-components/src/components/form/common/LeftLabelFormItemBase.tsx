import type { ReactNode } from "react";

export type LeftLabelFormItemBaseProps = {
  label: string;
  disabled?: boolean;
  children: ReactNode;
};

/**
 * Renders form control content followed by a label.
 *
 * The label uses disabled styling when the wrapped control is disabled.
 *
 * @param label - Text displayed beside the form control
 * @param disabled - Whether the label uses disabled styling
 * @param children - Form control rendered before the label
 */
export default function LeftLabelFormItemBase({
  label,
  disabled,
  children,
}: LeftLabelFormItemBaseProps) {
  return (
    <div className="flex gap-4 group">
      {children}
      <label className={`body ${disabled ? "text-disabled" : "text-black"}`}>
        {label}
      </label>
    </div>
  );
}
