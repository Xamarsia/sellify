import { CollectionPreview } from "../types";
import CollectionCard from "./CollectionCard";

type Props = {
  collections: Array<CollectionPreview>;
};

export default function CollectionCardsFeed({ collections }: Props) {
  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:grid-cols-4">
      {collections.map((preview, index) => (
        <li key={preview.title.toString() + index}>
          <CollectionCard href={`/collection/${preview.id}`} collectionPreview={preview} />
        </li>
      ))}
    </ul>
  );
}
