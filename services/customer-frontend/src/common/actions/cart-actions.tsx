import {
  CartItem,
  ProductPreview,
} from "@sellify/customer-ui-components/types";

import image from "resources/1/image.jpg";
import image2 from "resources/1/image2.jpg";

import image3 from "resources/2/image.jpg";
import image4 from "resources/2/image2.jpg";

import image5 from "resources/3/image.jpg";
import image6 from "resources/3/image2.jpg";

const productPreview: ProductPreview = {
  image: image.src,
  hoveredImage: image2.src,
  price: 443,
  productId: 12323,
  title: "Product Title",
};

const productPreview2: ProductPreview = {
  image: image3.src,
  hoveredImage: image4.src,
  price: 443,
  productId: 2344,
  title:
    "Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title",
};

const productPreview3: ProductPreview = {
  image: image5.src,
  hoveredImage: image6.src,
  price: 443,
  productId: 23645,
  title:
    "LongUnbreakableProductTitleWord|LongUnbreakableProductTitleWordLongUnbreakableProductTitleWord",
};

const cartItem: CartItem = {
  amount: 2,
  product: productPreview2,
  cartItemId: 0,
};

let cartItems: Array<CartItem> = [
  cartItem,
  cartItem,
  cartItem,
  cartItem,
  cartItem,
  cartItem,
  cartItem,
  cartItem,
  cartItem,
  cartItem,
  cartItem,
  cartItem,
  cartItem,
  cartItem,
];

// TODO  make it React Action
export function getCartItems(): Array<CartItem> {
  return cartItems;
}

export function addToCart(product: ProductPreview): CartItem {
  const itemIndex: number = cartItems.findIndex(
    (cartItem) => cartItem.product.productId == product.productId,
  );
  if (itemIndex > -1) {
    const item = cartItems[itemIndex];
    if (item) {
      ++item.amount;
      cartItems[itemIndex] = item;
      return item;
    }
  }
  const newCartItem: CartItem = {
    amount: 1,
    product: product,
    cartItemId: 0,
  };
  cartItems.push(newCartItem);
  return newCartItem;
}

export function removeCartItem(productPreviewId: number): void {
  // TODO Implement
}

export function changeCartItemQuantity(
  cartItemId: number,
  quantity: number,
): void {
  // TODO Implement
}

export function getProductPreviews(
  productLabel: string,
): Array<ProductPreview> {
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
