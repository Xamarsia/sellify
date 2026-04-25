import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import Textarea from "@sellify/common-ui-components/input/Textarea";

type TextareaProps = ComponentProps<typeof Textarea>;

describe("Textarea", () => {
  const getTextareaField = () =>
    screen.getByRole("textbox") as HTMLTextAreaElement;

  const renderTextarea = (props: Partial<TextareaProps> = {}) => {
    const onChangeMock = props.onChange ?? jest.fn();
    const renderResult = render(
      <Textarea onChange={onChangeMock} {...props} />,
    );

    return {
      ...renderResult,
      onChangeMock,
    };
  };

  const renderTextareaAndReturnTextareaField = (
    props: Partial<TextareaProps> = {},
  ) => {
    const renderResult = renderTextarea(props);

    return {
      ...renderResult,
      textarea: getTextareaField(),
    };
  };

  const rerenderTextarea = (
    rerender: (ui: ReactElement) => void,
    props: Partial<TextareaProps> = {},
  ) => {
    const onChangeMock = props.onChange ?? jest.fn();
    rerender(<Textarea onChange={onChangeMock} {...props} />);
  };

  describe("rendering", () => {
    it("renders a visible textarea with the provided placeholder", () => {
      const { textarea } = renderTextareaAndReturnTextareaField({
        placeholder: "Write a description",
      });

      expect(textarea).toBeVisible();
      expect(textarea).toHaveAttribute("placeholder", "Write a description");
    });

    it("renders the provided controlled value", () => {
      const { textarea } = renderTextareaAndReturnTextareaField({
        value: "Soft cotton hoodie",
      });

      expect(textarea).toBeVisible();
      expect(textarea).toHaveValue("Soft cotton hoodie");
    });
  });

  describe("props", () => {
    it("passes maxLength to the native textarea element", () => {
      const { textarea } = renderTextareaAndReturnTextareaField({
        maxLength: 120,
      });

      expect(textarea).toHaveAttribute("maxLength", "120");
    });
  });

  describe("controlled updates", () => {
    it("updates the rendered value when rerendered with a new value", () => {
      const { rerender, textarea } = renderTextareaAndReturnTextareaField({
        value: "Soft cotton hoodie",
      });

      expect(textarea).toHaveValue("Soft cotton hoodie");

      rerenderTextarea(rerender, { value: "Relaxed fit t-shirt" });

      expect(textarea).toHaveValue("Relaxed fit t-shirt");
    });
  });

  describe("state styling", () => {
    it("changes the textarea className when state switches to invalid", () => {
      const { rerender, textarea } = renderTextareaAndReturnTextareaField({
        state: "valid",
      });

      const validClassName = textarea.className;
      rerenderTextarea(rerender, { state: "invalid" });

      const invalidClassName = textarea.className;
      expect(validClassName).not.toBe(invalidClassName);
    });

    it("uses the same textarea className when state is omitted or set to valid", () => {
      const { rerender, textarea } = renderTextareaAndReturnTextareaField();

      const implicitDefaultClassName = textarea.className;
      rerenderTextarea(rerender, { state: "valid" });

      const explicitDefaultClassName = textarea.className;
      expect(implicitDefaultClassName).toBe(explicitDefaultClassName);
    });
  });

  describe("required state", () => {
    it("leaves the textarea optional by default", () => {
      const { textarea } = renderTextareaAndReturnTextareaField();

      expect(textarea).not.toBeRequired();
    });

    it("marks the textarea as required when required is true", () => {
      const { textarea } = renderTextareaAndReturnTextareaField({
        required: true,
      });

      expect(textarea).toBeRequired();
    });

    it("keeps the textarea optional when required is false", () => {
      const { textarea } = renderTextareaAndReturnTextareaField({
        required: false,
      });

      expect(textarea).not.toBeRequired();
    });
  });

  describe("disabled state", () => {
    it("leaves the textarea enabled by default", () => {
      const { textarea } = renderTextareaAndReturnTextareaField();

      expect(textarea).toBeEnabled();
    });

    it("keeps the textarea enabled when disabled is false", () => {
      const { textarea } = renderTextareaAndReturnTextareaField({
        disabled: false,
      });

      expect(textarea).not.toBeDisabled();
    });

    it("disables the textarea when disabled is true", () => {
      const { textarea } = renderTextareaAndReturnTextareaField({
        disabled: true,
      });

      expect(textarea).toBeDisabled();
    });
  });

  describe("change handling", () => {
    it("calls onChange with the progressively typed value", async () => {
      const user = userEvent.setup();

      const { onChangeMock, textarea } = renderTextareaAndReturnTextareaField();
      await user.type(textarea, "abc");

      expect(onChangeMock).toHaveBeenCalledTimes(3);
      expect(onChangeMock).toHaveBeenNthCalledWith(1, "a");
      expect(onChangeMock).toHaveBeenNthCalledWith(2, "ab");
      expect(onChangeMock).toHaveBeenNthCalledWith(3, "abc");
    });

    it("does not call onChange when the textarea is disabled", async () => {
      const user = userEvent.setup();

      const { onChangeMock, textarea } = renderTextareaAndReturnTextareaField({
        disabled: true,
      });
      await user.type(textarea, "abc");

      expect(onChangeMock).not.toHaveBeenCalled();
    });

    it("stops calling onChange once maxLength is reached", async () => {
      const user = userEvent.setup();

      const { onChangeMock, textarea } = renderTextareaAndReturnTextareaField({
        maxLength: 2,
      });
      await user.type(textarea, "abc");

      expect(onChangeMock).toHaveBeenCalledTimes(2);
      expect(onChangeMock).toHaveBeenLastCalledWith("ab");
    });
  });
});
