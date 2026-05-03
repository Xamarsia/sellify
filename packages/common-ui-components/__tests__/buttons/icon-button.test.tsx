import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ReactElement, ComponentProps } from "react";

import IconButton from "@sellify/common-ui-components/buttons/IconButton";

type IconButtonProps = ComponentProps<typeof IconButton>;

describe("IconButton", () => {
  const getIconButton = () => screen.getByRole("button") as HTMLButtonElement;

  const renderButton = (props: Partial<IconButtonProps> = {}) => {
    const renderResult = render(<IconButton icon={<svg />} {...props} />);

    return {
      ...renderResult,
      button: getIconButton(),
    };
  };

  const rerenderButton = (
    rerender: (ui: ReactElement) => void,
    props: Partial<IconButtonProps> = {},
  ): HTMLButtonElement => {
    rerender(<IconButton icon={<svg />} {...props} />);
    return getIconButton();
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

      const { button } = renderButton({
        onClick: onClickMock,
        disabled: true,
      });

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
    it("generates different styles values for different variants", () => {
      const { button: defaultButton, rerender } = renderButton({
        variant: "default",
      });
      const defaultStyle = defaultButton.className;

      const outlineButton = rerenderButton(rerender, { variant: "outline" });
      const outlineStyle = outlineButton.className;

      expect(defaultStyle).not.toBe(outlineStyle);
    });

    it("uses default variant when no variant prop is passed", () => {
      const { button: implicitDefaultButton, rerender } = renderButton();
      const implicitDefaultStyle = implicitDefaultButton.className;

      const explicitDefaultButton = rerenderButton(rerender, {
        variant: "default",
      });
      const explicitDefaultStyle = explicitDefaultButton.className;

      expect(implicitDefaultStyle).toBe(explicitDefaultStyle);
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
