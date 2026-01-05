import { Product, ProductPreview } from "@sellify/admin-ui-components/types";

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
  category: "flowers",
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
  category: "flowers",
  price: 443,
};

const product3: Product = {
  productId: 45456456,
  image: image.src,
  status: "ARCHIVED",
  title: "LongUnbreakableProductTitle|LongUnbreakableProductTitleLongUnbreakableProductTitle",
  shortDescription: "Short description | Short description | Short description",
  description:
    "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio. Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique risus. Nam faucibus imperdiet ante ut laoreet. Proin mollis pellentesque dictum. Integer sagittis nec mi sed dignissim. Curabitur consectetur elementum ligula, a vulputate arcu elementum quis. Nulla vehicula consectetur mauris vitae fringilla. Aliquam erat volutpat. Duis aliquam purus eget finibus bibendum. Proin viverra elit mauris, quis iaculis ex egestas bibendum. Proin hendrerit ligula id ipsum blandit, efficitur tempus est faucibus. In convallis tortor vitae aliquet fringilla. Morbi hendrerit efficitur urna, et porta sapien blandit nec.",
  quantity: 34,
  category: "flowers",
  price: 2357,
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
