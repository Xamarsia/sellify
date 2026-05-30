import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { ReactElement, ComponentProps } from "react";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";

type LinkButtonProps = ComponentProps<typeof LinkButton>;

describe("LinkButton", () => {
  const getLink = (container: HTMLElement) =>
    container.querySelector("a") as HTMLAnchorElement;

  const defaultProps = {
    children: "Link Button",
  } satisfies Pick<LinkButtonProps, "children">;

  const buildProps = (
    props: Partial<LinkButtonProps> = {},
  ): LinkButtonProps => ({
    ...defaultProps,
    ...props,
  });

  const renderLink = (props: Partial<LinkButtonProps> = {}) => {
    const resolvedProps = buildProps(props);
    const renderResult = render(<LinkButton {...resolvedProps} />);

    return {
      ...renderResult,
      link: getLink(renderResult.container),
    };
  };

  const rerenderLink = (
    rerender: (ui: ReactElement) => void,
    props: Partial<LinkButtonProps> = {},
  ) => {
    const resolvedProps = buildProps(props);

    rerender(<LinkButton {...resolvedProps} />);
  };

  describe("rendering", () => {
    it("renders text content properly", () => {
      const { link } = renderLink({ children: "Read details" });

      expect(link).toBeInTheDocument();
      expect(link).toBeVisible();
    });

    it("renders text and icon content properly", () => {
      const { container } = render(
        <LinkButton>
          <span>Text Content</span>
          <svg />
        </LinkButton>,
      );

      const root = container.firstElementChild as HTMLElement;
      const text = root.children[0];
      const icon = root.children[1];

      expect(text).toHaveTextContent("Text Content");
      expect(text).toBeVisible();

      expect(icon).toBeInstanceOf(SVGSVGElement);
      expect(icon).toBeVisible();
    });
  });

  describe("href", () => {
    it("renders href properly", () => {
      const { link } = renderLink({ href: "/pricing" });
      expect(link).toHaveAttribute("href", "/pricing");
    });

    it("does not set href when not provided", () => {
      const { link } = renderLink();
      expect(link).not.toHaveAttribute("href");
    });

    it("updates href after rerender", () => {
      const { link, rerender } = renderLink({ href: "/first" });
      expect(link).toHaveAttribute("href", "/first");

      rerenderLink(rerender, { href: "/second" });
      expect(link).toHaveAttribute("href", "/second");
    });
  });
});
