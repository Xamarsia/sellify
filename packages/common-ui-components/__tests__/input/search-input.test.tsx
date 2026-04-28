import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import SearchInput from "@sellify/common-ui-components/input/SearchInput";

type SearchInputProps = ComponentProps<typeof SearchInput>;

describe("SearchInput", () => {
  const getInputElement = (container: HTMLElement) =>
    container.querySelector("input") as HTMLInputElement;

  const getFormElement = (container: HTMLElement) =>
    container.querySelector("form") as HTMLFormElement;

  const renderSearchInput = (props: Partial<SearchInputProps> = {}) => {
    const onChangeMock = props.onChange ?? jest.fn();
    const onSubmitMock = props.onSubmit ?? jest.fn();
    const renderResult = render(
      <SearchInput
        value={props.value ?? ""}
        onChange={onChangeMock}
        onSubmit={onSubmitMock}
        {...props}
      />,
    );

    return {
      ...renderResult,
      onChangeMock,
      onSubmitMock,
    };
  };

  const rerenderSearchInput = (
    rerender: (ui: ReactElement) => void,
    props: Partial<SearchInputProps> = {},
  ) => {
    const onChangeMock = props.onChange ?? jest.fn();
    const onSubmitMock = props.onSubmit ?? jest.fn();

    rerender(
      <SearchInput
        value={props.value ?? ""}
        onChange={onChangeMock}
        onSubmit={onSubmitMock}
        {...props}
      />,
    );
  };

  describe("rendering", () => {
    it("renders a visible search input with the default placeholder", () => {
      const { container } = renderSearchInput();
      const input = getInputElement(container);

      expect(input).toBeVisible();
      expect(input).toHaveAttribute("placeholder", "Search for...");
    });

    it("renders the provided controlled value", () => {
      const { container } = renderSearchInput({ value: "search query" });
      const input = getInputElement(container);

      expect(input).toBeVisible();
      expect(input).toHaveValue("search query");
    });

    it("renders the search icon", () => {
      const { container } = renderSearchInput();

      const icon = container.querySelector("svg");
      expect(icon).toBeVisible();
    });

    it("renders a form around the input", () => {
      const { container } = renderSearchInput();
      const form = getFormElement(container);

      expect(form).toBeVisible();
    });
  });

  describe("input type", () => {
    it("uses text as the input type", () => {
      const renderResult = renderSearchInput();
      const input = getInputElement(renderResult.container);

      expect(input).toHaveAttribute("type", "text");
    });
  });

  describe("controlled updates", () => {
    it("updates the rendered value when rerendered with a new value", () => {
      const { container, rerender } = renderSearchInput({ value: "first" });
      const input = getInputElement(container);

      expect(input).toHaveValue("first");

      rerenderSearchInput(rerender, { value: "second" });
      expect(input).toHaveValue("second");
    });
  });

  describe("required state", () => {
    it("marks the search input as required", () => {
      const { container } = renderSearchInput();
      const input = getInputElement(container);

      expect(input).toBeRequired();
    });
  });

  describe("submit handling", () => {
    it("calls onSubmit when the form is submitted", async () => {
      const user = userEvent.setup();
      const { container, onSubmitMock } = renderSearchInput({ value: "first" });
      const input = getInputElement(container);

      await user.type(input, "{enter}");

      expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("change handling", () => {
    it("calls onChange when the user types", async () => {
      const user = userEvent.setup();
      const { container, onChangeMock } = renderSearchInput();
      const input = getInputElement(container);

      await user.type(input, "abc");

      expect(onChangeMock).toHaveBeenCalledTimes(3);
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "a");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "b");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "c");
    });
  });
});
