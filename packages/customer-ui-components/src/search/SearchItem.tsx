import { SearchItem as SearchItemType } from "../types";

type Props = {
  searchItem: SearchItemType;
};

export default function SearchItem({ searchItem }: Props) {
  return (
    <div className="flex gap-4 justify-between items-top">
      <div className="flex size-24 aspect-square rounded-md">
        <img
          src={searchItem.image}
          alt="Product image"
          className={`size-full object-cover rounded-md`}
        />
      </div>

      <div className="grow my-2">
        {/* TODO add link to Product page */}
        <a href="/">
          <h4 className="text-justify line-clamp-2 break-all hover:underline underline-offset-3">
            {searchItem.title}
          </h4>
        </a>
      </div>
    </div>
  );
}
