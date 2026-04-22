"use client";

import { FormEvent, useCallback, useState } from "react";

import { useRouter } from "next/navigation";

import SearchInput from "@sellify/common-ui-components/input/SearchInput";

export default function SearchBarExample() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (query) {
        router.push(`/search/?query=${query}`);
      }
    },
    [query, router],
  );

  return <SearchInput value={query} onChange={setQuery} onSubmit={onSubmit} />;
}
