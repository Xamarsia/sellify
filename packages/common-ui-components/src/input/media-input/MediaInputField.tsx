"use client";

import { useCallback, useState } from "react";

import React from "react";

type MediaInputFieldProps = {
  text?: string;
  onImageSelected?: (files: FileList) => void;
};

export default function MediaInputField({
  text,
  onImageSelected,
}: MediaInputFieldProps) {
  const [dragActive, setDragActive] = useState<boolean>(false);

  const onDragLeave = useCallback(
    (e: React.DragEvent<HTMLLabelElement>): void => {
      e.preventDefault();
      setDragActive(false);
    },
    [],
  );

  const onDragOver = useCallback(
    (e: React.DragEvent<HTMLLabelElement>): void => {
      e.preventDefault();
      setDragActive(true);
    },
    [],
  );

  const onDragEnter = useCallback(
    (e: React.DragEvent<HTMLLabelElement>): void => {
      e.preventDefault();
      setDragActive(true);
    },
    [],
  );

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLLabelElement>): void => {
      e.preventDefault();
      setDragActive(false);

      if (!e.dataTransfer.files || e.dataTransfer.files.length === 0) {
        return;
      }

      if (onImageSelected) {
        onImageSelected(e.dataTransfer.files);
      }
    },
    [onImageSelected],
  );

  const onImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }

      if (onImageSelected) {
        onImageSelected(e.target.files);
      }
    },
    [onImageSelected],
  );

  return (
    <label
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      className={`peer flex size-full items-center justify-center text-center rounded-lg border 
        border-placeholder border-dashed accent-stroke hover:border-black 
      ${dragActive ? "border-black bg-hovered" : "bg-white"}`}
    >
      <span className="m-2">{text}</span>
      <input
        accept="image/jpeg"
        type="file"
        draggable
        hidden
        onChange={onImageChange}
        multiple
      />
    </label>
  );
}
