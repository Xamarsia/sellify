import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import SideMenuItem from "@sellify/common-ui-components/side-menu/SideMenuItem";

type SideMenuItemProps = ComponentProps<typeof SideMenuItem>;

describe("SideMenuItem", () => {
  const getMenuItem = (text = "Orders") =>
    screen.getByRole("link", { name: text }) as HTMLAnchorElement;

  const renderItem = (props: Partial<SideMenuItemProps> = {}) => {
    const text = props.text ?? "Orders";
    const href = props.href ?? "/orders";

    const renderResult = render(
      <SideMenuItem href={href} text={text} {...props} />,
    );

    return {
      ...renderResult,
      menuItem: getMenuItem(text),
    };
  };

  const rerenderItem = (
    rerender: (ui: ReactElement) => void,
    props: Partial<SideMenuItemProps> = {},
  ) => {
    const text = props.text ?? "Orders";
    const href = props.href ?? "/orders";

    rerender(<SideMenuItem href={href} text={text} {...props} />);

    return getMenuItem(text);
  };

  describe("rendering", () => {
    it("renders visible link text and the correct href", () => {
      const { menuItem } = renderItem({
        href: "/settings",
        text: "Settings",
      });

      expect(menuItem).toBeInTheDocument();
      expect(menuItem).toBeVisible();
      expect(menuItem).toHaveAttribute("href", "/settings");
      expect(menuItem).toHaveTextContent("Settings");
    });
  });

  describe("selected state", () => {
    it("renders different styles for selected and unselected states", () => {
      const { menuItem, rerender } = renderItem({ selected: true });
      const selectedItemStyle = menuItem.className;

      rerenderItem(rerender, { selected: false });
      const unselectedItemStyle = menuItem.className;

      expect(selectedItemStyle).not.toBe(unselectedItemStyle);
    });

    it("renders unselected styles by default", () => {
      const { menuItem, rerender } = renderItem();
      const implicitStyle = menuItem.className;

      rerenderItem(rerender, { selected: false });
      const explicitDefaultButton = menuItem.className;

      expect(implicitStyle).toBe(explicitDefaultButton);
    });
  });
});
