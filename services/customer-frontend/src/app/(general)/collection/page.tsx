import "server-only";

import { CollectionPreview } from "@sellify/customer-ui-components/types";

import { getCollectionPreviews } from "common/actions/collection-actions";
import CollectionsPageContent from "components/pages-content/CollectionsPageContent";

export default async function CollectionsPage() {
  const collections: Array<CollectionPreview> = getCollectionPreviews();

  return (
    <CollectionsPageContent collections={collections} />
  );
}
