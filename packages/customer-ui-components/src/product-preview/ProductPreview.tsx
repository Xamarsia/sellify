import { useCallback } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";

import ProductPreviewImage from "./ProductPreviewImage";

type Props = {
  productPreview: ProductPreview;
  onAddProductToCart: (productPreview: ProductPreview) => void;
};

export default function ProductPreview({
  productPreview,
  onAddProductToCart,
}: Props) {
  const onAddToCart = useCallback((): void => {
    onAddProductToCart(productPreview);
  }, [onAddProductToCart]);

  return (
    <div className="flex flex-row md:flex-col body gap-4 md:gap-0 justify-between wrap-anywhere not-md:border-b border-stroke not-md:py-4">
      <div className="flex not-md:basis-64">
        <ProductPreviewImage
          src={productPreview.image}
          hoveredSrc={productPreview.hoveredImage}
        />
      </div>
      <div className="flex not-md:basis-128 flex-col justify-between">
        <div className="flex flex-col shrink-0 justify-between gap-4 h-24 mx-2 md:my-4 pb-2">
          {/* TODO add link to Product page */}
          <a href="/">
            <h4 className="not-md:text-justify line-clamp-2 break-all hover:underline underline-offset-3">
              {productPreview.title}
            </h4>
          </a>
          <p>${productPreview.price}</p>
        </div>
        <Button
          variant="outline"
          size="small"
          onClick={onAddToCart}
          fill="parent"
        >
          <p>Add to Cart</p>
        </Button>
      </div>
    </div>
  );
}
