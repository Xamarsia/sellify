import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { ReactElement, ComponentProps } from "react";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";

type LinkButtonProps = ComponentProps<typeof LinkButton>;

type LinkRenderResult = {
  link: HTMLAnchorElement;
  rerender: (ui: ReactElement) => void;
};

describe("LinkButton", () => {
  const getLink = (content = "Link Button") =>
    screen.getByRole("link", { name: content }) as HTMLAnchorElement;

  const renderLink = (
    props: Partial<LinkButtonProps> = {},
    content = "Link Button",
  ): LinkRenderResult => {
    const { rerender } = render(
      <LinkButton href="/target" {...props}>
        {content}
      </LinkButton>,
    );

    return {
      link: getLink(content),
      rerender,
    };
  };

  describe("rendering", () => {
    it("renders text content properly", () => {
      const { link } = renderLink({}, "Read details");

      expect(link).toBeInTheDocument();
      expect(link).toBeVisible();
    });
  });

  describe("href", () => {
    it("renders href properly", () => {
      const { link } = renderLink({ href: "/pricing" }, "Pricing");

      expect(link).toHaveAttribute("href", "/pricing");
    });

    it("does not set href when not provided", () => {
      render(<LinkButton>Read details</LinkButton>);

      expect(screen.getByText("Read details")).not.toHaveAttribute("href");
    });

    it("updates href after rerender", () => {
      const { link: initialLink, rerender } = renderLink(
        { href: "/first" },
        "Help",
      );

      expect(initialLink).toHaveAttribute("href", "/first");

      rerender(<LinkButton href="/second">Help</LinkButton>);

      expect(getLink("Help")).toHaveAttribute("href", "/second");
    });
  });
});
