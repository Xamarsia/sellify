import type { ReactNode } from "react";

export type TopLabelFormItemBaseProps = {
  label: string;
  required?: boolean;
  children: ReactNode;
};

/**
 * Renders a label above form control content.
 *
 * Required form items display an asterisk after the label.
 *
 * @param label - Text displayed above the form control
 * @param required - Whether the label displays a required indicator
 * @param children - Form control rendered below the label
 */
export default function TopLabelFormItemBase({
  label,
  required,
  children,
}: TopLabelFormItemBaseProps) {
  return (
    <div className="flex flex-col w-full">
      <label
        className={`label text-black m-1 capitalize ${required ? "after:content-['*'] after:ml-0.5" : ""}`}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
