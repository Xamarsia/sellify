import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import DropdownItem from "@sellify/common-ui-components/dropdown/DropdownItem";

type DropdownItemProps = ComponentProps<typeof DropdownItem<string>>;

describe("DropdownItem", () => {
  const getButton = (label = "Option One") =>
    screen.getByRole("button", { name: label }) as HTMLButtonElement;

  const defaultProps = {
    value: "option-1",
    label: "Option One",
  } satisfies Pick<DropdownItemProps, "value" | "label">;

  const buildProps = (
    props: Partial<DropdownItemProps> = {},
  ): DropdownItemProps => ({
    ...defaultProps,
    onItemSelected: jest.fn(),
    ...props,
  });

  const renderItem = (props: Partial<DropdownItemProps> = {}) => {
    const resolvedProps = buildProps(props);
    const renderResult = render(<DropdownItem {...resolvedProps} />);

    return {
      ...renderResult,
      onItemSelectedMock: resolvedProps.onItemSelected,
      button: getButton(resolvedProps.label),
    };
  };

  const rerenderItem = (
    rerender: (ui: ReactElement) => void,
    props: Partial<DropdownItemProps> = {},
  ) => {
    const resolvedProps = buildProps(props);

    rerender(<DropdownItem {...resolvedProps} />);

    return getButton(resolvedProps.label);
  };

  describe("rendering", () => {
    it("renders a visible button with the provided label", () => {
      const { button } = renderItem({
        label: "Select me",
      });

      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
      expect(button).toHaveTextContent("Select me");
    });

    it("updates the label after rerender", () => {
      const { rerender, button } = renderItem({ label: "First Option" });

      expect(button).toHaveTextContent("First Option");

      const rerenderedButton = rerenderItem(rerender, {
        label: "Updated Option",
      });

      expect(rerenderedButton).toBeVisible();
      expect(rerenderedButton).toHaveTextContent("Updated Option");
    });
  });

  describe("selection", () => {
    it("autofocuses the item when selected is true", () => {
      const { button } = renderItem({
        selected: true,
      });

      expect(button).toHaveFocus();
    });

    it("does not autofocus the item by default", () => {
      const { button } = renderItem();

      expect(button).not.toHaveFocus();
    });
  });

  describe("click handling", () => {
    it("calls onItemSelected with the value and label after single click", async () => {
      const user = userEvent.setup();
      const { button, onItemSelectedMock } = renderItem({
        value: "option-2",
        label: "Option Two",
      });

      await user.click(button);

      expect(onItemSelectedMock).toHaveBeenCalledTimes(1);
      expect(onItemSelectedMock).toHaveBeenCalledWith("option-2", "Option Two");
    });

    it("calls onClick three times after triple click", async () => {
      const user = userEvent.setup();
      const { button, onItemSelectedMock } = renderItem();
      await user.tripleClick(button);

      expect(onItemSelectedMock).toHaveBeenCalledTimes(3);
    });
  });
});
