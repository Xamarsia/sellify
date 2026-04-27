import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import ComboboxItem from "@sellify/common-ui-components/combobox/ComboboxItem";

type ComboboxItemProps = ComponentProps<typeof ComboboxItem>;

const renderComboboxItem = (props: Partial<ComboboxItemProps> = {}) => {
  const renderResult = render(
    <ComboboxItem
      value={props.value ?? 1}
      label={props.label ?? "Selected Item"}
      onRemove={props.onRemove ?? jest.fn()}
      {...props}
    />,
  );

  return renderResult;
};

describe("ComboboxItem", () => {
  describe("rendering", () => {
    it("renders item label", () => {
      const label = "Selected Item";

      renderComboboxItem({ label: label });

      const comboboxItem = screen.getByText(label);

      expect(comboboxItem).toBeInTheDocument();
      expect(comboboxItem).toBeVisible();
    });

    it("renders remove button with an icon when enabled", () => {
      renderComboboxItem();

      const button = screen.getByRole("button");

      expect(button).toBeVisible();
      expect(button).toBeEnabled();
      expect(button).toHaveAttribute("type", "button");
      expect(button.querySelector("svg")).toBeInTheDocument();
    });

    it("does not render remove button when disabled", () => {
      renderComboboxItem({ disabled: true });

      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });
  });

  describe("remove click handling", () => {
    it("calls onRemove with a string value and label", async () => {
      const user = userEvent.setup();
      const value = "value";
      const label = "Item";
      const onRemoveMock = jest.fn();

      renderComboboxItem({
        value: value,
        label: label,
        onRemove: onRemoveMock,
      });

      await user.click(screen.getByRole("button"));

      expect(onRemoveMock).toHaveBeenCalledTimes(1);
      expect(onRemoveMock).toHaveBeenCalledWith(value, label);
    });

    it("calls onRemove with a number value and label", async () => {
      const user = userEvent.setup();
      const value = 23443;
      const label = "Item";
      const onRemoveMock = jest.fn();

      renderComboboxItem({
        value: value,
        label: label,
        onRemove: onRemoveMock,
      });

      await user.click(screen.getByRole("button"));

      expect(onRemoveMock).toHaveBeenCalledTimes(1);
      expect(onRemoveMock).toHaveBeenCalledWith(value, label);
    });

    it("does not call onRemove when the item is disabled", () => {
      const onRemoveMock = jest.fn();

      renderComboboxItem({
        disabled: true,
        onRemove: onRemoveMock,
      });

      expect(screen.queryByRole("button")).not.toBeInTheDocument();
      expect(onRemoveMock).not.toHaveBeenCalled();
    });
  });
});
