"use client";


import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import { useRouter } from "next/navigation";

import SearchInput from "@sellify/common-ui-components/input/SearchInput";

export default function SearchBarExample() {
    const [query, setQuery] = useState<string>('');
    const router = useRouter();

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (query) {
            router.push(`/search/?query=${query}`);
        }
    }, [query, router]);

    const onSearchChanged = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        const query: string = e.target.value;
        setQuery(query);
    }, []);

    return (
        <form onSubmit={onSubmit}>
            <SearchInput value={query} onChange={onSearchChanged} />
        </form>
    )
}
