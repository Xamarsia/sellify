"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import ChevronDown from "@sellify/common-icons/chevron-down";
import ChevronUpIcon from "@sellify/common-icons/chevron-up";

import DropdownItem from "./DropdownItem";

type DropdownProps = {
  title: string;
  items: Map<string, string>;
  selectedKey?: string;
  isExtended?: boolean;
  disabled?: boolean;
  onKeySelected: (key: string) => void;
  setIsExtended?: (isExpanded: boolean) => void;
};

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
  }, [selectedKey]);

  const onDropdownClick = useCallback(() => {
    if (setIsExtended) {
      setIsExtended(!isExtended);
    }
  }, [isExtended, setIsExtended]);

  const onOutsideClicked = useCallback(() => {
    if (setIsExtended) {
      setIsExtended(false);
    }
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
        onClick={onDropdownClick}
        disabled={disabled}
        className={`flex items-center gap-x-4 h-13 enabled:cursor-pointer disabled:cursor-not-allowed
          bg-white text-secondary enabled:hover:text-black disabled:text-disabled`}
      >
        <span className="body">{getCurrentText().toUpperCase()}</span>
        {isExtended ? (
          <ChevronUpIcon style="size-4" />
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
