import { Collection } from "../types";

type Props = {
  collection: Collection;
};

export default function CollectionBanner({ collection }: Props) {
  return (
    <div className="relative w-full h-[286px] object-cover overflow-hidden">
      <div className="absolute flex flex-col left-0 h-full bottom-0 p-8 justify-center gap-8 lg:max-w-1/2 ">
        <h1 className="not-md:hidden">{collection.title}</h1>
        <h2 className="md:hidden title">{collection.title}</h2>
        <p className="body">{collection.description}</p>
      </div>
      <img
        src={collection.image}
        alt="Collection Card"
        className={`size-full object-cover`}
      />
    </div>
  );
}
