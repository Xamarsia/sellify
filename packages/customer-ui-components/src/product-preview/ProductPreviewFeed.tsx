import ProductPreview from "./ProductPreview";

type Props = {
  previews: Array<ProductPreview>;
  onProductAddedToCart: (productId: number) => void;
};

export default function ProductPreviewFeed({
  previews,
  onProductAddedToCart,
}: Props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4">
      {previews.map((productPreview, index) => (
        <li key={productPreview.productId.toString() + index}>
          <ProductPreview
            productPreview={productPreview}
            onProductAddedToCart={onProductAddedToCart}
          />
        </li>
      ))}
    </ul>
  );
}
