import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ReactElement, ComponentProps } from "react";

import PaginationButton from "@sellify/common-ui-components/pages/PaginationButton";

type PaginationButtonProps = ComponentProps<typeof PaginationButton>;

describe("PaginationButton", () => {
  const getButton = (label: string | number) =>
    screen.getByRole("button", { name: label.toString() }) as HTMLButtonElement;

  const defaultProps = {
    label: "1",
  } satisfies Pick<PaginationButtonProps, "label">;

  const buildProps = (
    props: Partial<PaginationButtonProps> = {},
  ): PaginationButtonProps => ({
    ...defaultProps,
    onClick: jest.fn(),
    ...props,
  });

  const renderPaginationButton = (
    props: Partial<PaginationButtonProps> = {},
  ) => {
    const resolvedProps = buildProps(props);
    const renderResult = render(<PaginationButton {...resolvedProps} />);

    return {
      ...renderResult,
      onClickMock: resolvedProps.onClick,
      button: getButton(resolvedProps.label),
    };
  };

  const rerenderPaginationButton = (
    rerender: (ui: ReactElement) => void,
    props: Partial<PaginationButtonProps> = {},
  ): HTMLButtonElement => {
    const resolvedProps = buildProps(props);

    rerender(<PaginationButton {...resolvedProps} />);
    return getButton(resolvedProps.label);
  };

  describe("rendering", () => {
    it("renders the provided label as the button text", () => {
      const { button } = renderPaginationButton({ label: "2" });

      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
      expect(button).toHaveTextContent("2");
      expect(button).toBeEnabled();
    });
  });

  describe("click handling", () => {
    it("invokes onClick once when clicked", async () => {
      const user = userEvent.setup();
      const { button, onClickMock } = renderPaginationButton({
        label: "3",
      });

      await user.click(button);

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it("invokes onClick with undefined when no value is provided", async () => {
      const user = userEvent.setup();

      const { button, onClickMock } = renderPaginationButton({
        label: "...",
      });

      await user.click(button);

      expect(onClickMock).toHaveBeenCalledTimes(1);
      expect(onClickMock).toHaveBeenCalledWith(undefined);
    });

    it("invokes onClick with the provided value when clicked", async () => {
      const user = userEvent.setup();
      const { button, onClickMock } = renderPaginationButton({
        label: "3",
        value: 3,
      });

      await user.click(button);

      expect(onClickMock).toHaveBeenCalledTimes(1);
      expect(onClickMock).toHaveBeenCalledWith(3);
    });

    it("does not invoke onClick when the button is selected", async () => {
      const user = userEvent.setup();
      const { button, onClickMock } = renderPaginationButton({
        isSelected: true,
      });

      await user.click(button);

      expect(button).toBeDisabled();
      expect(onClickMock).not.toHaveBeenCalled();
    });

    it("invokes onClick on each click during a triple-click interaction", async () => {
      const user = userEvent.setup();

      const { button, onClickMock } = renderPaginationButton({
        label: "4",
        value: 4,
      });

      await user.tripleClick(button);

      expect(onClickMock).toHaveBeenCalledTimes(3);
      expect(onClickMock).toHaveBeenNthCalledWith(1, 4);
      expect(onClickMock).toHaveBeenNthCalledWith(2, 4);
      expect(onClickMock).toHaveBeenNthCalledWith(3, 4);
    });
  });

  describe("selected state", () => {
    it("applies different styles for selected and unselected states", () => {
      const { button: defaultButton, rerender } = renderPaginationButton({
        isSelected: false,
      });
      const unselectedStyle = defaultButton.className;

      const selectedPageItem = rerenderPaginationButton(rerender, {
        isSelected: true,
      });
      const selectedStyle = selectedPageItem.className;

      expect(unselectedStyle).not.toBe(selectedStyle);
    });

    it("uses the unselected styling by default", () => {
      const { button: defaultPageItem, rerender } = renderPaginationButton();
      const implicitDefaultStyle = defaultPageItem.className;

      const unselectedPageItem = rerenderPaginationButton(rerender, {
        isSelected: false,
      });
      const explicitUnselectedStyle = unselectedPageItem.className;

      expect(implicitDefaultStyle).toBe(explicitUnselectedStyle);
    });
  });

  describe("label updates", () => {
    it("updates the visible label after rerender", () => {
      const { rerender, button } = renderPaginationButton({ label: "8" });

      expect(button).toBeVisible();
      expect(button).toHaveTextContent("8");

      const rerenderedButton = rerenderPaginationButton(rerender, {
        label: "9",
      });

      expect(rerenderedButton).toBeVisible();
      expect(rerenderedButton).toHaveTextContent("9");
    });
  });
});
