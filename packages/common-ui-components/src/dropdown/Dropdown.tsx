"use client";

import { useCallback, useEffect, useRef } from "react";
import DropdownItem from "./DropdownItem";
import ChevronDown from "@sellify/common-icons/chevron-down";
import ChevronUp from "@sellify/common-icons/chevron-up";

type DropdownProps = {
  title: string;
  items: Map<string, string>;
  selectedKey?: string;
  isExtended: boolean;
  disabled?: boolean;
  onItemSelected: (key: string, value: string) => void;
  setIsExtended: (isExpanded: boolean) => void;
};

export default function Dropdown({
  title,
  items,
  selectedKey,
  isExtended,
  disabled,
  setIsExtended,
  onItemSelected,
}: DropdownProps) {
  const dropdown = useRef<HTMLDivElement>(null);

  const getCurrentText = useCallback((): string => {
    if (selectedKey) {
      const selectedOptionText = items.get(selectedKey);
      return selectedOptionText ? selectedOptionText : title;
    }
    return title;
  }, [selectedKey]);

  const onDropdownClick = useCallback(() => {
    setIsExtended(!isExtended);
  }, [isExtended, setIsExtended]);

  const onOutsideClicked = useCallback(() => {
    setIsExtended(false);
  }, [setIsExtended]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (isExtended && !dropdown.current?.contains(e.target as Node)) {
        onOutsideClicked();
      }
    };
    if (isExtended) {
      document.addEventListener("mousedown", onClickOutside);
    } else {
      document.removeEventListener("mousedown", onClickOutside);
    }
  }, [isExtended, onOutsideClicked]);

  return (
    <div className="relative" ref={dropdown}>
      <button
        onClick={onDropdownClick}
        disabled={disabled}
        className={`flex items-center gap-x-4 h-13 enabled:cursor-pointer disabled:cursor-not-allowed
                    bg-primary text-[#555555] enabled:hover:text-[#000000] disabled:text-disabled`}
      >
        <span className="body">{getCurrentText().toUpperCase()}</span>
        {isExtended ? (
          <ChevronUp style="size-4" />
        ) : (
          <ChevronDown style="size-4" />
        )}
      </button>

      {isExtended && (
        <div className="absolute right-0 top-12 w-56 rounded-lg bg-white border border-stroke p-4 flex-col min-h-12 max-h-60 overflow-y-auto z-10">
          {[...items].map(([key, value]) => {
            return (
              <DropdownItem
                key={key}
                value={key}
                label={value}
                selected={key == selectedKey}
                onItemSelected={onItemSelected}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
