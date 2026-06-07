import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import TableView from "@sellify/common-ui-components/view/TableView";

type Product = {
  name: string;
  status: string;
};

type TableViewProps = ComponentProps<typeof TableView<Product>>;
type RerenderFn = (ui: ReactElement) => void;

describe("TableView", () => {
  const cellPrototypes: TableViewProps["cellPrototypes"] = [
    { title: "Name", viewBuilder: (product) => <span>{product.name}</span> },
    {
      title: "Status",
      viewBuilder: (product) => <span>{product.status}</span>,
    },
  ];

  const data: TableViewProps["data"] = [
    { name: "Alpha", status: "Active" },
    { name: "Beta", status: "Paused" },
  ];

  const defaultProps = {
    cellPrototypes,
    data,
  } satisfies TableViewProps;

  const renderTableView = (props: Partial<TableViewProps> = {}) =>
    render(<TableView {...defaultProps} {...props} />);

  const rerenderTableView = (
    rerender: RerenderFn,
    props: Partial<TableViewProps> = {},
  ) => rerender(<TableView {...defaultProps} {...props} />);

  const getBodyRows = () => screen.getAllByRole("row").slice(1);

  describe("rendering", () => {
    it("renders one header per prototype and one body row per data row", () => {
      renderTableView();

      expect(screen.getByRole("table")).toBeVisible();
      expect(screen.getAllByRole("columnheader")).toHaveLength(
        cellPrototypes.length,
      );
      expect(getBodyRows()).toHaveLength(data.length);
    });

    it("renders prototype titles as headers and built values as cells", () => {
      renderTableView();
      const bodyRows = getBodyRows();
      const firstRow = bodyRows[0] as HTMLElement;
      const secondRow = bodyRows[1] as HTMLElement;

      expect(screen.getByRole("columnheader", { name: "Name" })).toBeVisible();
      expect(
        screen.getByRole("columnheader", { name: "Status" }),
      ).toBeVisible();
      expect(within(firstRow).getByText("Alpha")).toBeVisible();
      expect(within(firstRow).getByText("Active")).toBeVisible();
      expect(within(secondRow).getByText("Beta")).toBeVisible();
      expect(within(secondRow).getByText("Paused")).toBeVisible();
    });

    it("passes each complete data row to every view builder", () => {
      renderTableView({
        cellPrototypes: [
          {
            title: "Summary",
            viewBuilder: ({ name, status }) => (
              <span>{`${name} is ${status}`}</span>
            ),
          },
        ],
      });

      expect(screen.getByText("Alpha is Active")).toBeVisible();
      expect(screen.getByText("Beta is Paused")).toBeVisible();
    });

    it("renders only the header row when no data is provided", () => {
      renderTableView({ data: [] });

      expect(screen.getAllByRole("row")).toHaveLength(1);
      expect(screen.queryAllByRole("cell")).toHaveLength(0);
    });
  });

  describe("rerendering", () => {
    it("updates rendered rows when data changes", () => {
      const { rerender } = renderTableView();

      rerenderTableView(rerender, {
        data: [{ name: "Gamma", status: "Archived" }],
      });

      expect(screen.queryByText("Alpha")).not.toBeInTheDocument();
      expect(screen.getByText("Gamma")).toBeVisible();
      expect(screen.getByText("Archived")).toBeVisible();
      expect(getBodyRows()).toHaveLength(1);
    });

    it("updates headers and cells when prototypes change", () => {
      const { rerender } = renderTableView();

      rerenderTableView(rerender, {
        cellPrototypes: [
          {
            title: "Summary",
            viewBuilder: ({ name, status }) => (
              <span>{`${name} is ${status}`}</span>
            ),
          },
        ],
      });

      expect(screen.queryByText("Name")).not.toBeInTheDocument();
      expect(screen.queryByText("Status")).not.toBeInTheDocument();
      expect(
        screen.getByRole("columnheader", { name: "Summary" }),
      ).toBeVisible();
      expect(screen.getByText("Alpha is Active")).toBeVisible();
      expect(screen.getByText("Beta is Paused")).toBeVisible();
      expect(screen.getAllByRole("cell")).toHaveLength(data.length);
    });
  });
});
