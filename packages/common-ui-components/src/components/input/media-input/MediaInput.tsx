"use client";

import { useCallback } from "react";

import MediaInputImage from "./MediaInputImage";

import MediaInputField from "./MediaInputField";

type MediaInputProps = {
  images: File[];
  onImagesChanged: (images: File[]) => void;
};

/**
 * Renders image previews and a field for adding more images.
 *
 * Selected files are appended to the existing images. Removing a preview
 * returns a new list without images that share its file name.
 *
 * @param images - Current image files displayed as previews
 * @param onImagesChanged - Callback invoked with the updated image list
 */
export default function MediaInput({
  images,
  onImagesChanged,
}: MediaInputProps) {
  const onImageSelected = useCallback(
    (files: FileList): void => {
      const newImagesList = [...images];
      for (let i = 0; i < files.length; ++i) {
        const file: File | null = files.item(i);
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
    [images, onImagesChanged],
  );

  return (
    <div
      className={`w-full h-72 ${images.length && "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}`}
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
