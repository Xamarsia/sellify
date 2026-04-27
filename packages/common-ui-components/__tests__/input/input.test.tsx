import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import Input from "@sellify/common-ui-components/input/Input";

type InputProps = ComponentProps<typeof Input>;

describe("Input", () => {
  const getInputElement = (container: HTMLElement) =>
    container.querySelector("input") as HTMLInputElement;

  const renderInput = (props: Partial<InputProps> = {}) => {
    const onChangeMock = props.onChange ?? jest.fn();
    const renderResult = render(<Input onChange={onChangeMock} {...props} />);

    return {
      ...renderResult,
      onChangeMock,
    };
  };

  const renderInputAndReturnElement = (props: Partial<InputProps> = {}) => {
    const renderResult = renderInput(props);

    return {
      ...renderResult,
      input: getInputElement(renderResult.container),
    };
  };

  const rerenderInput = (
    rerender: (ui: ReactElement) => void,
    props: Partial<InputProps> = {},
  ) => {
    const onChangeMock = props.onChange ?? jest.fn();
    rerender(<Input onChange={onChangeMock} {...props} />);
  };

  describe("rendering", () => {
    it("renders a visible input with the provided placeholder", () => {
      const { input } = renderInputAndReturnElement({
        placeholder: "Email address",
      });

      expect(input).toBeVisible();
      expect(input).toHaveAttribute("placeholder", "Email address");
    });

    it("renders the provided controlled value", () => {
      const { input } = renderInputAndReturnElement({
        value: "john@sellify.dev",
      });

      expect(input).toBeVisible();
      expect(input).toHaveValue("john@sellify.dev");
    });

    it("renders the provided icon", () => {
      renderInput({ icon: <svg data-testid="input-icon" /> });

      const icon = screen.getByTestId("input-icon");
      expect(icon).toBeVisible();
    });
  });

  describe("input type", () => {
    it("uses text as the default input type", () => {
      const { input } = renderInputAndReturnElement();

      expect(input).toHaveAttribute("type", "text");
    });

    it("updates the input type when the type changes", () => {
      const { rerender, input } = renderInputAndReturnElement({
        type: "email",
      });

      expect(input).toHaveAttribute("type", "email");

      rerenderInput(rerender, { type: "password" });
      expect(input).toHaveAttribute("type", "password");
    });
  });

  describe("maxLength", () => {
    it("passes maxLength to the native input element", () => {
      const { input } = renderInputAndReturnElement({
        maxLength: 20,
      });

      expect(input).toHaveAttribute("maxLength", "20");
    });
  });

  describe("controlled updates", () => {
    it("updates the rendered value when rerendered with a new value", () => {
      const { rerender, input } = renderInputAndReturnElement({
        value: "john@sellify.dev",
      });

      expect(input).toHaveValue("john@sellify.dev");

      rerenderInput(rerender, { value: "jane@sellify.dev" });

      expect(input).toHaveValue("jane@sellify.dev");
    });
  });

  describe("state styling", () => {
    it("changes the wrapper className when the state switches to invalid", () => {
      const { container, rerender } = renderInput({ state: "valid" });

      const validClassName = container.firstElementChild?.className;
      rerenderInput(rerender, { state: "invalid" });

      const invalidClassName = container.firstElementChild?.className;
      expect(validClassName).not.toBe(invalidClassName);
    });

    it("uses the same wrapper className when the state is omitted or set to valid", () => {
      const { container, rerender } = renderInput();

      const implicitDefaultClassName = container.firstElementChild?.className;
      rerenderInput(rerender, { state: "valid" });

      const explicitDefaultClassName = container.firstElementChild?.className;
      expect(implicitDefaultClassName).toBe(explicitDefaultClassName);
    });
  });

  describe("required state", () => {
    it("leaves the input optional by default", () => {
      const { input } = renderInputAndReturnElement();

      expect(input).not.toBeRequired();
    });

    it("marks the input as required when required is true", () => {
      const { input } = renderInputAndReturnElement({ required: true });

      expect(input).toBeRequired();
    });

    it("keeps the input optional when required is false", () => {
      const { input } = renderInputAndReturnElement({ required: false });

      expect(input).not.toBeRequired();
    });
  });

  describe("disabled state", () => {
    it("leaves the input enabled by default", () => {
      const { input } = renderInputAndReturnElement();
      expect(input).toBeEnabled();
    });

    it("keeps the input enabled when disabled is false", () => {
      const { input } = renderInputAndReturnElement({ disabled: false });

      expect(input).not.toBeDisabled();
    });

    it("disables the input when disabled is true", () => {
      const { input } = renderInputAndReturnElement({ disabled: true });

      expect(input).toBeDisabled();
    });
  });

  describe("change handling", () => {
    it("calls onChange with the progressively typed value", async () => {
      const user = userEvent.setup();

      const { onChangeMock, input } = renderInputAndReturnElement();
      await user.type(input, "abc");

      expect(onChangeMock).toHaveBeenCalledTimes(3);
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "a");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "ab");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "abc");
    });

    it("does not call onChange when the input is disabled", async () => {
      const user = userEvent.setup();

      const { onChangeMock, input } = renderInputAndReturnElement({
        disabled: true,
      });
      await user.type(input, "abc");

      expect(onChangeMock).not.toHaveBeenCalled();
    });

    it("stops calling onChange once maxLength is reached", async () => {
      const user = userEvent.setup();

      const { onChangeMock, input } = renderInputAndReturnElement({
        maxLength: 2,
      });
      await user.type(input, "abc");

      expect(onChangeMock).toHaveBeenCalledTimes(2);
      expect(onChangeMock).toHaveBeenLastCalledWith("ab");
    });
  });
});
