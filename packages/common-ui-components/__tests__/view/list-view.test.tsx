import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";

import { ComponentProps, ReactElement } from "react";

import ListView from "@sellify/common-ui-components/view/ListView";

type Product = {
  name: string;
  status: string;
};

type ListViewProps = ComponentProps<typeof ListView<Product>>;
type RerenderFn = (ui: ReactElement) => void;

describe("ListView", () => {
  const cellPrototypes: ListViewProps["cellPrototypes"] = [
    { title: "Name", viewBuilder: (product) => <span>{product.name}</span> },
    {
      title: "Status",
      viewBuilder: (product) => <span>{product.status}</span>,
    },
  ];

  const data: ListViewProps["data"] = [
    { name: "Alpha", status: "Active" },
    { name: "Beta", status: "Paused" },
  ];

  const defaultProps = {
    cellPrototypes,
    data,
  } satisfies ListViewProps;

  const renderListView = (props: Partial<ListViewProps> = {}) =>
    render(<ListView {...defaultProps} {...props} />);

  const rerenderListView = (
    rerender: RerenderFn,
    props: Partial<ListViewProps> = {},
  ) => rerender(<ListView {...defaultProps} {...props} />);

  describe("rendering", () => {
    it("renders one list item per data row", () => {
      renderListView();

      expect(screen.getByRole("list")).toBeVisible();
      expect(screen.getAllByRole("listitem")).toHaveLength(data.length);
    });

    it("renders every prototype title and built value for each row", () => {
      renderListView();

      const listItems = screen.getAllByRole("listitem");
      const firstItem = listItems[0] as HTMLElement;
      const secondItem = listItems[1] as HTMLElement;

      expect(within(firstItem).getByText("Name")).toBeVisible();
      expect(within(firstItem).getByText("Status")).toBeVisible();
      expect(within(firstItem).getByText("Alpha")).toBeVisible();
      expect(within(firstItem).getByText("Active")).toBeVisible();

      expect(within(secondItem).getByText("Name")).toBeVisible();
      expect(within(secondItem).getByText("Status")).toBeVisible();
      expect(within(secondItem).getByText("Beta")).toBeVisible();
      expect(within(secondItem).getByText("Paused")).toBeVisible();
    });

    it("passes each complete data row to every view builder", () => {
      renderListView({
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

    it("renders an empty list when no data is provided", () => {
      renderListView({ data: [] });

      expect(screen.getByRole("list")).toBeEmptyDOMElement();
      expect(screen.queryAllByRole("listitem")).toHaveLength(0);
    });
  });

  describe("rerendering", () => {
    it("updates rendered rows when data changes", () => {
      const { rerender } = renderListView();

      rerenderListView(rerender, {
        data: [{ name: "Gamma", status: "Archived" }],
      });

      expect(screen.queryByText("Alpha")).not.toBeInTheDocument();
      expect(screen.getByText("Gamma")).toBeVisible();
      expect(screen.getByText("Archived")).toBeVisible();
      expect(screen.getAllByRole("listitem")).toHaveLength(1);
    });

    it("updates labels and values when cell prototypes change", () => {
      const { rerender } = renderListView();

      rerenderListView(rerender, {
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
      expect(screen.getAllByText("Summary")).toHaveLength(data.length);
      expect(screen.getByText("Alpha is Active")).toBeVisible();
      expect(screen.getByText("Beta is Paused")).toBeVisible();
    });
  });
});
