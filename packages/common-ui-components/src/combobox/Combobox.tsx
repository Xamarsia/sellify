"use client";

import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

import ChevronDown from "@sellify/common-icons/chevron-down";
import ChevronUp from "@sellify/common-icons/chevron-up";

import TransparentIconButton from "../buttons/TransparentIconButton";
import DropdownItem from "../dropdown/DropdownItem";

type ComboboxProps<T> = {
  items: Map<T, string>;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  onItemSelected: (key?: T, newValue?: string) => void;
};

export default function Combobox<T>({
  items,
  value,
  required,
  disabled,
  onItemSelected,
}: ComboboxProps<T>) {
  const [suggestedItems, setSuggestedItems] = useState<Map<T, string>>(items);
  const [isExtended, setIsExtended] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const dropdown = useRef<HTMLDivElement>(null);

  const onSelected = useCallback(
    (key: T, newValue: string) => {
      setIsExtended(false);
      onItemSelected(key, newValue);
    },
    [onItemSelected],
  );

  const getSuggestedItems = useCallback(
    (query: string): Map<T, string> => {
      const lowerCaseQuery: string = query.toLowerCase();

      if (query.length == 0) {
        return items;
      }

      return new Map(
        [...items].filter(([, value]) => {
          return value.toLowerCase().includes(lowerCaseQuery); // query is substring
        }),
      );
    },
    [items],
  );

  useEffect(() => {
    if (value !== undefined) {
      setQuery(value);
    }
  }, [value]);

  useEffect(() => {
    setSuggestedItems(getSuggestedItems(query));
  }, [getSuggestedItems, query]);

  const isSelected = useCallback(
    (query: string): undefined | [T, string] => {
      const lowerCaseQuery: string = query.toLowerCase();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return [...items].find(([key, value]) => {
        const lowerCaseValue: string = value.toLowerCase();
        return lowerCaseValue == lowerCaseQuery;
      });
    },
    [items],
  );

  const onValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const newValue: string = e.target.value;
      const foundedItem: undefined | [T, string] = isSelected(newValue);

      if (foundedItem == undefined) {
        setQuery(newValue);
        onItemSelected(undefined, undefined);
        return;
      }

      onItemSelected(foundedItem[0], foundedItem[1]);
    },
    [isSelected, onItemSelected],
  );

  const onInputInFocus = useCallback((): void => {
    setIsExtended(true);
  }, [setIsExtended]);

  const onDropdownClick = useCallback(() => {
    setIsExtended(!isExtended);
  }, [isExtended, setIsExtended]);

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
      <div
        ref={dropdown}
        className="h-13 w-full flex flex-auto p-4 gap-2 rounded-lg border border-stroke has-focus:border-black has-enabled:hover:border-black"
      >
        <input
          type="text"
          onFocus={onInputInFocus}
          onChange={onValueChange}
          value={query}
          required={required}
          disabled={disabled}
          placeholder="--"
          className={`w-full h-full min-w-8 placeholder-placeholder disabled:text-disabled
              focus:outline-hidden accent-transparent appearance-none 
            `}
        />

        <TransparentIconButton onClick={onDropdownClick} disabled={disabled}>
          {isExtended ? (
            <ChevronUp style="size-4" />
          ) : (
            <ChevronDown style="size-4" />
          )}
        </TransparentIconButton>
      </div>

      {isExtended && (
        <div className="absolute w-full rounded-lg bg-white border border-stroke p-4 min-h-12 z-10">
          <div className="w-full flex-col min-h-12 max-h-58 overflow-y-auto scrollbar">
            {[...suggestedItems].map(([key, value]) => {
              return (
                <DropdownItem
                  key={key + value}
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
