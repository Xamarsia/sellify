import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import SideCard from "@sellify/common-ui-components/SideCard";

type SideCardProps = ComponentProps<typeof SideCard>;

describe("SideCard", () => {
  const defaultProps = {
    children: <div>Side card content</div>,
  } satisfies SideCardProps;

  const buildProps = (props: Partial<SideCardProps> = {}): SideCardProps => ({
    ...defaultProps,
    ...props,
  });

  const renderSideCard = (props: Partial<SideCardProps> = {}) =>
    render(<SideCard {...buildProps(props)} />);

  const rerenderSideCard = (
    rerender: (ui: ReactElement) => void,
    props: Partial<SideCardProps> = {},
  ) => {
    rerender(<SideCard {...buildProps(props)} />);
  };

  describe("rendering", () => {
    it("renders a labeled section with its children", () => {
      renderSideCard();

      const sideCard = screen.getByLabelText("side-card");

      expect(sideCard).toBeVisible();
      expect(sideCard.tagName).toBe("SECTION");
      expect(screen.getByText("Side card content")).toBeVisible();
    });

    it("renders multiple children in the provided order", () => {
      renderSideCard({
        children: (
          <>
            <div>First child</div>
            <div>Second child</div>
          </>
        ),
      });

      const sideCard = screen.getByLabelText("side-card");

      expect(sideCard.children[0]).toHaveTextContent("First child");
      expect(sideCard.children[1]).toHaveTextContent("Second child");
    });
  });

  describe("styling", () => {
    it("keeps the same card styling when the children change", () => {
      const { rerender } = renderSideCard({
        children: <div>Initial content</div>,
      });
      const initialStyle = screen.getByLabelText("side-card").className;

      rerenderSideCard(rerender, {
        children: <button>Updated content</button>,
      });

      expect(screen.getByLabelText("side-card").className).toBe(initialStyle);
    });
  });
});
