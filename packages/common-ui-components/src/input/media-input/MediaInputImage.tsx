import { useCallback } from "react";

import XMark from "@sellify/common-icons/x-mark";

import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

type MediaInputImageProps = {
  image: File;
  onRemoveImage?: (name: string) => void;
};

export default function MediaInputImage({
  image,
  onRemoveImage,
}: MediaInputImageProps) {
  const removeImage = useCallback((): void => {
    if (onRemoveImage) {
      onRemoveImage(image.name);
    }
  }, [onRemoveImage]);

  return (
    <div className="relative size-full rounded-lg shrink-0 border border-placeholder aspect-square">
      <div className="absolute hover:bg-black/20 hover:backdrop-blur-[2px] size-full rounded-lg">
        <div className="absolute top-0 right-0 m-1">
          <TransparentIconButton onClick={removeImage} variant="white">
            <XMark style="size-6" />
          </TransparentIconButton>
        </div>
      </div>
      <img
        src={URL.createObjectURL(image)}
        alt="Input Image"
        className={`size-full object-cover rounded-lg`}
      />
    </div>
  );
}
