import { ProductPreview } from "@sellify/admin-ui-components/types";

import image from "resources/1/image.jpg";
import image3 from "resources/2/image.jpg";
import image5 from "resources/3/image.jpg";

const productPreview: ProductPreview = {
  image: image.src,
  price: 443,
  productId: 12323,
  title: "Product Title",
};

const productPreview2: ProductPreview = {
  image: image3.src,
  price: 443,
  productId: 2344,
  title:
    "Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title",
};

const productPreview3: ProductPreview = {
  image: image5.src,
  price: 443,
  productId: 23645,
  title:
    "LongUnbreakableProductTitleWord|LongUnbreakableProductTitleWordLongUnbreakableProductTitleWord",
};

export function getProductPreviews(): Array<ProductPreview> {
  const previews: Array<ProductPreview> = [
    productPreview,
    productPreview2,
    productPreview3,
    productPreview,
    productPreview2,
    productPreview3,
    productPreview,
    productPreview2,
    productPreview3,
    productPreview,
    productPreview2,
    productPreview3,
    productPreview,
    productPreview2,
    productPreview3,
    productPreview,
    productPreview2,
    productPreview3,
  ];
  return previews;
}
