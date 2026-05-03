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
  ];

  const renderMenu = (props: Partial<SideMenuProps> = {}) => {
    const renderResult = render(
      <SideMenu
        items={props.items ?? defaultItems}
        pathname={props.pathname ?? "/orders"}
        {...props}
      />,
    );

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
