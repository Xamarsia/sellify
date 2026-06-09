import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";

import type { ComponentProps, ReactElement } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";

type Product = {
  name: string;
  status: string;
};

type AdaptiveDataViewProps = ComponentProps<typeof AdaptiveDataView<Product>>;
type RerenderFn = (ui: ReactElement) => void;

describe("AdaptiveDataView", () => {
  const cellPrototypes: AdaptiveDataViewProps["cellPrototypes"] = [
    { title: "Name", buildView: (product) => <span>{product.name}</span> },
    {
      title: "Status",
      buildView: (product) => <span>{product.status}</span>,
    },
  ];

  const data: AdaptiveDataViewProps["data"] = [
    { name: "Alpha", status: "Active" },
    { name: "Beta", status: "Paused" },
  ];

  const defaultProps = {
    cellPrototypes,
    data,
  } satisfies AdaptiveDataViewProps;

  const renderAdaptiveDataView = (props: Partial<AdaptiveDataViewProps> = {}) =>
    render(<AdaptiveDataView {...defaultProps} {...props} />);

  const rerenderAdaptiveDataView = (
    rerender: RerenderFn,
    props: Partial<AdaptiveDataViewProps> = {},
  ) => rerender(<AdaptiveDataView {...defaultProps} {...props} />);

  const getBodyRows = () => screen.getAllByRole("row").slice(1);

  const expectTextInBothLayouts = (text: string) => {
    expect(within(screen.getByRole("table")).getByText(text)).toBeVisible();
    expect(within(screen.getByRole("list")).getByText(text)).toBeVisible();
  };

  describe("rendering", () => {
    it("renders table and list layouts from the same data", () => {
      renderAdaptiveDataView();

      expect(screen.getByRole("table")).toBeVisible();
      expect(screen.getByRole("list")).toBeVisible();
      expect(getBodyRows()).toHaveLength(data.length);
      expect(screen.getAllByRole("listitem")).toHaveLength(data.length);
      expectTextInBothLayouts("Alpha");
      expectTextInBothLayouts("Beta");
    });

    it("wraps each layout with its responsive visibility class", () => {
      renderAdaptiveDataView();

      const tableWrapper =
        screen.getByRole("table").parentElement?.parentElement;
      const listWrapper = screen.getByRole("list").parentElement;

      expect(tableWrapper).toHaveClass("not-sm:hidden");
      expect(listWrapper).toHaveClass("sm:hidden");
    });

    it("renders prototype titles and values in both layouts", () => {
      renderAdaptiveDataView();

      const table = screen.getByRole("table");
      const list = screen.getByRole("list");

      expect(within(table).getAllByRole("columnheader")).toHaveLength(
        cellPrototypes.length,
      );
      expect(
        within(table).getByRole("columnheader", { name: "Name" }),
      ).toBeVisible();
      expect(
        within(table).getByRole("columnheader", { name: "Status" }),
      ).toBeVisible();
      expect(within(list).getAllByText("Name")).toHaveLength(data.length);
      expect(within(list).getAllByText("Status")).toHaveLength(data.length);
      expectTextInBothLayouts("Active");
      expectTextInBothLayouts("Paused");
    });

    it("renders headers and empty layout bodies when data is empty", () => {
      renderAdaptiveDataView({ data: [] });

      expect(screen.getAllByRole("row")).toHaveLength(1);
      expect(screen.queryAllByRole("cell")).toHaveLength(0);
      expect(screen.getByRole("list")).toBeEmptyDOMElement();
      expect(screen.queryAllByRole("listitem")).toHaveLength(0);
    });
  });

  describe("rerendering", () => {
    it("updates both layouts when data changes", () => {
      const { rerender } = renderAdaptiveDataView();

      rerenderAdaptiveDataView(rerender, {
        data: [{ name: "Gamma", status: "Archived" }],
      });

      expect(screen.queryByText("Alpha")).not.toBeInTheDocument();
      expectTextInBothLayouts("Gamma");
      expectTextInBothLayouts("Archived");
      expect(getBodyRows()).toHaveLength(1);
      expect(screen.getAllByRole("listitem")).toHaveLength(1);
    });

    it("updates both layouts when cell prototypes change", () => {
      const { rerender } = renderAdaptiveDataView();

      rerenderAdaptiveDataView(rerender, {
        cellPrototypes: [
          {
            title: "Summary",
            buildView: ({ name, status }) => (
              <span>{`${name} is ${status}`}</span>
            ),
          },
        ],
      });

      expect(screen.queryByText("Name")).not.toBeInTheDocument();
      expect(screen.queryByText("Status")).not.toBeInTheDocument();
      expect(screen.getAllByText("Summary")).toHaveLength(data.length + 1);
      expectTextInBothLayouts("Alpha is Active");
      expectTextInBothLayouts("Beta is Paused");
    });
  });
});
