import {
  ProductPreview,
  SearchItem,
} from "@sellify/customer-ui-components/types";

import image from "./../../resources/1/image.jpg";
import image2 from "./../../resources/1/image2.jpg";

import image3 from "./../../resources/2/image.jpg";
import image4 from "./../../resources/2/image2.jpg";

import image5 from "./../../resources/3/image.jpg";
import image6 from "./../../resources/3/image2.jpg";

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

const searchItem: SearchItem = {
  productId: productPreview.productId,
  image: productPreview.image,
  title: productPreview.title,
};

const searchItem2: SearchItem = {
  productId: productPreview2.productId,
  image: productPreview2.image,
  title: productPreview2.title,
};

const searchItem3: SearchItem = {
  productId: productPreview3.productId,
  image: productPreview3.image,
  title: productPreview3.title,
};

let searchItems: Array<SearchItem> = [
  searchItem,
  searchItem2,
  searchItem3,
  searchItem,
  searchItem2,
  searchItem3,
  searchItem,
  searchItem2,
  searchItem3,
  searchItem,
  searchItem2,
  searchItem3,
  searchItem,
  searchItem2,
  searchItem3,
  searchItem,
  searchItem2,
  searchItem3,
];

// TODO  make it React Action
export function search(query: string): Array<SearchItem> {
  return searchItems;
}
