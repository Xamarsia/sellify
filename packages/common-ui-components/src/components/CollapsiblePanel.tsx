"use client";

import { ReactNode, useCallback, useState } from "react";

import PlusIcon from "@sellify/common-icons/plus";
import MinusIcon from "@sellify/common-icons/minus";

type CollapsiblePanelProps = {
  panelTitle: string; // Displayed in the clickable panel header.
  children: ReactNode;
};

/**
 * Renders a collapsible panel with a header button that toggles its content.
 * Shows a plus icon when collapsed and a minus icon when expanded.
 * @param panelTitle - Text shown in the panel header.
 * @param children - Content rendered inside the panel when it is expanded.
 */
export default function CollapsiblePanel({
  panelTitle,
  children: content,
}: CollapsiblePanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = useCallback(() => {
    setIsExpanded((currentValue) => !currentValue);
  }, []);

  return (
    <div className="flex flex-col w-full border-b border-b-stroke">
      <button
        onClick={toggleSection}
        className={`flex items-center h-16 justify-between w-full bg-white capitalize *:h-6
          cursor-pointer ${isExpanded ? "text-black" : "text-secondary hover:text-black"}`}
      >
        <h4>{panelTitle}</h4>
        {isExpanded ? <MinusIcon /> : <PlusIcon />}
      </button>
      {isExpanded && <div className="flex w-full pb-4">{content}</div>}
    </div>
  );
}
