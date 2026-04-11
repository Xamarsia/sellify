"use client";

import { ReactNode, useCallback, useState } from "react";

import PlusIcon from "@sellify/common-icons/plus";
import MinusIcon from "@sellify/common-icons/minus";

type CollapsiblePanelProps = {
  panelTitle: string;
  children: ReactNode;
};

export default function CollapsiblePanel({
  panelTitle,
  children: content,
}: CollapsiblePanelProps) {
  const [isExtended, setIsExtended] = useState<boolean>(false);

  const onSectionClick = useCallback(() => {
    setIsExtended(!isExtended);
  }, [isExtended]);

  return (
    <div className="flex flex-col w-full border-b border-b-stroke">
      <button
        onClick={onSectionClick}
        className={`flex items-center h-16 justify-between w-full bg-white capitalize *:h-6
          cursor-pointer ${isExtended ? "text-black" : "text-secondary hover:text-black"}`}
      >
        <h4>{panelTitle}</h4>
        {isExtended ? <MinusIcon /> : <PlusIcon />}
      </button>
      <div className="flex w-full">
        {isExtended && <div className="flex w-full pb-4">{content}</div>}
      </div>
    </div>
  );
}
