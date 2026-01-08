import {
  CartItem,
  Product,
  ProductDetails,
  ProductPreview,
} from "@sellify/admin-ui-components/types";

import image from "resources/1/image.jpg";
import image2 from "resources/1/image2.jpg";

import image3 from "resources/2/image.jpg";
import image4 from "resources/2/image2.jpg";

import image5 from "resources/3/image.jpg";
import image6 from "resources/3/image2.jpg";
import { getCategoryPreview } from "./category-actions";

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

const cartItem: CartItem = {
  amount: 2,
  product: productPreview,
  cartItemId: 0,
};

const cartItem2: CartItem = {
  amount: 2,
  product: productPreview2,
  cartItemId: 0,
};

const cartItem3: CartItem = {
  amount: 2,
  product: productPreview3,
  cartItemId: 0,
};

const categoryPreview = getCategoryPreview("");

const product: Product = {
  productId: 12323,
  image: image.src,
  status: "ACTIVE",
  title: "Product Title",
  shortDescription:
    "Short Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio. Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique risus. Nam faucibus imperdiet ante ut laoreet. Proin mollis pellentesque dictum. Integer sagittis nec mi sed dignissim. Curabitur consectetur elementum ligula, a vulputate arcu elementum quis. Nulla vehicula consectetur mauris vitae fringilla. Aliquam erat volutpat. Duis aliquam purus eget finibus bibendum. Proin viverra elit mauris, quis iaculis ex egestas bibendum. Proin hendrerit ligula id ipsum blandit, efficitur tempus est faucibus. In convallis tortor vitae aliquet fringilla. Morbi hendrerit efficitur urna, et porta sapien blandit nec.",
  description:
    "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio. Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique risus. Nam faucibus imperdiet ante ut laoreet. Proin mollis pellentesque dictum. Integer sagittis nec mi sed dignissim. Curabitur consectetur elementum ligula, a vulputate arcu elementum quis. Nulla vehicula consectetur mauris vitae fringilla. Aliquam erat volutpat. Duis aliquam purus eget finibus bibendum. Proin viverra elit mauris, quis iaculis ex egestas bibendum. Proin hendrerit ligula id ipsum blandit, efficitur tempus est faucibus. In convallis tortor vitae aliquet fringilla. Morbi hendrerit efficitur urna, et porta sapien blandit nec.",
  quantity: 0,
  category: categoryPreview,
  price: 443,
};

const product2: Product = {
  productId: 2344,
  image: image.src,
  status: "ARCHIVED",
  title:
    "Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title",
  shortDescription: "Short description | Short description | Short description",
  description:
    "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio. Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique risus. Nam faucibus imperdiet ante ut laoreet. Proin mollis pellentesque dictum. Integer sagittis nec mi sed dignissim. Curabitur consectetur elementum ligula, a vulputate arcu elementum quis. Nulla vehicula consectetur mauris vitae fringilla. Aliquam erat volutpat. Duis aliquam purus eget finibus bibendum. Proin viverra elit mauris, quis iaculis ex egestas bibendum. Proin hendrerit ligula id ipsum blandit, efficitur tempus est faucibus. In convallis tortor vitae aliquet fringilla. Morbi hendrerit efficitur urna, et porta sapien blandit nec.",
  quantity: 23,
  category: categoryPreview,
  price: 443,
};

const product3: Product = {
  productId: 45456456,
  image: image.src,
  status: "ARCHIVED",
  title:
    "LongUnbreakableProductTitle|LongUnbreakableProductTitleLongUnbreakableProductTitle",
  shortDescription: "Short description | Short description | Short description",
  description:
    "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio. Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique risus. Nam faucibus imperdiet ante ut laoreet. Proin mollis pellentesque dictum. Integer sagittis nec mi sed dignissim. Curabitur consectetur elementum ligula, a vulputate arcu elementum quis. Nulla vehicula consectetur mauris vitae fringilla. Aliquam erat volutpat. Duis aliquam purus eget finibus bibendum. Proin viverra elit mauris, quis iaculis ex egestas bibendum. Proin hendrerit ligula id ipsum blandit, efficitur tempus est faucibus. In convallis tortor vitae aliquet fringilla. Morbi hendrerit efficitur urna, et porta sapien blandit nec.",
  quantity: 34,
  category: categoryPreview,
  price: 2357,
};

const productDetails: ProductDetails = {
  productId: 12323,
  images: [
    image.src,
    image2.src,
    image3.src,
    image4.src,
    image5.src,
    image6.src,
  ],
  status: "ACTIVE",
  title: "Product Title",
  shortDescription:
    "Short Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio. Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique risus. Nam faucibus imperdiet ante ut laoreet. Proin mollis pellentesque dictum. Integer sagittis nec mi sed dignissim. Curabitur consectetur elementum ligula, a vulputate arcu elementum quis. Nulla vehicula consectetur mauris vitae fringilla. Aliquam erat volutpat. Duis aliquam purus eget finibus bibendum. Proin viverra elit mauris, quis iaculis ex egestas bibendum. Proin hendrerit ligula id ipsum blandit, efficitur tempus est faucibus. In convallis tortor vitae aliquet fringilla. Morbi hendrerit efficitur urna, et porta sapien blandit nec.",
  description:
    "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio. Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique risus. Nam faucibus imperdiet ante ut laoreet. Proin mollis pellentesque dictum. Integer sagittis nec mi sed dignissim. Curabitur consectetur elementum ligula, a vulputate arcu elementum quis. Nulla vehicula consectetur mauris vitae fringilla. Aliquam erat volutpat. Duis aliquam purus eget finibus bibendum. Proin viverra elit mauris, quis iaculis ex egestas bibendum. Proin hendrerit ligula id ipsum blandit, efficitur tempus est faucibus. In convallis tortor vitae aliquet fringilla. Morbi hendrerit efficitur urna, et porta sapien blandit nec.",
  quantity: 0,
  category: categoryPreview,
  price: 443,
  creationDate: "22 Feb 2025",
  lastModificationDate: "25 Feb 2025",
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

export function getProducts(): Array<Product> {
  const previews: Array<Product> = [
    product,
    product2,
    product,
    product,
    product,
    product3,
    product3,
    product3,
    product2,
    product2,
    product2,
    product3,
    product,
    product3,
  ];
  return previews;
}

export function filterProducts(query: string): Array<Product> {
  return [product, product2];
}

const cartItems: Array<CartItem> = [
  cartItem,
  cartItem3,
  cartItem2,
  cartItem,
  cartItem3,
  cartItem3,
  cartItem,
  cartItem2,
  cartItem,
  cartItem,
  cartItem2,
  cartItem3,
  cartItem2,
  cartItem,
];

export function getCartItems(): Array<CartItem> {
  return cartItems;
}

export function getProductById(productId: number): ProductDetails {
  return productDetails;
}
