"use client";

import { useCallback } from "react";

import MediaInputImage from "./MediaInputImage";

import MediaInputField from "./MediaInputField";

type MediaInputFieldProps = {
  images: File[];
  onImagesChanged: (images: File[]) => void;
};

export default function MediaInput({
  images,
  onImagesChanged,
}: MediaInputFieldProps) {
  const onImageSelected = useCallback(
    (files: FileList): void => {
      let newImagesList = [...images];
      for (var i = 0; i < files.length; ++i) {
        let file: File | null = files.item(i);
        if (file) {
          newImagesList.push(file);
        }
      }
      onImagesChanged(newImagesList);
    },
    [images, onImagesChanged],
  );

  const onRemoveImage = useCallback(
    (name: string): void => {
      const updatedImages = images.filter((image) => image.name !== name);
      onImagesChanged(updatedImages);
    },
    [images],
  );

  return (
    <div
      className={`w-full min-h-72 ${images.length && "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}`}
    >
      {images.map((image, index) => {
        return (
          <MediaInputImage
            image={image}
            key={image.name + index}
            onRemoveImage={onRemoveImage}
          />
        );
      })}
      <MediaInputField
        text="Click to upload or drag and drop JPG, GPEG up to 3MB"
        onImageSelected={onImageSelected}
      />
    </div>
  );
}
