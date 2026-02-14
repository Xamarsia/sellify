import ArrowLongRightIcon from "@sellify/common-icons/arrow-long-right";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";

import { CollectionPreview } from "../types";

type CollectionCardProps = {
  collectionPreview: CollectionPreview;
  href: string;
};

export default function CollectionCard({
  collectionPreview,
  href,
}: CollectionCardProps) {
  return (
    <div className="flex flex-col gap-4 w-full not-md:border-b border-stroke not-md:py-4">
      <div className="relative md:aspect-square rounded-md  not-md:h-96 object-cover overflow-hidden">
        <img
          src={collectionPreview.image}
          alt="Collection Card"
          className={`size-full object-cover rounded-md`}
        />
      </div>
      <div className="flex  flex-col justify-between">
        <LinkButton href={href}>
          <h4 className="line-clamp-2 break-all hover:underline">
            {collectionPreview.title}
          </h4>
          <ArrowLongRightIcon style="size-5 shrink-0" />
        </LinkButton>
      </div>
    </div>
  );
}
