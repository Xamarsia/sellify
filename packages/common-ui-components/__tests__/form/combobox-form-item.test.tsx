import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import ComboboxFormItem from "@sellify/common-ui-components/form/ComboboxFormItem";

type ComboboxFormItemProps = ComponentProps<typeof ComboboxFormItem<number>>;

describe("ComboboxFormItem", () => {
  const defaultProps = {
    label: "Category",
    items: new Map<number, string>([
      [1, "Clothing"],
      [2, "Shoes"],
    ]),
    onItemSelected: jest.fn(),
  } satisfies ComboboxFormItemProps;

  const renderFormItem = (props: Partial<ComboboxFormItemProps> = {}) => {
    const resolvedProps = {
      ...defaultProps,
      onItemSelected: jest.fn(),
      ...props,
    };
    const renderResult = render(<ComboboxFormItem {...resolvedProps} />);

    return {
      ...renderResult,
      input: screen.getByRole("textbox") as HTMLInputElement,
      onItemSelectedMock: resolvedProps.onItemSelected,
    };
  };

  it("renders the label and forwards combobox props", () => {
    const { input } = renderFormItem({ value: "Clothing", disabled: true });

    expect(screen.getByText("Category")).toBeVisible();
    expect(screen.queryByText("Shoes")).not.toBeInTheDocument();
    expect(input).toHaveValue("Clothing");
    expect(input).toBeDisabled();
  });

  it("propagates required to the label and combobox", () => {
    const { input, rerender } = renderFormItem();
    const optionalStyle = screen.getByText("Category").className;

    rerender(<ComboboxFormItem {...defaultProps} required />);
    const requiredStyle = screen.getByText("Category").className;

    expect(input).toBeRequired();
    expect(optionalStyle).not.toBe(requiredStyle);
  });

  it("forwards combobox selections", async () => {
    const user = userEvent.setup();
    const { input, onItemSelectedMock } = renderFormItem();

    await user.click(input);
    await user.click(screen.getByRole("button", { name: "Shoes" }));

    expect(onItemSelectedMock).toHaveBeenCalledWith(2, "Shoes");
  });
});
