import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import LeftLabelFormItemBase from "@sellify/common-ui-components/form/common/LeftLabelFormItemBase";

type LeftLabelFormItemBaseProps = ComponentProps<typeof LeftLabelFormItemBase>;

describe("LeftLabelFormItemBase", () => {
  const defaultProps = {
    label: "Use as default",
    children: <input type="checkbox" />,
  } satisfies LeftLabelFormItemBaseProps;

  const renderFormItem = (props: Partial<LeftLabelFormItemBaseProps> = {}) => {
    return render(<LeftLabelFormItemBase {...defaultProps} {...props} />);
  };

  it("renders the label and children", () => {
    renderFormItem();

    expect(screen.getByText("Use as default")).toBeVisible();
    expect(screen.getByRole("checkbox")).toBeVisible();
  });

  it("renders different label styles for enabled and disabled states", () => {
    const { rerender } = renderFormItem();
    const enabledStyle = screen.getByText("Use as default").className;

    rerender(<LeftLabelFormItemBase {...defaultProps} disabled />);
    const disabledStyle = screen.getByText("Use as default").className;

    expect(enabledStyle).not.toBe(disabledStyle);
  });

  it("uses enabled label style by default", () => {
    const { rerender } = renderFormItem();
    const implicitEnabledStyle = screen.getByText("Use as default").className;

    rerender(<LeftLabelFormItemBase {...defaultProps} disabled={false} />);
    const explicitEnabledStyle = screen.getByText("Use as default").className;

    expect(implicitEnabledStyle).toBe(explicitEnabledStyle);
  });
});
