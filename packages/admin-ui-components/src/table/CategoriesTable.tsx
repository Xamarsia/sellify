import { ReactNode, useMemo } from "react";

import Table from "@sellify/common-ui-components/table/Table";
import { Category } from "../types";

type Props = {
  content: Array<Category>;
};

export default function CategoriesTable({ content }: Props) {
  const tableHeader: Array<string> = ["Category", "Related products"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((category) => [
      <p>{category.title}</p>,
      <p>
        {category.relatedProductsCount +
          `${category.relatedProductsCount > 1 ? " products" : " product"}`}
      </p>,
    ]);
  }, [content]);

  return <Table head={tableHeader} content={getContentArray} />;
}
