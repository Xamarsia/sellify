import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ComponentProps } from "react";

import SideMenu from "@sellify/common-ui-components/side-menu/SideMenu";

type SideMenuProps = ComponentProps<typeof SideMenu>;

describe("SideMenu", () => {
  const defaultItems = [
    { href: "/orders", title: "Orders" },
    { href: "/products", title: "Products" },
    { href: "/settings", title: "Settings" },
  ] satisfies SideMenuProps["items"];

  const defaultProps = {
    items: defaultItems,
    pathname: "/orders",
  } satisfies Pick<SideMenuProps, "items" | "pathname">;

  const buildProps = (props: Partial<SideMenuProps> = {}): SideMenuProps => ({
    ...defaultProps,
    ...props,
  });

  const renderMenu = (props: Partial<SideMenuProps> = {}) => {
    const resolvedProps = buildProps(props);
    const renderResult = render(<SideMenu {...resolvedProps} />);

    return {
      ...renderResult,
      nav: screen.getByRole("navigation"),
    };
  };

  describe("rendering", () => {
    it("renders navigation with links for each item", () => {
      const { nav } = renderMenu();

      expect(nav).toBeInTheDocument();
      expect(nav).toBeVisible();

      defaultItems.forEach(({ href, title }) => {
        const sideMenuItem = screen.getByRole("link", { name: title });

        expect(sideMenuItem).toBeVisible();
        expect(sideMenuItem).toHaveAttribute("href", href);
      });
    });

    it("renders no links when items is empty", () => {
      renderMenu({
        items: [],
      });

      expect(screen.queryAllByRole("link")).toHaveLength(0);
    });
  });
});
