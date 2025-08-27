import { useCallback, useState } from "react";

type Props = {
  src: string;
  hoveredSrc?: string;
};

export default function ProductPreviewImage({ src, hoveredSrc }: Props) {
  const [imageSrc, setImageSrc] = useState<string>(src);

  const onMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLImageElement>): void => {
      e.preventDefault();
      if (hoveredSrc) {
        setImageSrc(hoveredSrc);
      }
    },
    [src],
  );

  const onMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLImageElement>): void => {
      e.preventDefault();
      setImageSrc(src);
    },
    [src],
  );

  return (
    <div className="relative aspect-square rounded-md">
      <img
        src={imageSrc}
        alt="Product image"
        className={`size-full object-cover rounded-md`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
}
