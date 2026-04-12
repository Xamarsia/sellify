import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ReactElement, ComponentProps } from "react";

import PlusIcon from "@sellify/common-icons/plus";
import Button from "@sellify/common-ui-components/buttons/Button";

type ButtonProps = ComponentProps<typeof Button>;

type ButtonRenderResult = {
  button: HTMLButtonElement;
  rerender: (ui: ReactElement) => void;
};

describe("Button", () => {
  const getButton = (content = "Button") =>
    screen.getByRole("button", { name: content }) as HTMLButtonElement;

  const renderButton = (
    props: Partial<ButtonProps> = {},
    content = "Button",
  ): ButtonRenderResult => {
    const { rerender } = render(<Button {...props}>{content}</Button>);

    return {
      button: getButton(content),
      rerender,
    };
  };

  const rerenderButton = (
    rerender: (ui: ReactElement) => void,
    props: Partial<ButtonProps> = {},
    content = "Button",
  ): HTMLButtonElement => {
    rerender(<Button {...props}>{content}</Button>);
    return getButton(content);
  };

  describe("rendering", () => {
    it("renders text content properly", () => {
      const { button } = renderButton({}, "Button Content");

      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
    });

    it("renders icon and text content properly", () => {
      const { container } = render(
        <Button>
          <PlusIcon />
          <span>Text Content</span>
        </Button>,
      );

      const root = container.firstElementChild as HTMLElement;
      const icon = root.children[0];
      const text = root.children[1];

      expect(icon).toBeInstanceOf(SVGSVGElement);
      expect(icon).toBeVisible();

      expect(text).toHaveTextContent("Text Content");
      expect(text).toBeVisible();
    });
  });

  describe("size", () => {
    it("applies small size", () => {
      const { button } = renderButton({ size: "small" }, "Small Button");

      expect(button).toHaveClass("h-10");
    });

    it("applies default size", () => {
      const { button } = renderButton({ size: "default" }, "Default Button");

      expect(button).toHaveClass("h-13");
    });

    it("uses default size when no size prop is passed", () => {
      const { button } = renderButton({}, "Implicit Default Button");

      expect(button).toHaveClass("h-13");
      expect(button).not.toHaveClass("h-10");
    });
  });

  describe("click handling", () => {
    it("calls onClick once after a single click", async () => {
      const user = userEvent.setup();
      const onClickMock = jest.fn();

      const { button } = renderButton(
        { onClick: onClickMock },
        "Default Button",
      );

      await user.click(button);

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it("calls onClick three times after triple click", async () => {
      const user = userEvent.setup();
      const onClickMock = jest.fn();

      const { button } = renderButton(
        { onClick: onClickMock },
        "Default Button",
      );

      await user.tripleClick(button);

      expect(onClickMock).toHaveBeenCalledTimes(3);
    });

    it("does not call onClick when disabled", async () => {
      const user = userEvent.setup();
      const onClickMock = jest.fn();

      const { button } = renderButton(
        { onClick: onClickMock, disabled: true },
        "Disabled Button",
      );

      expect(button).toBeDisabled();

      await user.click(button);

      expect(onClickMock).not.toHaveBeenCalled();
    });

    it("becomes clickable again after being re-enabled", async () => {
      const user = userEvent.setup();
      const onClickMock = jest.fn();

      const { button: initialButton, rerender } = renderButton({
        onClick: onClickMock,
      });

      await user.click(initialButton);
      expect(onClickMock).toHaveBeenCalledTimes(1);

      const disabledButton = rerenderButton(rerender, {
        onClick: onClickMock,
        disabled: true,
      });

      expect(disabledButton).toBeDisabled();

      await user.click(disabledButton);
      expect(onClickMock).toHaveBeenCalledTimes(1);

      const reEnabledButton = rerenderButton(rerender, {
        onClick: onClickMock,
        disabled: false,
      });

      expect(reEnabledButton).toBeEnabled();

      await user.click(reEnabledButton);
      expect(onClickMock).toHaveBeenCalledTimes(2);
    });
  });

  describe("variant", () => {
    it("generates different className values for different variants", () => {
      const { button: defaultButton, rerender } = renderButton({
        variant: "default",
      });
      const defaultClassName = defaultButton.className;

      const outlineButton = rerenderButton(rerender, { variant: "outline" });
      const outlineClassName = outlineButton.className;

      const destructiveButton = rerenderButton(rerender, {
        variant: "destructive",
      });
      const destructiveClassName = destructiveButton.className;

      expect(defaultClassName).not.toBe(outlineClassName);
      expect(defaultClassName).not.toBe(destructiveClassName);
      expect(outlineClassName).not.toBe(destructiveClassName);
    });

    it("uses default variant when no variant prop is passed", () => {
      const { button: implicitDefaultButton, rerender } = renderButton();
      const implicitDefaultClassName = implicitDefaultButton.className;

      const explicitDefaultButton = rerenderButton(rerender, {
        variant: "default",
      });
      const explicitDefaultClassName = explicitDefaultButton.className;

      expect(implicitDefaultClassName).toBe(explicitDefaultClassName);
    });
  });

  describe("disabled state", () => {
    it("is enabled by default", () => {
      const { button } = renderButton({}, "Enabled Button");

      expect(button).toBeEnabled();
    });

    it("is disabled when disabled prop is true", () => {
      const { button } = renderButton({ disabled: true }, "Disabled Button");

      expect(button).toBeDisabled();
    });
  });

  describe("type", () => {
    it("defaults to button type", () => {
      const { button } = renderButton({}, "Default Type");

      expect(button).toHaveAttribute("type", "button");
    });

    it("supports submit type", () => {
      const { button } = renderButton({ type: "submit" }, "Submit Button");

      expect(button).toHaveAttribute("type", "submit");
    });
  });
});
