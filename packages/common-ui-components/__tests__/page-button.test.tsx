import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";

import { ReactElement, ComponentProps } from "react";

import PageButton from "@sellify/common-ui-components/pages/PageButton";

type PageButtonProps = ComponentProps<typeof PageButton>;

type ButtonRenderResult = {
  button: HTMLButtonElement;
  rerender: (ui: ReactElement) => void;
};

describe("PageButton", () => {
  const getButton = (text = "1") =>
    screen.getByRole("button", { name: text }) as HTMLButtonElement;

  const renderButton = (
    props: Partial<PageButtonProps> = {},
    text = "1",
  ): ButtonRenderResult => {
    const defaultProps: PageButtonProps = {
      text,
      onPageSelected: jest.fn(),
      ...props,
    };
    const { rerender } = render(<PageButton {...defaultProps} />);

    return {
      button: getButton(text),
      rerender,
    };
  };

  const rerenderButton = (
    rerender: (ui: ReactElement) => void,
    props: Partial<PageButtonProps> = {},
    text = "1",
  ): HTMLButtonElement => {
    const defaultProps: PageButtonProps = {
      text,
      onPageSelected: jest.fn(),
      ...props,
    };

    rerender(<PageButton {...defaultProps} />);
    return getButton(text);
  };

  describe("rendering", () => {
    it("renders content properly", () => {
      const { button } = renderButton({}, "2");

      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
    });
  });

  describe("click handling", () => {
    it("calls onPageSelected once after a single click", async () => {
      const user = userEvent.setup();
      const onPageSelectedMock = jest.fn();

      const { button } = renderButton(
        { onPageSelected: onPageSelectedMock },
        "3",
      );

      await user.click(button);

      expect(onPageSelectedMock).toHaveBeenCalledTimes(1);
    });

    it("calls onPageSelected three times after triple click", async () => {
      const user = userEvent.setup();
      const onPageSelectedMock = jest.fn();

      const { button } = renderButton(
        { onPageSelected: onPageSelectedMock },
        "4",
      );

      await user.tripleClick(button);

      expect(onPageSelectedMock).toHaveBeenCalledTimes(3);
    });
  });

  describe("selected state", () => {
    it("is not selected by default", () => {
      const { button } = renderButton({}, "5");

      expect(button).not.toHaveClass("border");
    });

    it("adds selected styling when selected prop is true", () => {
      const { button } = renderButton({ selected: true }, "6");

      expect(button).toHaveClass("border");
    });

    it("updates selected styling after rerender", () => {
      const { button: initialButton, rerender } = renderButton({}, "7");

      expect(initialButton).not.toHaveClass("border");

      const selectedButton = rerenderButton(rerender, { selected: true }, "7");

      expect(selectedButton).toHaveClass("border");
    });
  });
});
