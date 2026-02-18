"use client";

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

import ChevronDownIcon from "@sellify/common-icons/chevron-down";
import ChevronUpIcon from "@sellify/common-icons/chevron-up";
import { Size } from "@sellify/common-icons/enums";

import TransparentIconButton from "../buttons/TransparentIconButton";
import DropdownItem from "../dropdown/DropdownItem";
import ComboboxItem from "./ComboboxItem";

type MultiSelectionComboboxProps<T> = {
  items: Map<T, string>;
  selectedItems: Map<T, string>;
  required?: boolean;
  disabled?: boolean;
  onItemSelected: (key: T, newValue: string) => void;
  onItemRemoved: (key: T, value: string) => void;
};

export default function MultiSelectionCombobox<T extends string | number>({
  items,
  selectedItems,
  required,
  disabled,
  onItemSelected,
  onItemRemoved,
}: MultiSelectionComboboxProps<T>) {
  const dropdown = useRef<HTMLDivElement>(null);
  const [suggestedItems, setSuggestedItems] = useState<Map<T, string>>(items);
  const [isExtended, setIsExtended] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  // returns not selected items with query as substring
  const getSuggestedItems = useCallback(
    (query: string): Map<T, string> => {
      const lowerCaseQuery: string = query.toLowerCase();

      return new Map(
        [...items].filter(([key, value]) => {
          const lowerCaseValue: string = value.toLowerCase();
          return (
            lowerCaseValue.includes(lowerCaseQuery) && // query is substring
            !selectedItems.has(key)
          ); // only not selected items unique elements are allowed
        }),
      );
    },
    [items, selectedItems],
  );

  const onSelected = useCallback(
    (key: T, value: string) => {
      setIsExtended(false);
      setQuery("");
      onItemSelected(key, value);
    },
    [onItemSelected],
  );

  const onValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const newValue: string = e.target.value;
      setQuery(newValue);
    },
    [setQuery],
  );

  const onInputInFocus = useCallback((): void => {
    setIsExtended(true);
  }, [setIsExtended]);

  const onDropdownClick = useCallback(() => {
    setIsExtended(!isExtended);
  }, [isExtended, setIsExtended]);

  useEffect(() => {
    setSuggestedItems(getSuggestedItems(query));
  }, [getSuggestedItems, query, selectedItems]);

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
  }, [isExtended, setIsExtended]);

  return (
    <div ref={dropdown} className="relative">
      <div className="w-full flex p-4 gap-2 rounded-lg border border-stroke has-focus:border-black has-enabled:hover:border-black">
        <div className="flex flex-auto flex-wrap gap-2">
          {[...selectedItems].map(([key, value]) => {
            return (
              <ComboboxItem
                key={key}
                value={key}
                label={value}
                onRemove={onItemRemoved}
                disabled={disabled}
              />
            );
          })}
          <div className="flex-1">
            <input
              type="text"
              onFocus={onInputInFocus}
              onChange={onValueChange}
              value={query}
              required={!selectedItems.size && required}
              disabled={disabled}
              placeholder={selectedItems?.size === 0 ? "--" : ""}
              className={`w-full h-full min-w-8 min-h-8 placeholder-placeholder
                  focus:outline-hidden accent-transparent appearance-none 
                `}
            />
          </div>
        </div>
        <div className={`${disabled && "hidden"}`}>
          <TransparentIconButton onClick={onDropdownClick} disabled={disabled}>
            {isExtended ? (
              <ChevronUpIcon size={Size.sm} />
            ) : (
              <ChevronDownIcon size={Size.sm} />
            )}
          </TransparentIconButton>
        </div>
      </div>

      {isExtended && (
        <div className="absolute w-full rounded-lg bg-white border border-stroke p-4 min-h-12 z-10">
          <div className="w-full flex-col min-h-12 max-h-58 overflow-y-auto scrollbar">
            {[...suggestedItems].map(([key, value]) => {
              return (
                <DropdownItem
                  key={key}
                  value={key}
                  label={value}
                  onItemSelected={onSelected}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
