import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";

import { render, screen, within } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import MultiSelectionCombobox from "@sellify/common-ui-components/combobox/MultiSelectionCombobox";

type MultiSelectionComboboxProps = ComponentProps<
  typeof MultiSelectionCombobox<number>
>;

// TODO: Find a way to access `SuggestedItems` and `selectedItems` more reliably in this test.
describe("MultiSelectionCombobox", () => {
  const items = new Map<number, string>([
    [1, "Apple"],
    [2, "Banana"],
    [3, "Orange"],
  ]);

  const getInput = () => screen.getByRole("textbox") as HTMLInputElement;

  const getToggleButton = () =>
    screen.getAllByRole("button")[0] as HTMLButtonElement;

  const renderCombobox = (props: Partial<MultiSelectionComboboxProps> = {}) => {
    const renderResult = render(
      <MultiSelectionCombobox
        items={props.items ?? items}
        selectedItems={props.selectedItems ?? new Map()}
        onItemSelected={props.onItemSelected ?? jest.fn()}
        onItemRemoved={props.onItemRemoved ?? jest.fn()}
        {...props}
      />,
    );

    return {
      ...renderResult,
      input: getInput(),
    };
  };

  const rerenderCombobox = (
    rerender: (ui: ReactElement) => void,
    props: Partial<MultiSelectionComboboxProps> = {},
  ): HTMLInputElement => {
    rerender(
      <MultiSelectionCombobox
        items={props.items ?? items}
        selectedItems={props.selectedItems ?? new Map()}
        onItemSelected={props.onItemSelected ?? jest.fn()}
        onItemRemoved={props.onItemRemoved ?? jest.fn()}
        {...props}
      />,
    );

    return getInput();
  };

  const expectSuggestedItems = (visible: string[], hidden: string[] = []) => {
    expectSuggestedItemsVisible(visible);
    expectSuggestedItemsHidden(hidden);
  };

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

  const expectAllSuggestedItemsVisible = () => {
    expectSuggestedItemsVisible(["Apple", "Banana", "Orange"]);
  };

  const expectAllSuggestedItemsHidden = () => {
    expectSuggestedItemsHidden(["Apple", "Banana", "Orange"]);
  };

  describe("rendering", () => {
    it("renders an empty input by default", () => {
      renderCombobox();

      expect(getInput()).toHaveValue("");
    });

    it("dropdown closed by default", () => {
      renderCombobox();

      expectAllSuggestedItemsHidden();
    });

    it("renders initial item", () => {
      renderCombobox({
        selectedItems: new Map([[1, "Apple"]]),
      });

      expect(screen.getByText("Apple")).toBeVisible();
    });

    it("renders multiple initial items", () => {
      renderCombobox({
        selectedItems: new Map([
          [1, "Apple"],
          [2, "Banana"],
        ]),
      });

      expect(screen.getByText("Apple")).toBeVisible();
      expect(screen.getByText("Banana")).toBeVisible();
    });

    it("shows the placeholder when there are no selected items", () => {
      const { input } = renderCombobox();

      expect(input).toHaveAttribute("placeholder", "--");
    });

    it("hides the placeholder when selected items exist", () => {
      const { input } = renderCombobox({
        selectedItems: new Map([[1, "Apple"]]),
      });

      expect(input).toHaveAttribute("placeholder", "");
    });

    it("updates the placeholder when selected items change", () => {
      const { rerender } = renderCombobox();

      expect(getInput()).toHaveAttribute("placeholder", "--");

      const updatedInput = rerenderCombobox(rerender, {
        selectedItems: new Map([[1, "Apple"]]),
      });

      expect(updatedInput).toHaveAttribute("placeholder", "");
    });

    it("renders a toggle button with an icon", () => {
      renderCombobox();

      const toggleButton = getToggleButton();

      expect(toggleButton).toBeInTheDocument();
      expect(toggleButton).toHaveAttribute("type", "button");
      expect(toggleButton.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("dropdown behavior", () => {
    it("opens dropdown on input focus and shows all items", async () => {
      const user = userEvent.setup();
      renderCombobox();

      await user.click(getInput());

      expectAllSuggestedItemsVisible();
    });

    it("toggles the dropdown when the icon button is clicked", async () => {
      const user = userEvent.setup();
      renderCombobox();

      const toggleButton = getToggleButton();

      await user.click(toggleButton);
      expectAllSuggestedItemsVisible();

      await user.click(toggleButton);
      expectAllSuggestedItemsHidden();
    });

    it("opens dropdown on input focus and excludes already selected items", async () => {
      const user = userEvent.setup();
      const { input } = renderCombobox({
        selectedItems: new Map([[1, "Apple"]]),
      });

      await user.click(input);

      expectSuggestedItems(["Banana", "Orange"], ["Apple"]);
    });

    it("filters dropdown items using case-insensitive queries", async () => {
      const user = userEvent.setup();
      const { input } = renderCombobox();

      await user.click(input);
      await user.type(input, "OR");

      expectSuggestedItems(["Orange"], ["Apple", "Banana"]);
    });

    it("shows all non-selected items again when query is cleared", async () => {
      const user = userEvent.setup();
      const { input } = renderCombobox({
        selectedItems: new Map([[1, "Apple"]]),
      });

      await user.click(input);
      await user.type(input, "or");
      expectSuggestedItems(["Orange"], ["Apple", "Banana"]);

      await user.clear(input);
      expectSuggestedItems(["Banana", "Orange"], ["Apple"]);
    });

    it("closes the dropdown when clicking outside", async () => {
      const user = userEvent.setup();
      const { input } = renderCombobox();
      render(<button type="button">Outside</button>);

      await user.click(input);
      expectSuggestedItemsVisible(["Apple"]);

      await user.click(screen.getByRole("button", { name: "Outside" }));
      expectSuggestedItemsHidden(["Apple"]);
    });

    it("updates suggested items when selected items change after rerender", async () => {
      const user = userEvent.setup();
      const { input, rerender } = renderCombobox();

      await user.click(input);
      expectSuggestedItems(["Apple", "Banana", "Orange"]);

      rerenderCombobox(rerender, { selectedItems: new Map([[2, "Banana"]]) });

      expectSuggestedItems(["Apple", "Orange"], ["Banana"]);
    });
  });

  describe("selection", () => {
    it("calls onItemSelected and clears the input after selection", async () => {
      const user = userEvent.setup();
      const onItemSelectedMock = jest.fn();
      const { input } = renderCombobox({ onItemSelected: onItemSelectedMock });

      await user.click(input);
      await user.type(input, "Ban");
      await user.click(screen.getByRole("button", { name: "Banana" }));

      expect(onItemSelectedMock).toHaveBeenCalledTimes(1);
      expect(onItemSelectedMock).toHaveBeenCalledWith(2, "Banana");
      expect(input).toHaveValue("");

      expectSuggestedItemsHidden(["Banana"]);
    });

    it("calls onItemRemoved when a selected item remove button is clicked", async () => {
      const user = userEvent.setup();
      const onItemRemovedMock = jest.fn();

      renderCombobox({
        selectedItems: new Map([[1, "Apple"]]),
        onItemRemoved: onItemRemovedMock,
      });

      await user.click(
        within(
          screen.getByText("Apple").parentElement as HTMLElement,
        ).getByRole("button"),
      );

      expect(onItemRemovedMock).toHaveBeenCalledTimes(1);
      expect(onItemRemovedMock).toHaveBeenCalledWith(1, "Apple");
    });

    it("renders remove buttons for each selected item when enabled", () => {
      renderCombobox({
        selectedItems: new Map([
          [1, "Apple"],
          [2, "Banana"],
        ]),
      });

      expect(screen.getAllByRole("button")).toHaveLength(3);
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

    it("marks the input as required only when no items are selected", () => {
      const { input, rerender } = renderCombobox({ required: true });
      expect(input).toBeRequired();

      const updatedInput = rerenderCombobox(rerender, {
        required: true,
        selectedItems: new Map([[1, "Apple"]]),
      });
      expect(updatedInput).not.toBeRequired();
    });
  });

  describe("disabled state", () => {
    it("is enabled by default", () => {
      renderCombobox();

      expect(getInput()).toBeEnabled();
      expect(getToggleButton()).toBeEnabled();
    });

    it("disables the input and hides the toggle button when disabled", () => {
      renderCombobox({ disabled: true });

      expect(getInput()).toBeDisabled();
      const toggleButton = screen.queryByRole("button");
      expect(toggleButton).toBeNull();
    });

    it("dropdown closed when disabled", async () => {
      const user = userEvent.setup();
      renderCombobox({ disabled: true });

      await user.click(getInput());

      expectAllSuggestedItemsHidden();
    });

    it("hides selected item remove buttons when disabled", () => {
      renderCombobox({
        disabled: true,
        selectedItems: new Map([[1, "Apple"]]),
      });

      expect(screen.getByText("Apple")).toBeVisible();
      expect(
        within(
          screen.getByText("Apple").parentElement as HTMLElement,
        ).queryByRole("button"),
      ).not.toBeInTheDocument();
    });
  });
});
