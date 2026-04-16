import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import Combobox from "@sellify/common-ui-components/combobox/Combobox";

type ComboboxProps = ComponentProps<typeof Combobox<number>>;

type ComboboxRenderResult = {
  rerender: (ui: ReactElement) => void;
};

describe("Combobox", () => {
  const fruits = new Map<number, string>([
    [1, "Apple"],
    [2, "Banana"],
    [3, "Orange"],
  ]);

  const getInput = () => screen.getByRole("textbox") as HTMLInputElement;

  const getToggleButton = () =>
    screen.getAllByRole("button")[0] as HTMLButtonElement;

  const expectSuggestedItemsVisible = (items: string[]) => {
    items.forEach((label) => {
      expect(screen.getByRole("button", { name: label })).toBeVisible();
    });
  };

  const expectSuggestedItemsHidden = (items: string[] = []) => {
    items.forEach((label) => {
      expect(
        screen.queryByRole("button", { name: label }),
      ).not.toBeInTheDocument();
    });
  };

  const renderCombobox = (
    props: Partial<ComboboxProps> = {},
  ): ComboboxRenderResult => {
    const { rerender } = render(
      <Combobox items={fruits} onItemSelected={jest.fn()} {...props} />,
    );

    return {
      rerender,
    };
  };

  const expectAllItemsVisible = () => {
    expectSuggestedItemsVisible(["Apple", "Banana", "Orange"]);
  };

  describe("rendering", () => {
    it("renders input with default placeholder", () => {
      renderCombobox();

      const input = getInput();

      expect(input).toBeInTheDocument();
      expect(input).toBeVisible();
      expect(input).toHaveAttribute("placeholder", "--");
    });

    it("renders an empty input by default", () => {
      renderCombobox();

      expect(getInput()).toHaveValue("");
    });

    it("renders initial value", () => {
      renderCombobox({ value: "Banana" });

      expect(getInput()).toHaveValue("Banana");
    });

    it("updates input when controlled value changes", () => {
      const { rerender } = renderCombobox({ value: "Apple" });

      expect(getInput()).toHaveValue("Apple");

      rerender(
        <Combobox items={fruits} onItemSelected={jest.fn()} value="Orange" />,
      );

      expect(getInput()).toHaveValue("Orange");
    });

    it("renders a toggle button with an icon", () => {
      renderCombobox();

      const toggleButton = getToggleButton();

      expect(toggleButton).toBeInTheDocument();
      expect(toggleButton).toHaveAttribute("type", "button");
      expect(toggleButton.querySelector("svg")).toBeInTheDocument();
    });

    it("dropdown closed by default", () => {
      renderCombobox();

      expectSuggestedItemsHidden(["Apple", "Banana", "Orange"]);
    });
  });

  describe("dropdown behavior", () => {
    it("opens dropdown on input focus and shows all items", async () => {
      const user = userEvent.setup();
      renderCombobox();

      await user.click(getInput());

      expectAllItemsVisible();
    });

    it("toggles dropdown when icon button is clicked", async () => {
      const user = userEvent.setup();
      renderCombobox();

      const toggleButton = getToggleButton();

      await user.click(toggleButton);
      expectAllItemsVisible();

      await user.click(toggleButton);
      expectSuggestedItemsHidden(["Apple"]);
    });

    it("filters suggestions using case-insensitive substring matching", async () => {
      const user = userEvent.setup();
      renderCombobox();

      const input = getInput();

      await user.click(input);
      await user.type(input, "AN");

      expectSuggestedItemsVisible(["Banana", "Orange"]);
      expectSuggestedItemsHidden(["Apple"]);
    });

    it("shows all items again when query is cleared", async () => {
      const user = userEvent.setup();
      renderCombobox();

      const input = getInput();

      await user.click(input);
      await user.type(input, "app");
      expectSuggestedItemsHidden(["Banana"]);

      await user.clear(input);

      expectAllItemsVisible();
    });

    it("closes dropdown when clicking outside", async () => {
      const user = userEvent.setup();
      renderCombobox();
      render(<button type="button">Outside</button>);

      await user.click(getInput());
      expectSuggestedItemsVisible(["Apple"]);
      await user.click(screen.getByRole("button", { name: "Outside" }));

      expectSuggestedItemsHidden(["Apple"]);
    });
  });

  describe("selection", () => {
    it("calls onItemSelected with selected item and closes dropdown", async () => {
      const user = userEvent.setup();
      const onItemSelectedMock = jest.fn();

      renderCombobox({ onItemSelected: onItemSelectedMock });

      await user.click(getInput());
      await user.click(screen.getByRole("button", { name: "Banana" }));

      expect(onItemSelectedMock).toHaveBeenCalledTimes(1);
      expect(onItemSelectedMock).toHaveBeenCalledWith(2, "Banana");
      expectSuggestedItemsHidden(["Banana"]);
    });

    it("matches typed values case-insensitively", async () => {
      const user = userEvent.setup();
      const onItemSelectedMock = jest.fn();

      renderCombobox({ onItemSelected: onItemSelectedMock });

      await user.type(getInput(), "banana");

      expect(onItemSelectedMock).toHaveBeenLastCalledWith(2, "Banana");
    });

    it("clears selected item callback for unmatched values", async () => {
      const user = userEvent.setup();
      const onItemSelectedMock = jest.fn();

      renderCombobox({ onItemSelected: onItemSelectedMock });

      await user.type(getInput(), "Pear");

      expect(onItemSelectedMock).toHaveBeenLastCalledWith(undefined, undefined);
      expect(getInput()).toHaveValue("Pear");
    });
  });

  describe("required prop", () => {
    it("passes required prop to input", () => {
      renderCombobox({ required: true });

      expect(getInput()).toBeRequired();
    });

    it("is not required by default", () => {
      renderCombobox();

      expect(getInput()).not.toBeRequired();
    });
  });

  describe("disabled state", () => {
    it("is enabled by default", () => {
      renderCombobox();

      expect(getInput()).toBeEnabled();
      expect(getToggleButton()).toBeEnabled();
    });

    it("input and toggle button are disabled", () => {
      renderCombobox({ disabled: true });

      expect(getInput()).toBeDisabled();
      expect(getToggleButton()).toBeDisabled();
    });

    it("dropdown closed when disabled", async () => {
      const user = userEvent.setup();
      renderCombobox({ disabled: true });

      await user.click(getInput());
      await user.click(getToggleButton());

      expectSuggestedItemsHidden(["Apple"]);
    });
  });
});
