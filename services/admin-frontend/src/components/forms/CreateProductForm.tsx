"use client";

import { useCallback, useState } from "react";

import Input from "@sellify/common-ui-components/input/Input";
import Button from "@sellify/common-ui-components/buttons/Button";
import Combobox from "@sellify/common-ui-components/combobox/Combobox";
import FormItem from "@sellify/common-ui-components/form/FormItem";
import Textarea from "@sellify/common-ui-components/input/Textarea";
import MediaInput from "@sellify/common-ui-components/input/media-input/MediaInput";

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
        <FormItem title="Title" required>
          <Input
            value={title}
            placeholder="Title"
            required
            onChange={setTitle}
          />
        </FormItem>
        <FormItem title="Short Description" required>
          <Input
            value={shortDescription}
            placeholder="Short Description"
            required
            onChange={setShortDescription}
          />
        </FormItem>

        <FormItem title={"Description"} required>
          <Textarea value={description} onChange={setDescription} />
        </FormItem>
        <FormItem title={"Category"} required>
          <Combobox
            items={categories}
            value={category}
            required
            onItemSelected={onCategorySelected}
          />
        </FormItem>
        <FormItem title="Media" required>
          <MediaInput images={images} onImagesChanged={setImages} />
        </FormItem>
        <FormItem title="Price" required>
          <Input value={price} required onChange={handlePriceChange} />
        </FormItem>
        <FormItem title="Quantity" required>
          <Input value={quantity} required onChange={handleQuantityChange} />
        </FormItem>
      </div>
      <div className="sm:w-xs">
        <Button type="submit">Create Product</Button>
      </div>
    </form>
  );
}
