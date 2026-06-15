import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import CheckboxFormItem from "@sellify/common-ui-components/form/CheckboxFormItem";

type CheckboxFormItemProps = ComponentProps<typeof CheckboxFormItem>;

describe("CheckboxFormItem", () => {
  const defaultProps = {
    label: "Use as default",
    value: "default",
    checked: false,
    onChange: jest.fn(),
  } satisfies CheckboxFormItemProps;

  const renderFormItem = (props: Partial<CheckboxFormItemProps> = {}) => {
    const resolvedProps = {
      ...defaultProps,
      onChange: jest.fn(),
      ...props,
    };
    const renderResult = render(<CheckboxFormItem {...resolvedProps} />);

    return {
      ...renderResult,
      checkbox: screen.getByRole("checkbox") as HTMLInputElement,
      onChangeMock: resolvedProps.onChange,
    };
  };

  it("renders the label and forwards checkbox props", () => {
    const { checkbox } = renderFormItem({ checked: true, readOnly: true });

    expect(screen.getByText("Use as default")).toBeVisible();
    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveAttribute("readOnly");
    expect(checkbox).toHaveAttribute("value", "default");
  });

  it("propagates disabled to the label and checkbox", () => {
    const { checkbox, rerender } = renderFormItem();
    const enabledStyle = screen.getByText("Use as default").className;

    rerender(<CheckboxFormItem {...defaultProps} disabled />);
    const disabledStyle = screen.getByText("Use as default").className;

    expect(checkbox).toBeDisabled();
    expect(enabledStyle).not.toBe(disabledStyle);
  });

  it("forwards checkbox changes", async () => {
    const user = userEvent.setup();
    const { checkbox, onChangeMock } = renderFormItem();

    await user.click(checkbox);

    expect(onChangeMock).toHaveBeenCalledWith(true, "default");
  });
});
