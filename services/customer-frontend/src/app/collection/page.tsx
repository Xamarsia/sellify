import "server-only";

import { CollectionPreview } from "@sellify/customer-ui-components/types";
import { getCollectionPreviews } from "common/actions/collection-actions";
import CollectionCard from "@sellify/customer-ui-components/CollectionCard";

export default async function CollectionsPage() {
  const collections: Array<CollectionPreview> = getCollectionPreviews();

  return (
    <div className="flex w-full flex-col gap-9 ">
      <h1>All Collections</h1>

      <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:grid-cols-4">
        {collections.map((preview, index) => (
          <li key={preview.title.toString() + index}>
            <CollectionCard href="/" collectionPreview={preview} />
          </li>
        ))}
      </ul>
    </div>
  );
}
