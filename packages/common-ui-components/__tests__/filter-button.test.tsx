import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import FilterButton from "@sellify/common-ui-components/filter/FilterButton";

type FilterButtonProps = ComponentProps<typeof FilterButton>;

describe("FilterButton", () => {
  const getButton = () => screen.getByRole("button") as HTMLButtonElement;

  const renderButton = (props: Partial<FilterButtonProps> = {}) => {
    const renderResult = render(<FilterButton {...props} />);

    return {
      ...renderResult,
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
    });
  });
});
