"use client";

import { useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import ComboboxFormItem from "@sellify/common-ui-components/form/ComboboxFormItem";
import InputFormItem from "@sellify/common-ui-components/form/InputFormItem";
import MediaInputFormItem from "@sellify/common-ui-components/form/MediaInputFormItem";
import TextareaFormItem from "@sellify/common-ui-components/form/TextareaFormItem";

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
  ]);

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
    <form className="grow flex flex-col gap-14" onSubmit={onFormSubmit}>
      <div className="flex flex-col w-full gap-6">
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
      <div className="sm:w-xs w-full">
        <Button type="submit">Update Product</Button>
      </div>
    </form>
  );
}
