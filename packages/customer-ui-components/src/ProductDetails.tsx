"use client";

import { useCallback, useState } from "react";

import ProductImagesSlider from "@sellify/common-ui-components/slider/ProductImagesSlider";
import Button from "@sellify/common-ui-components/buttons/Button";

import CounterButton from "./CounterButton";
import { ProductDetails as ProductDetailsType } from "./types";

type Props = {
  product: ProductDetailsType;
  onAddProductToCart: (product: ProductDetailsType) => void;
};

export default function ProductDetails({ product, onAddProductToCart }: Props) {
  const [quantity, setQuantity] = useState<number>(1);

  const onAddToCart = useCallback((): void => {
    onAddProductToCart(product);
  }, [onAddProductToCart]);

  return (
    <div className="flex gap-8 items-center flex-col lg:flex-row w-full">
      <ProductImagesSlider images={product.images} />
      <div className="w-full flex flex-col gap-8 h-full justify-between">
        <div className="flex flex-col gap-8 ">
          <h2 className="text-justify break-all">{product.title}</h2>
          <p>${product.price.toFixed(2)}</p>
          <p>{product.category}</p>
          <p>{product.shortDescription}</p>
        </div>
        <div className="flex w-full gap-4 justify-between items-center">
          <CounterButton
            count={quantity}
            onCountChange={setQuantity}
            min={1}
            max={product.quantity}
          />
          <Button onClick={onAddToCart} fill="parent">
            <p>Add to Cart</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
