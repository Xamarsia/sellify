"use client";

import { ChangeEvent, useCallback, useState } from "react";

import Input from "@sellify/common-ui-components/input/Input";
import Button from "@sellify/common-ui-components/buttons/Button";
import Combobox from "@sellify/common-ui-components/combobox/Combobox";
import FormItem from "@sellify/common-ui-components/FormItem";
import Textarea from "@sellify/common-ui-components/input/Textarea";
import MediaInput from "@sellify/common-ui-components/input/media-input/MediaInput";

import { EditProductRequest } from "types";
import { editProduct } from "actions/product-actions";
import { getCategoryComboboxItems } from "actions/category-actions";
import { ProductDetails } from "@sellify/admin-ui-components/types";

type EditProductFormProps = {
  product: ProductDetails;
};

export default function EditProductForm({ product }: EditProductFormProps) {
  const [title, setTitle] = useState<string>(product.title);
  const [shortDescription, setShortDescription] = useState<string>(
    product.shortDescription ?? "",
  );
  const [description, setDescription] = useState<string>(
    product.description ?? "",
  );
  const [quantity, setQuantity] = useState<string>(product.quantity.toString());
  const [price, setPrice] = useState<string>(product.price.toString());
  const [category, setCategory] = useState<string>(product.category.title);
  const [images, setImages] = useState<File[]>(
    product.images.map((image) => new File([], image)),
  );
  const categories: Map<number, string> = getCategoryComboboxItems();

  const onFormSubmit = useCallback((): void => {
    const editProductRequest: EditProductRequest = {
      productId: product.productId,
      images: images,
      title: title,
      shortDescription: shortDescription,
      description: description,
      quantity: parseInt(quantity),
      category: category,
      price: parseInt(price),
    };
    editProduct(editProductRequest);
  }, [
    product.productId,
    images,
    title,
    shortDescription,
    description,
    quantity,
    category,
    price,
    editProduct,
  ]);

  const handleTitleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const value: string = e.target.value;
      setTitle(value);
    },
    [setTitle],
  );

  const handleDescriptionChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>): void => {
      const value: string = e.target.value;
      setDescription(value);
    },
    [setDescription],
  );

  const handleShortDescriptionChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const value: string = e.target.value;
      setShortDescription(value);
    },
    [setShortDescription],
  );

  const handlePriceChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const possibleNumber: string = e.target.value;

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
    (e: ChangeEvent<HTMLInputElement>): void => {
      const possibleNumber: string = e.target.value;

      if (possibleNumber == "") {
        setQuantity(possibleNumber);
        return;
      }

      const numberRegex = /^[\d]+$/;
      if (!numberRegex.test(possibleNumber)) {
        return;
      }

      let num = parseInt(possibleNumber);
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
      className="grow flex flex-col gap-14 items-end"
      onSubmit={onFormSubmit}
    >
      <div className="flex flex-col w-full gap-6">
        <FormItem title="Title" required>
          <Input
            value={title}
            placeholder="Title"
            required
            onChange={handleTitleChange}
          />
        </FormItem>
        <FormItem title="Short Description" required>
          <Input
            value={shortDescription}
            placeholder="Short Description"
            required
            onChange={handleShortDescriptionChange}
          />
        </FormItem>

        <FormItem title={"Description"} required>
          <Textarea value={description} onChange={handleDescriptionChange} />
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

      <Button type="submit">Update Product</Button>
    </form>
  );
}
