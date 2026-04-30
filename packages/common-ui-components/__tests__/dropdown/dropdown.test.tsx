import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";

type DropdownProps = ComponentProps<typeof Dropdown>;

describe("Dropdown", () => {
  const defaultItems = new Map([
    ["delivery", "Delivery"],
    ["payment", "Payment"],
    ["review", "Review"],
  ]);

  const getToggleButton = () => screen.getByRole("button") as HTMLButtonElement;

  const renderDropdown = (props: Partial<DropdownProps> = {}) => {
    const onKeySelectedMock = props.onKeySelected ?? jest.fn();

    const renderResult = render(
      <Dropdown
        title={props.title ?? "Default title"}
        items={props.items ?? defaultItems}
        onKeySelected={onKeySelectedMock}
        {...props}
      />,
    );

    return {
      ...renderResult,
      onKeySelected: onKeySelectedMock,
      button: getToggleButton(),
    };
  };

  const rerenderDropdown = (
    rerender: (ui: ReactElement) => void,
    props: Partial<DropdownProps> = {},
  ) => {
    const onKeySelected = props.onKeySelected ?? jest.fn();

    rerender(
      <Dropdown
        title={props.title ?? "Default title"}
        items={props.items ?? defaultItems}
        onKeySelected={onKeySelected}
        {...props}
      />,
    );

    return getToggleButton();
  };

  const expectSuggestedItemsHidden = (items: string[] = []) => {
    items.forEach((label) => {
      expect(
        screen.queryByRole("button", { name: label }),
      ).not.toBeInTheDocument();
    });
  };

  const expectSuggestedItemsVisible = (items: string[]) => {
    items.forEach((label) => {
      expect(screen.getByRole("button", { name: label })).toBeVisible();
    });
  };

  const expectAllSuggestedItemsVisible = () => {
    expectSuggestedItemsVisible(["Delivery", "Payment", "Review"]);
  };

  const expectAllSuggestedItemsHidden = () => {
    expectSuggestedItemsHidden(["Delivery", "Payment", "Review"]);
  };

  describe("rendering", () => {
    it("renders a visible toggle button with the title in uppercase", () => {
      const { button } = renderDropdown({ title: "Choose Step" });

      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
      expect(button).toHaveTextContent("CHOOSE STEP");
    });

    it("dropdown closed by default", () => {
      renderDropdown();

      expectAllSuggestedItemsHidden();
    });

    it("renders the selected item text when selectedKey is provided", () => {
      const { button } = renderDropdown({
        selectedKey: "payment",
      });

      expect(button).toHaveTextContent("PAYMENT");
    });

    it("falls back to the title when selectedKey does not match an item", () => {
      const { button } = renderDropdown({
        title: "Choose Step",
        selectedKey: "missing",
      });

      expect(button).toHaveTextContent("CHOOSE STEP");
    });

    it("updates the visible text after a rerender", () => {
      const { rerender } = renderDropdown({
        selectedKey: "delivery",
      });

      const button = rerenderDropdown(rerender, {
        selectedKey: "review",
      });

      expect(button).toHaveTextContent("REVIEW");
    });
  });

  describe("disabled state", () => {
    it("is enabled by default", () => {
      const { button } = renderDropdown();

      expect(button).toBeEnabled();
    });

    it("disables the toggle button when disabled is true", () => {
      const { button } = renderDropdown({
        disabled: true,
      });

      expect(button).toBeDisabled();
    });

    it("enables the toggle button when disabled is false", () => {
      const { button } = renderDropdown({
        disabled: false,
      });

      expect(button).not.toBeDisabled();
    });
  });

  describe("dropdown behavior", () => {
    it("renders items after the dropdown is opened", async () => {
      const user = userEvent.setup();
      const { button } = renderDropdown();

      await user.click(button);

      expectAllSuggestedItemsVisible();
    });

    it("toggles the dropdown when the toggle button is clicked", async () => {
      const user = userEvent.setup();
      const { button } = renderDropdown();

      await user.click(button);
      expectAllSuggestedItemsVisible();

      await user.click(button);
      expectAllSuggestedItemsHidden();
    });

    it("calls onKeySelected with the selected key", async () => {
      const user = userEvent.setup();

      const { button, onKeySelected } = renderDropdown();

      await user.click(button);
      await user.click(screen.getByRole("button", { name: "Payment" }));

      expect(onKeySelected).toHaveBeenCalledTimes(1);
      expect(onKeySelected).toHaveBeenCalledWith("payment");

      await user.click(button);
      await user.click(screen.getByRole("button", { name: "Review" }));

      expect(onKeySelected).toHaveBeenCalledTimes(2);
      expect(onKeySelected).toHaveBeenCalledWith("review");
    });

    it("closes the dropdown after selecting an item", async () => {
      const user = userEvent.setup();

      const { button, onKeySelected } = renderDropdown();

      await user.click(button);
      await user.click(screen.getByRole("button", { name: "Payment" }));

      expect(onKeySelected).toHaveBeenCalledTimes(1);
      expect(onKeySelected).toHaveBeenCalledWith("payment");

      expectAllSuggestedItemsHidden();
    });

    it("closes the dropdown after clicking outside", async () => {
      const user = userEvent.setup();
      const { button } = renderDropdown();

      await user.click(button);
      expect(screen.getByRole("button", { name: "Delivery" })).toBeVisible();

      await user.click(document.body);
      expectAllSuggestedItemsHidden();
    });

    it("does not open the dropdown when disabled", async () => {
      const user = userEvent.setup();
      const { button } = renderDropdown({
        disabled: true,
      });

      await user.click(button);

      expectAllSuggestedItemsHidden();
    });
  });
});
