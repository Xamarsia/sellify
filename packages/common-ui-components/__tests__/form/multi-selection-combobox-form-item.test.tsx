import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";

import { ComponentProps } from "react";

import MultiSelectionComboboxFormItem from "@sellify/common-ui-components/form/MultiSelectionComboboxFormItem";

type MultiSelectionComboboxFormItemProps = ComponentProps<
  typeof MultiSelectionComboboxFormItem<number>
>;

describe("MultiSelectionComboboxFormItem", () => {
  const defaultProps = {
    label: "Permissions",
    items: new Map<number, string>([
      [1, "Create product"],
      [2, "Edit product"],
    ]),
    selectedItems: new Map<number, string>(),
    onItemSelected: jest.fn(),
    onItemRemoved: jest.fn(),
  } satisfies MultiSelectionComboboxFormItemProps;

  const renderFormItem = (
    props: Partial<MultiSelectionComboboxFormItemProps> = {},
  ) => {
    const resolvedProps = {
      ...defaultProps,
      onItemSelected: jest.fn(),
      onItemRemoved: jest.fn(),
      ...props,
    };
    const renderResult = render(
      <MultiSelectionComboboxFormItem {...resolvedProps} />,
    );

    return {
      ...renderResult,
      input: screen.getByRole("textbox") as HTMLInputElement,
      onItemSelectedMock: resolvedProps.onItemSelected,
      onItemRemovedMock: resolvedProps.onItemRemoved,
    };
  };

  it("renders the label and forwards selected items", () => {
    renderFormItem({
      selectedItems: new Map([[1, "Create product"]]),
    });

    expect(screen.getByText("Permissions")).toBeVisible();
    expect(screen.getByText("Create product")).toBeVisible();
    expect(screen.queryByText("Edit product")).not.toBeInTheDocument();
  });

  it("propagates required to the label and combobox", () => {
    const { input, rerender } = renderFormItem();
    const optionalStyle = screen.getByText("Permissions").className;

    rerender(<MultiSelectionComboboxFormItem {...defaultProps} required />);
    const requiredStyle = screen.getByText("Permissions").className;

    expect(input).toBeRequired();
    expect(optionalStyle).not.toBe(requiredStyle);
  });

  it("forwards combobox selections", async () => {
    const user = userEvent.setup();
    const { input, onItemSelectedMock } = renderFormItem();

    await user.click(input);
    await user.click(screen.getByRole("button", { name: "Edit product" }));

    expect(onItemSelectedMock).toHaveBeenCalledWith(2, "Edit product");
  });

  it("forwards selected item removals", async () => {
    const user = userEvent.setup();
    const { onItemRemovedMock } = renderFormItem({
      selectedItems: new Map([[1, "Create product"]]),
    });

    await user.click(
      within(
        screen.getByText("Create product").parentElement as HTMLElement,
      ).getByRole("button"),
    );

    expect(onItemRemovedMock).toHaveBeenCalledWith(1, "Create product");
  });
});
