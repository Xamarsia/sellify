import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import RadioFormItem from "@sellify/common-ui-components/form/RadioFormItem";

type RadioFormItemProps = ComponentProps<typeof RadioFormItem>;

describe("RadioFormItem", () => {
  const defaultProps = {
    label: "Credit card",
    value: "card",
    onChange: jest.fn(),
  } satisfies RadioFormItemProps;

  const renderFormItem = (props: Partial<RadioFormItemProps> = {}) => {
    const resolvedProps = {
      ...defaultProps,
      onChange: jest.fn(),
      ...props,
    };
    const renderResult = render(<RadioFormItem {...resolvedProps} />);

    return {
      ...renderResult,
      radio: screen.getByRole("radio") as HTMLInputElement,
      onChangeMock: resolvedProps.onChange,
    };
  };

  it("renders the label and forwards radio props", () => {
    const { radio } = renderFormItem({ checked: true, readOnly: true });

    expect(screen.getByText("Credit card")).toBeVisible();
    expect(radio).toBeChecked();
    expect(radio).toHaveAttribute("readOnly");
    expect(radio).toHaveAttribute("value", "card");
  });

  it("propagates disabled to the label and radio", () => {
    const { radio, rerender } = renderFormItem();
    const enabledStyle = screen.getByText("Credit card").className;

    rerender(<RadioFormItem {...defaultProps} disabled />);
    const disabledStyle = screen.getByText("Credit card").className;

    expect(radio).toBeDisabled();
    expect(enabledStyle).not.toBe(disabledStyle);
  });

  it("forwards radio changes", async () => {
    const user = userEvent.setup();
    const { radio, onChangeMock } = renderFormItem();

    await user.click(radio);

    expect(onChangeMock).toHaveBeenCalledWith(true, "card");
  });
});
