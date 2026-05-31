import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import Breadcrumbs from "@sellify/common-ui-components/Breadcrumbs";

type BreadcrumbsProps = ComponentProps<typeof Breadcrumbs>;

describe("Breadcrumbs", () => {
  const navigationLabel = "breadcrumbs";
  const defaultItems = [
    { href: "/dashboard", title: "Dashboard" },
    { href: "/orders", title: "Orders" },
    { href: "/orders/123", title: "Order Details" },
  ] satisfies BreadcrumbsProps["items"];

  const defaultProps = {
    items: defaultItems,
  } satisfies Pick<BreadcrumbsProps, "items">;

  const buildProps = (
    props: Partial<BreadcrumbsProps> = {},
  ): BreadcrumbsProps => ({
    ...defaultProps,
    ...props,
  });

  const getNavigation = () => {
    return screen.getByRole("navigation", { name: navigationLabel });
  };

  const getList = () => {
    return screen.getByRole("list");
  };

  const getBreadcrumbItems = () => {
    return screen.getAllByRole("listitem");
  };

  const expectBreadcrumbLink = (label: string, href: string) => {
    expect(screen.getByRole("link", { name: label })).toHaveAttribute(
      "href",
      href,
    );
  };

  const renderBreadcrumbs = (props: Partial<BreadcrumbsProps> = {}) => {
    const resolvedProps = buildProps(props);
    const renderResult = render(<Breadcrumbs {...resolvedProps} />);

    return {
      ...renderResult,
    };
  };

  const rerenderBreadcrumbs = (
    rerender: (ui: ReactElement) => void,
    props: Partial<BreadcrumbsProps> = {},
  ) => {
    const resolvedProps = buildProps(props);

    rerender(<Breadcrumbs {...resolvedProps} />);
  };

  const getSeparators = (container: HTMLElement) =>
    Array.from(container.querySelectorAll("span")).filter(
      (separator) => separator.textContent === "/",
    );

  describe("rendering", () => {
    it("renders a named navigation container with a breadcrumb list", () => {
      renderBreadcrumbs();

      const list = getList();
      const navigation = getNavigation();
      const breadcrumbItems = getBreadcrumbItems();

      expect(navigation).toBeInTheDocument();
      expect(navigation).toBeVisible();
      expect(list).toBeVisible();
      expect(breadcrumbItems).toHaveLength(defaultItems.length);
    });

    it("renders links for all items except the last one", () => {
      renderBreadcrumbs();

      const links = screen.getAllByRole("link");

      expect(links).toHaveLength(2);
      expectBreadcrumbLink("Dashboard", "/dashboard");
      expectBreadcrumbLink("Orders", "/orders");
      expect(
        screen.queryByRole("link", { name: "Order Details" }),
      ).not.toBeInTheDocument();
      expect(screen.getByText("Order Details")).toBeVisible();
    });

    it("renders the current page as text when there is only one breadcrumb", () => {
      renderBreadcrumbs({
        items: [{ href: "/dashboard", title: "Dashboard" }],
      });

      expect(screen.queryAllByRole("link")).toHaveLength(0);
      expect(screen.getByText("Dashboard")).toBeVisible();
    });

    it("renders no links when items is empty", () => {
      renderBreadcrumbs({
        items: [],
      });
      const list = getList();

      expect(list).toBeEmptyDOMElement();
      expect(screen.queryAllByRole("link")).toHaveLength(0);
    });
  });

  describe("separators", () => {
    it("renders separators between breadcrumb items", () => {
      const { container } = renderBreadcrumbs();

      expect(getSeparators(container)).toHaveLength(2);
    });

    it("renders the current-item separator for a single item", () => {
      const { container } = renderBreadcrumbs({
        items: [{ href: "/dashboard", title: "Dashboard" }],
      });

      expect(getSeparators(container)).toHaveLength(1);
    });
  });

  describe("rerendering", () => {
    it("updates the rendered trail after rerender", () => {
      const { rerender } = renderBreadcrumbs({
        items: [
          { href: "/dashboard", title: "Dashboard" },
          { href: "/orders", title: "Orders" },
        ],
      });

      expect(screen.getByRole("link", { name: "Dashboard" })).toBeVisible();
      expect(screen.getByText("Orders")).toBeVisible();

      rerenderBreadcrumbs(rerender, {
        items: [
          { href: "/dashboard", title: "Dashboard" },
          { href: "/products", title: "Products" },
          { href: "/products/42", title: "Product Details" },
        ],
      });

      expectBreadcrumbLink("Products", "/products");
      expect(screen.getByText("Product Details")).toBeVisible();
      expect(screen.queryByText("Orders")).not.toBeInTheDocument();
    });
  });
});
