import { ProductStatus } from "@sellify/common-ui-components/types";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";

import ProductStatusComponent from "../statuses/ProductStatusComponent";
import {CategoryPreview } from "../types";

type ProductInfoProps = {
    status: ProductStatus
    category: CategoryPreview,
    price: number,
    creationDate: string,
    lastModificationDate: string
};

export default function ProductInfo({ status, category, price, creationDate, lastModificationDate }: ProductInfoProps) {
  return (
    <>
      <div className="flex w-full gap-4">
        <p>{`Status:`}</p>
        <ProductStatusComponent status={status} />
      </div>
      <div className="flex w-full items-center gap-4">
        <p>{`Category:`}</p>
        <LinkButton>
          <h4>{category.title}</h4>
        </LinkButton>
      </div>
      <p>{`Price: ${price}`}</p>
      <p>{`Creation date: ${creationDate}`}</p>
      <p>{`Last modification date: ${lastModificationDate}`}</p>
    </>
  );
}
