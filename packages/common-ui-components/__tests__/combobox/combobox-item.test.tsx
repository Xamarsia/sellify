import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import ComboboxItem from "@sellify/common-ui-components/combobox/ComboboxItem";

type ComboboxItemProps<T> = ComponentProps<typeof ComboboxItem<T>>;

type ComboboxItemRenderResult = {
  rerender: (ui: ReactElement) => void;
};

const renderComboboxItem = <T,>(
  value: T,
  label = "Selected Item",
  props: Partial<ComboboxItemProps<T>> = {},
): ComboboxItemRenderResult => {
  const { rerender } = render(
    <ComboboxItem
      value={value}
      label={label}
      {...props}
      onRemove={props.onRemove ?? jest.fn()}
    />,
  );

  return { rerender };
};

describe("ComboboxItem", () => {
  describe("rendering", () => {
    it("renders item label", () => {
      const label = "Selected Item";

      renderComboboxItem(1, label);

      const comboboxItem = screen.getByText(label);

      expect(comboboxItem).toBeInTheDocument();
      expect(comboboxItem).toBeVisible();
    });

    it("renders remove button with an icon when enabled", () => {
      renderComboboxItem(1);

      const button = screen.getByRole("button");

      expect(button).toBeVisible();
      expect(button).toBeEnabled();
      expect(button).toHaveAttribute("type", "button");
      expect(button.querySelector("svg")).toBeInTheDocument();
    });

    it("does not render remove button when disabled", () => {
      renderComboboxItem(1, "Disabled Item", { disabled: true });

      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });
  });

  describe("remove click handling", () => {
    it("calls onRemove with a string value and label", async () => {
      const user = userEvent.setup();
      const value = "value";
      const label = "Item";
      const onRemoveMock = jest.fn();

      renderComboboxItem(value, label, { onRemove: onRemoveMock });

      await user.click(screen.getByRole("button"));

      expect(onRemoveMock).toHaveBeenCalledTimes(1);
      expect(onRemoveMock).toHaveBeenCalledWith(value, label);
    });

    it("calls onRemove with a number value and label", async () => {
      const user = userEvent.setup();
      const value = 23443;
      const label = "Item";
      const onRemoveMock = jest.fn();

      renderComboboxItem(value, label, { onRemove: onRemoveMock });

      await user.click(screen.getByRole("button"));

      expect(onRemoveMock).toHaveBeenCalledTimes(1);
      expect(onRemoveMock).toHaveBeenCalledWith(value, label);
    });

    it("does not call onRemove when the item is disabled", () => {
      const onRemoveMock = jest.fn();

      renderComboboxItem(1, "Disabled Item", {
        disabled: true,
        onRemove: onRemoveMock,
      });

      expect(screen.queryByRole("button")).not.toBeInTheDocument();
      expect(onRemoveMock).not.toHaveBeenCalled();
    });
  });
});
