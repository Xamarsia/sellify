import "server-only";

import Button from "@sellify/common-ui-components/buttons/Button";
import FormSection from "@sellify/common-ui-components/FormSection";
import ProductImagesSlider from "@sellify/common-ui-components/slider/ProductImagesSlider";

import ProductInfo from "@sellify/admin-ui-components/details/ProductInfo";
import { ProductDetails } from "@sellify/admin-ui-components/types";

import BackButton from "components/BackButton";
import { getProductById } from "common/actions/product-actions";

type Props = {
  params: Promise<{ productId: number }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const productId: number = (await params).productId;
  const product: ProductDetails = getProductById(productId);

  return (
    <div className="flex w-full flex-col gap-12">
      <BackButton />
      <h1 className="py-4">{`Product: ${product.title} #${product.productId}`}</h1>

      <FormSection title="Product Details">
        <ProductInfo
          category={product.category}
          price={product.price}
          status={product.status}
          creationDate={product.creationDate}
          lastModificationDate={product.lastModificationDate}
        />
      </FormSection>

      <FormSection title="Short Description">
        <p>{product.shortDescription}</p>
      </FormSection>

      <FormSection title="Description">
        <p>{product.description}</p>
      </FormSection>

      <FormSection title="Media">
        <ProductImagesSlider images={product.images} />
      </FormSection>

      <div className="flex w-full justify-between p-1">
        <Button variant="destructive">Delete Product</Button>
        <Button>Edit Product</Button>
      </div>
    </div>
  );
}
