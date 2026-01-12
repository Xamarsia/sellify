import { InventoryProduct } from "@sellify/admin-ui-components/types";

import image from "resources/1/image.jpg";
import image3 from "resources/2/image.jpg";
import image5 from "resources/3/image.jpg";

const inventory: InventoryProduct = {
  image: image.src,
  productTitle: "Product Title",
  productId: 43545445,
  quantity: 2,
};

const inventory2: InventoryProduct = {
  image: image3.src,
  productTitle:
    "LongUnbreakableCategoryTitleWord|LongUnbreakableCategoryTitleWordLongUnbreakableCategoryTitleWord",
  productId: 43545445,
  quantity: 3425,
};

const inventory3: InventoryProduct = {
  image: image5.src,
  productTitle:
    "Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title",
  productId: 43545445,
  quantity: 231424233,
};

export function filterInventoryProducts(query: string): Array<InventoryProduct> {
  return [inventory, inventory3];
}

export function getInventoryProducts(): Array<InventoryProduct> {
  return [
    inventory3,
    inventory,
    inventory2,
    inventory2,
    inventory,
    inventory3,
    inventory2,
    inventory2,
    inventory2,
    inventory3,
    inventory,
    inventory3,
    inventory,
    inventory3,
    inventory3,
    inventory2,
    inventory3,
    inventory3,
    inventory,
    inventory3,
    inventory,
    inventory,
    inventory,
    inventory,
  ];
}

export function setProductQuantity(
  productId: number,
  quantity: number,
): boolean {
  console.log("Add product quantity");
  return false;
}
