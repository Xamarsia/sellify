import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ReactElement, ComponentProps } from "react";

import PageButton from "@sellify/common-ui-components/pages/PageButton";

type PageButtonProps = ComponentProps<typeof PageButton>;

describe("PageButton", () => {
  const getButton = (text = "1") =>
    screen.getByRole("button", { name: text }) as HTMLButtonElement;

  const renderButton = (props: Partial<PageButtonProps> = {}) => {
    const text = props.text ?? "1";
    const renderResult = render(
      <PageButton
        onPageSelected={props.onPageSelected ?? jest.fn()}
        text={text}
        {...props}
      />,
    );

    return {
      ...renderResult,
      button: getButton(text),
    };
  };

  const rerenderButton = (
    rerender: (ui: ReactElement) => void,
    props: Partial<PageButtonProps> = {},
  ): HTMLButtonElement => {
    const text = props.text ?? "1";

    rerender(
      <PageButton
        onPageSelected={props.onPageSelected ?? jest.fn()}
        text={text}
        {...props}
      />,
    );
    return getButton(text);
  };

  describe("rendering", () => {
    it("renders content properly", () => {
      const { button } = renderButton({ text: "2" });

      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
    });
  });

  describe("click handling", () => {
    it("calls onPageSelected once after a single click", async () => {
      const user = userEvent.setup();
      const onPageSelectedMock = jest.fn();

      const { button } = renderButton({
        onPageSelected: onPageSelectedMock,
        text: "3",
      });

      await user.click(button);

      expect(onPageSelectedMock).toHaveBeenCalledTimes(1);
    });

    it("calls onPageSelected three times after triple click", async () => {
      const user = userEvent.setup();
      const onPageSelectedMock = jest.fn();

      const { button } = renderButton({
        onPageSelected: onPageSelectedMock,
        text: "4",
      });

      await user.tripleClick(button);

      expect(onPageSelectedMock).toHaveBeenCalledTimes(3);
    });
  });

  describe("selected state", () => {
    it("is not selected by default", () => {
      const { button } = renderButton({ text: "5" });

      expect(button).not.toHaveClass("border");
    });

    it("adds selected styling when selected prop is true", () => {
      const { button } = renderButton({ selected: true });

      expect(button).toHaveClass("border");
    });

    it("updates selected styling after rerender", () => {
      const { button: initialButton, rerender } = renderButton({ text: "7" });

      expect(initialButton).not.toHaveClass("border");

      const selectedButton = rerenderButton(rerender, {
        selected: true,
        text: "2",
      });

      expect(selectedButton).toHaveClass("border");
    });
  });

  describe("text updates", () => {
    it("updates the visible page label after rerender", () => {
      const { rerender, button } = renderButton({ text: "8" });
      expect(button).toBeVisible();

      const rerenderedButton = rerenderButton(rerender, { text: "9" });

      expect(rerenderedButton).toBeVisible();
    });
  });
});
