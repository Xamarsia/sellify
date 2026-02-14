import Button from "@sellify/common-ui-components/buttons/Button";

import { CartItem, ProductPreview } from "../../types";

type ProductAddedDialogContentProps = {
  cartItem: CartItem;
  onCheckout?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ProductAddedDialogContent({
  cartItem,
  onCheckout,
}: ProductAddedDialogContentProps) {
  const product: ProductPreview = cartItem.product;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row">
        <div className="flex basis-64 aspect-square rounded-md">
          <img
            src={product.image}
            alt="Product image"
            className={`size-full object-cover rounded-md`}
          />
        </div>
        <div className="flex flex-col basis-64 my-2 mx-4 gap-4 h-24 justify-between shrink-0">
          <a href={`/product/${product.productId}`}>
            <h4 className="text-justify line-clamp-2 break-all hover:underline underline-offset-3">
              {product.title}
            </h4>
          </a>
          <div className="flex gap-2">
            <p> {cartItem.amount} </p>
            <p>×</p>
            <h4>$ {product.price}</h4>
          </div>
        </div>
      </div>
      <Button variant="default" size="small" fill="parent" onClick={onCheckout}>
        <p>Checkout</p>
      </Button>
    </div>
  );
}
