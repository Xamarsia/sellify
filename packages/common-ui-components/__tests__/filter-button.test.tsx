import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import FilterButton from "@sellify/common-ui-components/filter/FilterButton";

type FilterButtonProps = ComponentProps<typeof FilterButton>;

describe("FilterButton", () => {
  const getButton = () => screen.getByRole("button") as HTMLButtonElement;

  const defaultProps = {} satisfies Partial<FilterButtonProps>;

  const buildProps = (
    props: Partial<FilterButtonProps> = {},
  ): FilterButtonProps => ({
    ...defaultProps,
    onClick: jest.fn(),
    ...props,
  });

  const renderButton = (props: Partial<FilterButtonProps> = {}) => {
    const resolvedProps = buildProps(props);
    const renderResult = render(<FilterButton {...resolvedProps} />);

    return {
      ...renderResult,
      onClickMock: resolvedProps.onClick,
      button: getButton(),
    };
  };

  describe("rendering", () => {
    it("renders content properly", () => {
      const { button, container } = renderButton();

      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
      expect(button).toHaveAttribute("type", "button");

      const root = container.firstElementChild as HTMLElement;
      const icon = root.children[0];
      const text = root.children[1];

      expect(icon).toBeInstanceOf(SVGSVGElement);
      expect(icon).toBeVisible();

      expect(text).toHaveTextContent("filter");
      expect(text).toBeVisible();
    });

    describe("click handling", () => {
      it("calls onClick once after a single click", async () => {
        const user = userEvent.setup();
        const { button, onClickMock } = renderButton();

        await user.click(button);

        expect(onClickMock).toHaveBeenCalledTimes(1);
      });

      it("calls onClick three times after triple click", async () => {
        const user = userEvent.setup();
        const { button, onClickMock } = renderButton();

        await user.tripleClick(button);

        expect(onClickMock).toHaveBeenCalledTimes(3);
      });
    });
  });
});
