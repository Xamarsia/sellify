import { CollectionPreview } from "@sellify/customer-ui-components/types";

import image from "resources/1/image.jpg";
import image2 from "resources/1/image2.jpg";
import image3 from "resources/2/image.jpg";
import image5 from "resources/3/image.jpg";

const collectionPreviews: Array<CollectionPreview> = [
    { image: image.src, title: "Collection Card" },
    {
        image: image2.src,
        title:
            "Collection Card Collection Card Collection Card Collection Card CollectionCardCollectionCardCollectionCard",
    },
    {
        image: image3.src,
        title: "Collection Card Collection Card Collection Card",
    },
    {
        image: image5.src,
        title: "CollectionCardCollectionCardCollectionCardCollectionCard",
    },
];

export function getCollectionPreviews(): Array<CollectionPreview> {
    return collectionPreviews;
}
