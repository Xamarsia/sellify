"use client";

import { useCallback, useContext } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import FormSection from "@sellify/common-ui-components/FormSection";
import ProductImagesSlider from "@sellify/common-ui-components/slider/ProductImagesSlider";

import ProductInfo from "@sellify/admin-ui-components/details/ProductInfo";
import { ProductDetails } from "@sellify/admin-ui-components/types";

import BackButton from "components/BackButton";
import { deleteProduct } from "common/actions/product-actions";
import { RiskDialogContext } from "common/contexts/common-context";
import { RiskDialogContent, RiskDialogController } from "types";
import { isPasswordValid } from "common/actions/auth-actions";

type Props = {
  product: ProductDetails;
};

export default function ProductDetailsPage({ product }: Props) {
  const { showDangerAlertDialog } =
    useContext<RiskDialogController>(RiskDialogContext);

  const onDeleteProduct = useCallback((): void => {
    deleteProduct(product.productId);
  }, [showDangerAlertDialog]);

  const openRiskDialog = useCallback((): void => {
    const alertDialogContent: RiskDialogContent = {
      title: "Delete Product",
      buttonActionTitle: "Delete Product",
      description: "Are you sure you want to delete the current product.",
      onConfirm: isPasswordValid,
      onPasswordValidated: onDeleteProduct,
    };
    showDangerAlertDialog(alertDialogContent);
  }, [showDangerAlertDialog]);

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
        <Button variant="destructive" onClick={openRiskDialog}>
          Delete Product
        </Button>
        <Button>Edit Product</Button>
      </div>
    </div>
  );
}
