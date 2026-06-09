import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import SidePanel, {
  SIDE_PANEL_PLACEMENT,
} from "@sellify/common-ui-components/SidePanel";

describe("SidePanel", () => {
  type SidePanelProps = ComponentProps<typeof SidePanel>;

  const defaultProps = {
    title: "Panel title",
    isOpen: false,
    children: <div>Panel content</div>,
  } satisfies Pick<SidePanelProps, "title" | "isOpen" | "children">;

  const buildProps = (props: Partial<SidePanelProps> = {}): SidePanelProps => ({
    ...defaultProps,
    onClose: jest.fn(),
    ...props,
  });

  const renderPanel = (props: Partial<SidePanelProps> = {}) => {
    const resolvedProps = buildProps(props);
    const renderResult = render(<SidePanel {...resolvedProps} />);

    return {
      ...renderResult,
      onCloseMock: resolvedProps.onClose,
    };
  };

  const rerenderPanel = (
    rerender: (ui: ReactElement) => void,
    props: Partial<SidePanelProps> = {},
  ) => {
    const resolvedProps = buildProps(props);

    rerender(<SidePanel {...resolvedProps} />);
  };

  const getPanel = (container: HTMLElement): HTMLElement =>
    getOverlay(container)?.firstElementChild as HTMLElement;

  const getOverlay = (container: HTMLElement) => container.firstElementChild;

  describe("rendering", () => {
    it("does not render panel and overlay when closed", () => {
      const { container } = renderPanel({ isOpen: false });

      expect(container.firstElementChild).not.toBeInTheDocument();
    });

    it("renders title when open", () => {
      renderPanel({ isOpen: true, title: "Visible Title" });
      const title = screen.getByRole("heading", {
        level: 2,
        name: "Visible Title",
      });
      expect(title).toBeVisible();
    });

    it("renders content when open", () => {
      const { container } = renderPanel({
        isOpen: true,
        children: <div data-testid="content-id">Panel content</div>,
      });

      expect(screen.getByText("Panel content")).toBeVisible();
      expect(screen.getByTestId("content-id")).toBeVisible();
      expect(container.firstElementChild).toBeVisible();
    });

    it("renders x-button when open", () => {
      const { container } = renderPanel({ isOpen: true });
      const button = container.querySelector("button");

      const icon = button?.firstElementChild;

      expect(icon).toBeInstanceOf(SVGSVGElement);
      expect(icon).toBeVisible();
    });
  });

  describe("closing", () => {
    it("calls onClose when the close button is clicked", async () => {
      const user = userEvent.setup();
      const { onCloseMock } = renderPanel({ isOpen: true });

      await user.click(screen.getByRole("button"));

      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it("calls onClose when clicking outside the panel", async () => {
      const user = userEvent.setup();
      const { onCloseMock } = renderPanel({ isOpen: true });

      await user.click(document.body);

      expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it("does not call onClose when clicking inside the panel", async () => {
      const user = userEvent.setup();
      const { onCloseMock, container } = renderPanel({ isOpen: true });

      const panel = getPanel(container);
      expect(panel).toBeInTheDocument();

      await user.click(panel);

      expect(onCloseMock).not.toHaveBeenCalled();
    });
  });

  describe("side", () => {
    it("renders different styles for left and right sides", () => {
      const { container, rerender } = renderPanel({
        isOpen: true,
        placement: SIDE_PANEL_PLACEMENT.LEFT,
      });
      const leftOverlayStyle = getOverlay(container)?.className;
      const leftPanelStyle = getPanel(container)?.className;

      rerenderPanel(rerender, {
        isOpen: true,
        placement: SIDE_PANEL_PLACEMENT.RIGHT,
      });
      const rightOverlayStyle = getOverlay(container)?.className;
      const rightPanelStyle = getPanel(container)?.className;

      expect(leftOverlayStyle).not.toBe(rightOverlayStyle);
      expect(leftPanelStyle).toBe(rightPanelStyle);
    });

    it("renders right-side styles by default", () => {
      const { container, rerender } = renderPanel({ isOpen: true });
      const implicitOverlayStyle = getOverlay(container)?.className;
      const implicitPanelStyle = getPanel(container)?.className;

      rerenderPanel(rerender, {
        isOpen: true,
        placement: SIDE_PANEL_PLACEMENT.RIGHT,
      });
      const explicitOverlayStyle = getOverlay(container)?.className;
      const explicitPanelStyle = getPanel(container)?.className;

      expect(implicitOverlayStyle).toBe(explicitOverlayStyle);
      expect(implicitPanelStyle).toBe(explicitPanelStyle);
    });
  });
});
