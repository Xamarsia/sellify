import { Product } from "@sellify/customer-ui-components/types";
import { TabItemInfo } from "@sellify/common-ui-components/types";

import image from "resources/1/image.jpg";
import image2 from "resources/1/image2.jpg";

import image3 from "resources/2/image.jpg";
import image4 from "resources/2/image2.jpg";

import image5 from "resources/3/image.jpg";
import image6 from "resources/3/image2.jpg";

const product: Product = {
  productId: 12323,
  images: [image3.src, image4.src, image5.src],
  title: "Product Title",
  shortDescription:
    "Short Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio. Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique risus. Nam faucibus imperdiet ante ut laoreet. Proin mollis pellentesque dictum. Integer sagittis nec mi sed dignissim. Curabitur consectetur elementum ligula, a vulputate arcu elementum quis. Nulla vehicula consectetur mauris vitae fringilla. Aliquam erat volutpat. Duis aliquam purus eget finibus bibendum. Proin viverra elit mauris, quis iaculis ex egestas bibendum. Proin hendrerit ligula id ipsum blandit, efficitur tempus est faucibus. In convallis tortor vitae aliquet fringilla. Morbi hendrerit efficitur urna, et porta sapien blandit nec.",
  description:
    "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio. Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique risus. Nam faucibus imperdiet ante ut laoreet. Proin mollis pellentesque dictum. Integer sagittis nec mi sed dignissim. Curabitur consectetur elementum ligula, a vulputate arcu elementum quis. Nulla vehicula consectetur mauris vitae fringilla. Aliquam erat volutpat. Duis aliquam purus eget finibus bibendum. Proin viverra elit mauris, quis iaculis ex egestas bibendum. Proin hendrerit ligula id ipsum blandit, efficitur tempus est faucibus. In convallis tortor vitae aliquet fringilla. Morbi hendrerit efficitur urna, et porta sapien blandit nec.",
  status: 1,
  quantity: 0,
  category: "flowers",
  price: 443,
};

const product2: Product = {
  productId: 2344,
  images: [
    image.src,
    image2.src,
    image3.src,
    image4.src,
    image5.src,
    image6.src,
  ],
  title:
    "Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title",
  shortDescription: "Short description | Short description | Short description",
  description:
    "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio. Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique risus. Nam faucibus imperdiet ante ut laoreet. Proin mollis pellentesque dictum. Integer sagittis nec mi sed dignissim. Curabitur consectetur elementum ligula, a vulputate arcu elementum quis. Nulla vehicula consectetur mauris vitae fringilla. Aliquam erat volutpat. Duis aliquam purus eget finibus bibendum. Proin viverra elit mauris, quis iaculis ex egestas bibendum. Proin hendrerit ligula id ipsum blandit, efficitur tempus est faucibus. In convallis tortor vitae aliquet fringilla. Morbi hendrerit efficitur urna, et porta sapien blandit nec.",
  status: 1,
  quantity: 23,
  category: "flowers",
  price: 443,
};

// TODO  make it React Action
export function getProduct(productId: number): Product {
  return product2;
}

export function getProductOverviewTabs(): Array<TabItemInfo> {
  const tabs: Array<TabItemInfo> = [
    { href: "#description", title: "Description", content: (<p>Description</p>) },
    { href: "#care", title: "Care", content: (<p>Care</p>)  }, // Light, Watering, Humidity
    { href: "#pot", title: "Pot details", content: (<p>Pot details</p>)  },
  ];
  return tabs;
}

export function getProductMaxQuantity(productId: number): number {
  return 5;
}

export function getFeedLabels(): Array<string> {
  return ["home", "new", "bestsellers", "gifts"];
}
