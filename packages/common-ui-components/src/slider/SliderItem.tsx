import { useCallback } from "react";

type SlideProps = {
  image: string;
  index: number;
  selected?: boolean;
  onSlideSelected: (index: number) => void;
};

export default function Slide({
  image,
  index,
  selected,
  onSlideSelected,
}: SlideProps) {
  const handleSlideSelection = useCallback((): void => {
    if (!selected) {
      onSlideSelected(index);
    }
  }, [index, selected, onSlideSelected]);

  return (
    <button
      onClick={handleSlideSelection}
      className={`flex size-28 aspect-square rounded-md hover:outline
         focus:outline-disabled outline-stroke outline-offset-2 m-2
          ${selected ? `outline` : ``}
         `}
    >
      <img
        src={image}
        alt="Product image"
        className={`size-full object-cover rounded-md`}
      />
    </button>
  );
}
