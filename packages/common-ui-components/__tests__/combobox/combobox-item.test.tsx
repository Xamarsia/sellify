import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import ComboboxItem from "@sellify/common-ui-components/combobox/ComboboxItem";

type ComboboxItemProps = ComponentProps<typeof ComboboxItem>;

const defaultProps = {
  value: 1,
  label: "Selected Item",
} satisfies Pick<ComboboxItemProps, "value" | "label">;

const buildProps = (
  props: Partial<ComboboxItemProps> = {},
): ComboboxItemProps => ({
  ...defaultProps,
  onRemove: jest.fn(),
  ...props,
});

const renderComboboxItem = (props: Partial<ComboboxItemProps> = {}) => {
  const resolvedProps = buildProps(props);
  const renderResult = render(<ComboboxItem {...resolvedProps} />);

  return {
    ...renderResult,
    onRemoveMock: resolvedProps.onRemove,
  };
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

      const { onRemoveMock } = renderComboboxItem({
        value: value,
        label: label,
      });

      await user.click(screen.getByRole("button"));

      expect(onRemoveMock).toHaveBeenCalledTimes(1);
      expect(onRemoveMock).toHaveBeenCalledWith(value, label);
    });

    it("calls onRemove with a number value and label", async () => {
      const user = userEvent.setup();
      const value = 23443;
      const label = "Item";

      const { onRemoveMock } = renderComboboxItem({
        value: value,
        label: label,
      });

      await user.click(screen.getByRole("button"));

      expect(onRemoveMock).toHaveBeenCalledTimes(1);
      expect(onRemoveMock).toHaveBeenCalledWith(value, label);
    });

    it("does not call onRemove when the item is disabled", () => {
      const { onRemoveMock } = renderComboboxItem({
        disabled: true,
      });

      expect(screen.queryByRole("button")).not.toBeInTheDocument();
      expect(onRemoveMock).not.toHaveBeenCalled();
    });
  });
});
