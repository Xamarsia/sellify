import { CollapsiblePanelInfo } from "@sellify/common-ui-components/types";
import { Banner } from "@sellify/customer-ui-components/types";

import image from "resources/1/image.jpg";
import image2 from "resources/1/image2.jpg";
import image3 from "resources/2/image.jpg";
import image5 from "resources/3/image.jpg";

const banner: Banner = {
  image: image5.src,
  title: "FAQs",
};

export function getFAQPageBanner(): Banner {
  return banner;
}

export function getFAQs(): Array<CollapsiblePanelInfo> {
  return new Array<CollapsiblePanelInfo>(
    {
      title: "Do you offer delivery services?",
      content: <p>Content</p>,
    },
    {
      title: "How long does shipping take?",
      content: <p>Content</p>,
    },
    {
      title: "Can I track my order?",
      content: <p>Content</p>,
    },
    {
      title: "Do you offer same-day delivery?",
      content: <p>Content</p>,
    },
  );
}
