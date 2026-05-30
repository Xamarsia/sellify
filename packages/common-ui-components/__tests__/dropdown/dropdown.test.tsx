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
  ]) satisfies DropdownProps["items"];

  const defaultProps = {
    title: "Default title",
    items: defaultItems,
  } satisfies Pick<DropdownProps, "title" | "items">;

  const buildProps = (props: Partial<DropdownProps> = {}): DropdownProps => ({
    ...defaultProps,
    onKeySelected: jest.fn(),
    ...props,
  });

  const getToggleButton = () => screen.getByRole("button") as HTMLButtonElement;

  const renderDropdown = (props: Partial<DropdownProps> = {}) => {
    const resolvedProps = buildProps(props);
    const renderResult = render(<Dropdown {...resolvedProps} />);

    return {
      ...renderResult,
      onKeySelectedMock: resolvedProps.onKeySelected,
      button: getToggleButton(),
    };
  };

  const rerenderDropdown = (
    rerender: (ui: ReactElement) => void,
    props: Partial<DropdownProps> = {},
  ) => {
    const resolvedProps = buildProps(props);

    rerender(<Dropdown {...resolvedProps} />);

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
    it("renders a visible toggle button with  title in uppercase", () => {
      const { button } = renderDropdown({ title: "Choose Step" });

      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
      expect(button).toHaveTextContent("CHOOSE STEP");
    });

    it("dropdown closed by default", () => {
      renderDropdown();

      expectAllSuggestedItemsHidden();
    });

    it("renders selected item text when selectedKey is provided", () => {
      const { button } = renderDropdown({
        selectedKey: "payment",
      });

      expect(button).toHaveTextContent("PAYMENT");
    });

    it("falls back to title when selectedKey does not match an item", () => {
      const { button } = renderDropdown({
        title: "Choose Step",
        selectedKey: "missing",
      });

      expect(button).toHaveTextContent("CHOOSE STEP");
    });

    it("updates visible text after a rerender", () => {
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

    it("disables toggle button when disabled is true", () => {
      const { button } = renderDropdown({
        disabled: true,
      });

      expect(button).toBeDisabled();
    });

    it("enables toggle button when disabled is false", () => {
      const { button } = renderDropdown({
        disabled: false,
      });

      expect(button).not.toBeDisabled();
    });
  });

  describe("dropdown behavior", () => {
    it("renders items after dropdown is opened", async () => {
      const user = userEvent.setup();
      const { button } = renderDropdown();

      await user.click(button);

      expectAllSuggestedItemsVisible();
    });

    it("toggles dropdown when toggle button is clicked", async () => {
      const user = userEvent.setup();
      const { button } = renderDropdown();

      await user.click(button);
      expectAllSuggestedItemsVisible();

      await user.click(button);
      expectAllSuggestedItemsHidden();
    });

    it("calls onKeySelected with selected key", async () => {
      const user = userEvent.setup();

      const { button, onKeySelectedMock } = renderDropdown();

      await user.click(button);
      await user.click(screen.getByRole("button", { name: "Payment" }));

      expect(onKeySelectedMock).toHaveBeenCalledTimes(1);
      expect(onKeySelectedMock).toHaveBeenCalledWith("payment");

      await user.click(button);
      await user.click(screen.getByRole("button", { name: "Review" }));

      expect(onKeySelectedMock).toHaveBeenCalledTimes(2);
      expect(onKeySelectedMock).toHaveBeenCalledWith("review");
    });

    it("closes dropdown after selecting an item", async () => {
      const user = userEvent.setup();

      const { button, onKeySelectedMock } = renderDropdown();

      await user.click(button);
      await user.click(screen.getByRole("button", { name: "Payment" }));

      expect(onKeySelectedMock).toHaveBeenCalledTimes(1);
      expect(onKeySelectedMock).toHaveBeenCalledWith("payment");

      expectAllSuggestedItemsHidden();
    });

    it("closes  dropdown after clicking outside", async () => {
      const user = userEvent.setup();
      const { button } = renderDropdown();

      await user.click(button);
      expect(screen.getByRole("button", { name: "Delivery" })).toBeVisible();

      await user.click(document.body);
      expectAllSuggestedItemsHidden();
    });

    it("does not open  dropdown when disabled", async () => {
      const user = userEvent.setup();
      const { button } = renderDropdown({
        disabled: true,
      });

      await user.click(button);

      expectAllSuggestedItemsHidden();
    });
  });
});
