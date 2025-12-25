import { ReactNode, useMemo } from "react";

import { Category } from "../types";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

type Props = {
  content: Array<Category>;
};

export default function CategoriesView({ content }: Props) {
  const tableHeader: Array<string> = ["Category", "Related products"];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((category) => [
      <LinkButton>
        <p className="line-clamp-3 break-all min-w-20 max-w-96 not-sm:pl-14">
          {category.title}
        </p>
      </LinkButton>,
      <p>
        {category.relatedProductsCount +
          `${category.relatedProductsCount > 1 ? " products" : " product"}`}
      </p>,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
