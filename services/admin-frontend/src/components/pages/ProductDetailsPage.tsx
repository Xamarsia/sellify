"use client";

import { useCallback, useContext } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import ProductImagesSlider from "@sellify/common-ui-components/slider/ProductImagesSlider";

import InfoSection from "@sellify/admin-ui-components/InfoSection";
import ProductInfo from "@sellify/admin-ui-components/details/ProductInfo";
import { ProductDetails } from "@sellify/admin-ui-components/types";

import { deleteProduct } from "common/actions/product-actions";
import { RiskDialogContext } from "common/contexts/common-context";
import { RiskDialogContent, RiskDialogController } from "types";
import { isPasswordValid } from "common/actions/auth-actions";

type Props = {
  product: ProductDetails;
};

export default function ProductDetailsPage({ product }: Props) {
  const { showRiskDialog } =
    useContext<RiskDialogController>(RiskDialogContext);

  const onDeleteProduct = useCallback((): void => {
    deleteProduct(product.productId);
  }, [showRiskDialog]);

  const openRiskDialog = useCallback((): void => {
    const alertDialogContent: RiskDialogContent = {
      title: "Delete Product",
      buttonActionTitle: "Delete Product",
      description: "Are you sure you want to delete the current product.",
      onConfirm: isPasswordValid,
      onPasswordValidated: onDeleteProduct,
    };
    showRiskDialog(alertDialogContent);
  }, [showRiskDialog]);

  return (
    <>
      <h1 className="py-4">{`Product: ${product.title} #${product.productId}`}</h1>

      <InfoSection title="Product Details">
        <ProductInfo
          category={product.category}
          price={product.price}
          status={product.status}
          creationDate={product.creationDate}
          lastModificationDate={product.lastModificationDate}
        />
      </InfoSection>

      <InfoSection title="Short Description">
        <p>{product.shortDescription}</p>
      </InfoSection>

      <InfoSection title="Description">
        <p>{product.description}</p>
      </InfoSection>

      <InfoSection title="Media">
        <ProductImagesSlider images={product.images} />
      </InfoSection>

      <div className="flex w-full justify-between p-1">
        <Button variant="destructive" onClick={openRiskDialog}>
          Delete Product
        </Button>
        <Button>Edit Product</Button>
      </div>
    </>
  );
}
