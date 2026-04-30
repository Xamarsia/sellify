import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import DropdownItem from "@sellify/common-ui-components/dropdown/DropdownItem";

type DropdownItemProps = ComponentProps<typeof DropdownItem<string>>;

describe("DropdownItem", () => {
  const getButton = (label = "Option One") =>
    screen.getByRole("button", { name: label }) as HTMLButtonElement;

  const renderItem = (props: Partial<DropdownItemProps> = {}) => {
    const onItemSelectedMock = props.onItemSelected ?? jest.fn();
    const label = props.label ?? "Option One";

    const renderResult = render(
      <DropdownItem
        value={props.value ?? "option-1"}
        label={label}
        onItemSelected={onItemSelectedMock}
        {...props}
      />,
    );

    return {
      ...renderResult,
      onItemSelected: onItemSelectedMock,
      button: getButton(label),
    };
  };

  const rerenderItem = (
    rerender: (ui: ReactElement) => void,
    props: Partial<DropdownItemProps> = {},
  ) => {
    const onItemSelectedMock = props.onItemSelected ?? jest.fn();
    const label = props.label ?? "Option One";

    rerender(
      <DropdownItem
        value={props.value ?? "option-1"}
        label={label}
        onItemSelected={onItemSelectedMock}
        {...props}
      />,
    );

    return getButton(label);
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
      const { rerender, button } = renderItem({label: "First Option"});

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
      const { button, onItemSelected } = renderItem({
        value: "option-2",
        label: "Option Two"
      });

      await user.click(button);

      expect(onItemSelected).toHaveBeenCalledTimes(1);
      expect(onItemSelected).toHaveBeenCalledWith("option-2", "Option Two");
    });

    it("calls onClick three times after triple click", async () => {
      const user = userEvent.setup();
      const { button, onItemSelected } = renderItem();
      await user.tripleClick(button);

      expect(onItemSelected).toHaveBeenCalledTimes(3);
    });
  });
});
