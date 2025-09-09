"use client";

import { useCallback, useState } from "react";

import ProductImagesSlider from "@sellify/common-ui-components/slider/ProductImagesSlider";
import Button from "@sellify/common-ui-components/buttons/Button";

import CounterButton from "./CounterButton";

type Props = {
  product: Product;
  onAddProductToCart: (product: Product) => void;
};

export default function ProductDetails({ product, onAddProductToCart }: Props) {
  const [count, setCount] = useState<number>(1);
  const onAddToCart = useCallback((): void => {
    onAddProductToCart(product);
  }, [onAddProductToCart]);

  return (
    <div className="flex gap-8">
      <ProductImagesSlider images={product.images} />
      <div className="h-[536px] flex flex-col gap-8 h-full justify-between">
        <div className="flex flex-col gap-8 ">
          <h2 className="text-justify break-all">{product.title}</h2>
          <p>${product.price}</p>
          <p>{product.category}</p>
          <p>{product.shortDescription}</p>
        </div>
        <div className="flex w-full gap-4 justify-between items-center">
          <CounterButton
            count={count}
            onCountChange={setCount}
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
