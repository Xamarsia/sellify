import Button from "@sellify/common-ui-components/buttons/Button";

type Props = {
  cartItem: CartItem;
};

export default function AddedToCartDialogContent({
  cartItem
}: Props) {
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
        <div className="flex basis-64 my-2 mx-4 flex flex-col gap-4 h-24 justify-between shrink-0">
          {/* TODO add link to Product page */}
          <a href="/">
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
      <Button variant="default" size="small" fill="parent">
        <p>Checkout</p>
      </Button>
    </div>
  );
}
