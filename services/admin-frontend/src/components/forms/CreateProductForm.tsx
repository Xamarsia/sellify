"use client";

import { ChangeEvent, useCallback, useState } from "react";

import Input from "@sellify/common-ui-components/input/Input";
import Button from "@sellify/common-ui-components/buttons/Button";
import Combobox from "@sellify/common-ui-components/combobox/Combobox";
import FormItem from "@sellify/common-ui-components/FormItem";
import Textarea from "@sellify/common-ui-components/input/Textarea";
import MediaInputField from "@sellify/common-ui-components/input/MediaInputField";

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
  }, [
    images,
    title,
    shortDescription,
    description,
    quantity,
    category,
    price,
    createProduct,
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

  const onImageSelected = useCallback(
    (files: FileList): void => {
      let newImagesList = new Array<File>(files.length);
      for (var i = 0; i < files.length; ++i) {
        let file: File | null = files.item(i);
        if (file) {
          newImagesList.push(file);
        }
      }
      setImages(newImagesList);
    },
    [setQuantity],
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
          {/* TODO: Display images and MediaInputField in layout */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
            {images.map((image) => {
              let url = URL.createObjectURL(image);
              return <img src={url} alt="your image" key={image.name} />;
            })}
            <MediaInputField
              text="Click to upload or drag and drop JPG, GPEG up to 3MB"
              onImageSelected={onImageSelected}
            />
          </div>
        </FormItem>
        <FormItem title="Price" required>
          <Input value={price} required onChange={handlePriceChange} />
        </FormItem>
        <FormItem title="Quantity" required>
          <Input value={quantity} required onChange={handleQuantityChange} />
        </FormItem>
      </div>
      <Button type="submit">Create Product</Button>
    </form>
  );
}
