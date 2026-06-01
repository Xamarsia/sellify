import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import CollapsiblePanel from "@sellify/common-ui-components/CollapsiblePanel";

type CollapsiblePanelProps = ComponentProps<typeof CollapsiblePanel>;

describe("CollapsiblePanel", () => {
  const defaultProps = {
    panelTitle: "Filters",
    children: <div>Panel content</div>,
  } satisfies CollapsiblePanelProps;

  const buildProps = (
    props: Partial<CollapsiblePanelProps> = {},
  ): CollapsiblePanelProps => ({
    ...defaultProps,
    ...props,
  });

  const getToggleButton = (label: string) =>
    screen.getByRole("button", { name: label }) as HTMLButtonElement;

  const queryPanelContent = () => screen.queryByText("Panel content");

  const getIndicatorIcon = (button: HTMLButtonElement) => {
    return button.querySelector("svg") as SVGSVGElement | null;
  };

  const renderCollapsiblePanel = (
    props: Partial<CollapsiblePanelProps> = {},
  ) => {
    const resolvedProps = buildProps(props);
    const renderResult = render(<CollapsiblePanel {...resolvedProps} />);

    return {
      ...renderResult,
      button: getToggleButton(resolvedProps.panelTitle.toString()),
    };
  };

  const rerenderCollapsiblePanel = (
    rerender: (ui: ReactElement) => void,
    props: Partial<CollapsiblePanelProps> = {},
  ) => {
    const resolvedProps = buildProps(props);

    rerender(<CollapsiblePanel {...resolvedProps} />);

    return getToggleButton(resolvedProps.panelTitle.toString());
  };

  describe("rendering", () => {
    it("renders a visible toggle button with the provided title and SVG icon", () => {
      const { button } = renderCollapsiblePanel({
        panelTitle: "Shipping filters",
      });

      expect(button).toBeInTheDocument();
      expect(button).toBeVisible();
      expect(button).toHaveTextContent("Shipping filters");

      const icon = getIndicatorIcon(button);
      expect(icon).toBeInstanceOf(SVGSVGElement);
    });

    it("hides panel content by default", () => {
      renderCollapsiblePanel();

      expect(queryPanelContent()).not.toBeInTheDocument();
    });
  });

  describe("toggle behavior", () => {
    it("displays the panel content when the toggle button is clicked", async () => {
      const user = userEvent.setup();
      const { button } = renderCollapsiblePanel();

      await user.click(button);

      expect(screen.getByText("Panel content")).toBeVisible();
    });

    it("hides the panel content after the toggle button is clicked twice", async () => {
      const user = userEvent.setup();
      const { button } = renderCollapsiblePanel();

      await user.click(button);
      expect(screen.getByText("Panel content")).toBeVisible();

      await user.click(button);

      expect(queryPanelContent()).not.toBeInTheDocument();
    });

    it("toggles the panel content on each click during a double-click interaction", async () => {
      const user = userEvent.setup();
      const { button } = renderCollapsiblePanel();

      await user.dblClick(button);

      expect(queryPanelContent()).not.toBeInTheDocument();
    });
  });

  describe("toggle styles", () => {
    it("applies different styles in the collapsed and expanded states", async () => {
      const user = userEvent.setup();
      const { button } = renderCollapsiblePanel();
      const collapsedStyle = button.className;

      await user.click(button);

      const expandedStyle = button.className;

      expect(collapsedStyle).not.toBe(expandedStyle);
    });

    it("renders different icons in the collapsed and expanded states", async () => {
      const user = userEvent.setup();
      const { button } = renderCollapsiblePanel();
      const collapsedIcon = getIndicatorIcon(button);

      await user.click(button);

      const expandedIcon = getIndicatorIcon(button);

      expect(collapsedIcon).toBeInstanceOf(SVGSVGElement);
      expect(expandedIcon).toBeInstanceOf(SVGSVGElement);
      expect(collapsedIcon?.outerHTML).not.toBe(expandedIcon?.outerHTML);
    });
  });

  describe("title updates", () => {
    it("updates the visible title after rerendering", () => {
      const { rerender } = renderCollapsiblePanel({
        panelTitle: "Delivery",
      });

      const button = rerenderCollapsiblePanel(rerender, {
        panelTitle: "Payment",
      });

      expect(button).toBeVisible();
      expect(button).toHaveTextContent("Payment");
    });
  });
});
