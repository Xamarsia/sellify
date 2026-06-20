"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import ChevronDownIcon from "@sellify/common-icons/chevron-down";
import ChevronUpIcon from "@sellify/common-icons/chevron-up";

import DropdownItem from "./DropdownItem";

type DropdownProps = {
  title: string;
  items: Map<string, string>;
  selectedKey?: string;
  disabled?: boolean;
  onKeySelected: (key: string) => void;
};

/**
 * Renders a dropdown for selecting one string-keyed item.
 *
 * The trigger displays the selected item label or the fallback title. The
 * menu closes after selection or when the user clicks outside it.
 *
 * @param title - Fallback text displayed when no item is selected
 * @param items - Available item keys and display labels
 * @param selectedKey - Key of the currently selected item
 * @param disabled - Whether the dropdown trigger is disabled
 * @param onKeySelected - Callback invoked with the selected item key
 */
export default function Dropdown({
  title,
  items,
  selectedKey,
  disabled,
  onKeySelected,
}: DropdownProps) {
  const [isExtended, setIsExtended] = useState<boolean>(false);
  const dropdown = useRef<HTMLDivElement>(null);

  const getCurrentText = useCallback((): string => {
    if (selectedKey) {
      const selectedOptionText = items.get(selectedKey);
      return selectedOptionText ?? title;
    }
    return title;
  }, [items, selectedKey, title]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (isExtended && !dropdown.current?.contains(e.target as Node)) {
        setIsExtended(false);
      }
    };
    if (isExtended) {
      document.addEventListener("mousedown", onClickOutside);
    } else {
      document.removeEventListener("mousedown", onClickOutside);
    }
  }, [isExtended]);

  const onItemSelected = useCallback(
    (key: string) => {
      setIsExtended(false);
      onKeySelected(key);
    },
    [onKeySelected],
  );

  return (
    <div className="relative" ref={dropdown}>
      <button
        onClick={() => setIsExtended(!isExtended)}
        disabled={disabled}
        className={`flex items-center h-13 gap-x-4 enabled:cursor-pointer disabled:cursor-not-allowed
          bg-white text-secondary enabled:hover:text-black disabled:text-disabled`}
      >
        <span className="body">{getCurrentText().toUpperCase()}</span>
        <div className="size-4">
          {isExtended ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
      </button>

      {isExtended && (
        <div className="absolute left-2 top-14 rounded-lg bg-white border border-stroke p-4 z-10">
          <div className="w-56 flex-col min-h-12 max-h-58 overflow-y-auto scrollbar">
            {[...items].map(([key, value]) => {
              return (
                <DropdownItem
                  key={key}
                  value={key}
                  label={value}
                  selected={key === selectedKey}
                  onItemSelected={onItemSelected}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
