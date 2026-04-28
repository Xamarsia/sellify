import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ReactElement, ComponentProps } from "react";

import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

type TransparentIconButtonProps = ComponentProps<typeof TransparentIconButton>;

describe("TransparentIconButton", () => {
  const getTransparentIconButton = () =>
    screen.getByRole("button") as HTMLButtonElement;

  const renderButton = (props: Partial<TransparentIconButtonProps> = {}) => {
    const renderResult = render(
      <TransparentIconButton icon={props.icon ?? <svg />} {...props} />,
    );

    return {
      ...renderResult,
      button: getTransparentIconButton(),
    };
  };

  const rerenderButton = (
    rerender: (ui: ReactElement) => void,
    props: Partial<TransparentIconButtonProps> = {},
  ): HTMLButtonElement => {
    rerender(<TransparentIconButton icon={props.icon ?? <svg />} {...props} />);
    return getTransparentIconButton();
  };

  describe("rendering", () => {
    it("renders content properly", () => {
      const { button, container } = renderButton({});

      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();

      const root = container.firstElementChild as HTMLElement;
      const icon = root.children[0];

      expect(icon).toBeInstanceOf(SVGSVGElement);
      expect(icon).toBeVisible();
    });
  });

  describe("click handling", () => {
    it("calls onClick once after a single click", async () => {
      const user = userEvent.setup();
      const onClickMock = jest.fn();

      const { button } = renderButton({ onClick: onClickMock });

      await user.click(button);

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it("calls onClick three times after triple click", async () => {
      const user = userEvent.setup();
      const onClickMock = jest.fn();

      const { button } = renderButton({ onClick: onClickMock });

      await user.tripleClick(button);

      expect(onClickMock).toHaveBeenCalledTimes(3);
    });

    it("does not call onClick when disabled", async () => {
      const user = userEvent.setup();
      const onClickMock = jest.fn();

      const { button } = renderButton({ onClick: onClickMock, disabled: true });

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

      const destructiveButton = rerenderButton(rerender, {
        variant: "destructive",
      });
      const destructiveClassName = destructiveButton.className;

      const whiteButton = rerenderButton(rerender, {
        variant: "white",
      });
      const whiteClassName = whiteButton.className;

      expect(defaultClassName).not.toBe(destructiveClassName);
      expect(defaultClassName).not.toBe(whiteClassName);
      expect(destructiveClassName).not.toBe(whiteClassName);
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

  describe("size", () => {
    it("defaults to medium icon size", () => {
      const { button } = renderButton();

      expect(button).toHaveClass("*:h-6");
    });

    it("applies extra small icon size", () => {
      const { button } = renderButton({ size: "xs" });

      expect(button).toHaveClass("*:h-4");
    });

    it("applies small icon size", () => {
      const { button } = renderButton({ size: "sm" });

      expect(button).toHaveClass("*:h-5");
    });

    it("applies large icon size", () => {
      const { button } = renderButton({ size: "lg" });

      expect(button).toHaveClass("*:h-7");
    });

    it("applies extra large icon size", () => {
      const { button } = renderButton({ size: "xl" });

      expect(button).toHaveClass("*:h-8");
    });
  });

  describe("disabled state", () => {
    it("is enabled by default", () => {
      const { button } = renderButton({});

      expect(button).toBeEnabled();
    });

    it("is disabled when disabled prop is true", () => {
      const { button } = renderButton({ disabled: true });

      expect(button).toBeDisabled();
    });
  });

  describe("type", () => {
    it("defaults to button type", () => {
      const { button } = renderButton({});

      expect(button).toHaveAttribute("type", "button");
    });

    it("supports submit type", () => {
      const { button } = renderButton({ type: "submit" });

      expect(button).toHaveAttribute("type", "submit");
    });
  });
});
