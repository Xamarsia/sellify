"use client";

import { useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import ComboboxFormItem from "@sellify/common-ui-components/form/ComboboxFormItem";
import InputFormItem from "@sellify/common-ui-components/form/InputFormItem";
import MediaInputFormItem from "@sellify/common-ui-components/form/MediaInputFormItem";
import TextareaFormItem from "@sellify/common-ui-components/form/TextareaFormItem";

import { CreateProductRequest } from "types";
import { createProduct } from "actions/product-actions";
import { getCategoryComboboxItems } from "actions/category-actions";

export default function CreateProductForm() {
  const [title, setTitle] = useState<string>("");
  const [shortDescription, setShortDescription] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("0");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>();
  const [images, setImages] = useState<File[]>([]);
  const categories: Map<number, string> = getCategoryComboboxItems();

  const onFormSubmit = useCallback((): void => {
    const createProductRequest: CreateProductRequest = {
      images: images,
      title: title,
      shortDescription: shortDescription,
      description: description,
      quantity: parseInt(quantity),
      category: category,
      price: parseInt(price),
    };
    createProduct(createProductRequest);
  }, [images, title, shortDescription, description, quantity, category, price]);

  const handlePriceChange = useCallback(
    (possibleNumber: string): void => {
      if (possibleNumber == "") {
        setPrice(possibleNumber);
        return;
      }

      const numberRegex = /^[\d]+$/;
      if (!numberRegex.test(possibleNumber)) {
        return;
      }

      setPrice(possibleNumber);
    },
    [setPrice],
  );

  const handleQuantityChange = useCallback(
    (possibleNumber: string): void => {
      if (possibleNumber == "") {
        setQuantity(possibleNumber);
        return;
      }

      const numberRegex = /^[\d]+$/;
      if (!numberRegex.test(possibleNumber)) {
        return;
      }

      setQuantity(possibleNumber);
    },
    [setQuantity],
  );

  const onCategorySelected = useCallback(
    (key?: number, newValue?: string) => {
      setCategory(newValue ? newValue : "");
    },
    [setCategory],
  );

  return (
    <form
      className="grow flex flex-col gap-13 justify-between"
      onSubmit={onFormSubmit}
    >
      <div className="flex flex-col gap-6">
        <InputFormItem
          label="Title"
          value={title}
          placeholder="Title"
          required
          onChange={setTitle}
        />
        <InputFormItem
          label="Short Description"
          value={shortDescription}
          placeholder="Short Description"
          required
          onChange={setShortDescription}
        />
        <TextareaFormItem
          label="Description"
          value={description}
          required
          onChange={setDescription}
        />
        <ComboboxFormItem
          label="Category"
          items={categories}
          value={category}
          required
          onItemSelected={onCategorySelected}
        />
        <MediaInputFormItem
          label="Media"
          images={images}
          required
          onImagesChanged={setImages}
        />
        <InputFormItem
          label="Price"
          value={price}
          required
          onChange={handlePriceChange}
        />
        <InputFormItem
          label="Quantity"
          value={quantity}
          required
          onChange={handleQuantityChange}
        />
      </div>
      <div className="sm:w-xs">
        <Button type="submit">Create Product</Button>
      </div>
    </form>
  );
}
