import ProductPreview from "./ProductPreview";

type Props = {
  previews: Array<ProductPreview>;
  onProductAddedToCart: (productPreview: ProductPreview) => void;
};

export default function ProductPreviewFeed({
  previews,
  onProductAddedToCart,
}: Props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
      {previews.map((productPreview, index) => (
        <li key={productPreview.productId.toString() + index}>
          <ProductPreview
            productPreview={productPreview}
            onAddProductToCart={onProductAddedToCart}
          />
        </li>
      ))}
    </ul>
  );
}
