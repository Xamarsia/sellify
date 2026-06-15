import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import TopLabelFormItemBase from "@sellify/common-ui-components/form/common/TopLabelFormItemBase";

type TopLabelFormItemBaseProps = ComponentProps<typeof TopLabelFormItemBase>;

describe("TopLabelFormItemBase", () => {
  const defaultProps = {
    label: "Product name",
    children: <input />,
  } satisfies TopLabelFormItemBaseProps;

  const renderFormItem = (props: Partial<TopLabelFormItemBaseProps> = {}) => {
    return render(<TopLabelFormItemBase {...defaultProps} {...props} />);
  };

  it("renders the label and children", () => {
    renderFormItem({ children: <input placeholder="Product name input" /> });

    expect(screen.getByText("Product name")).toBeVisible();
    expect(screen.getByPlaceholderText("Product name input")).toBeVisible();
  });

  it("renders different label styles for optional and required states", () => {
    const { rerender } = renderFormItem();
    const optionalStyle = screen.getByText("Product name").className;

    rerender(<TopLabelFormItemBase {...defaultProps} required />);
    const requiredStyle = screen.getByText("Product name").className;

    expect(optionalStyle).not.toBe(requiredStyle);
  });

  it("uses optional label style by default", () => {
    const { rerender } = renderFormItem();
    const implicitOptionalStyle = screen.getByText("Product name").className;

    rerender(<TopLabelFormItemBase {...defaultProps} required={false} />);
    const explicitOptionalStyle = screen.getByText("Product name").className;

    expect(implicitOptionalStyle).toBe(explicitOptionalStyle);
  });
});
