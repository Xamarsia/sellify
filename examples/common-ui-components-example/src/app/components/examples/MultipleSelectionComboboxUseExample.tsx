"use client";


import { useCallback, useEffect, useState } from 'react';

import MultipleSelectionCombobox from '@sellify/common-ui-components/combobox/MultipleSelectionCombobox';


type MultipleSelectionComboboxProps = {
    title: string,
    required?: boolean,
    disabled?: boolean,
    items: Map<string, string>,
    defaultSelectedValues?: string[],
}


export default function MultipleSelectionComboboxUseExample({ title, required, items, disabled, defaultSelectedValues }: MultipleSelectionComboboxProps) {
    const [selectedItems, setSelectedItems] = useState<Map<string, string>>(new Map());

    const onItemSelected = useCallback((key: string, value: string) => {
        const newSelectedItemsMap = new Map([...selectedItems, [key, value]]);
        setSelectedItems(newSelectedItemsMap);
    }, [selectedItems]);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onItemRemoved = useCallback((key: string, value: string) => {
        const newSelectedItemsMap = new Map([...selectedItems]);
        newSelectedItemsMap.delete(key);
        setSelectedItems(newSelectedItemsMap);
    }, [selectedItems]);

    useEffect(() => {
        if (!defaultSelectedValues) {
            return;
        }

        const newSelectedItems = new Map();

        defaultSelectedValues.map((key) => {
            const value: string | undefined = items.get(key);
            if (value) {
                newSelectedItems.set(key, value);
            }
        });

        setSelectedItems(newSelectedItems);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Runs only on the first render


    return (
        <MultipleSelectionCombobox
            title={title}
            items={items}
            selectedItems={selectedItems}
            required={required}
            disabled={disabled}
            onItemSelected={onItemSelected}
            onItemRemoved={onItemRemoved}
        />
    )
}
