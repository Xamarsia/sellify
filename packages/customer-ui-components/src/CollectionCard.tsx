import ArrowLongRightIcon from "@sellify/common-icons/arrow-long-right";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import { CollectionPreview } from "./types";

type Props = {
  collectionPreview: CollectionPreview;
  href: string;
};

export default function CollectionCard({ collectionPreview, href }: Props) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="relative md:aspect-square rounded-md  not-md:h-96 object-cover overflow-hidden">
        <img
          src={collectionPreview.image}
          alt="Collection Card"
          className={`size-full object-cover rounded-md`}
        />
      </div>
      <div className="flex  flex-col justify-between">
        <LinkButton href={href}>
          <label className="line-clamp-2 break-all hover:underline underline-offset-3">
            {collectionPreview.title}
          </label>
          <ArrowLongRightIcon style="size-5 shrink-0" />
        </LinkButton>
      </div>
    </div>
  );
}
