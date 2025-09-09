"use client";

import { useState } from "react";
import Slide from "./SliderItem";

type SliderProps = {
  images: Array<string>;
  // selectedSlide: number;
  // onSlideSelected: (index: number) => void;
};

export default function ProductImagesSlider({
  images,
  // selectedSlide,
  // onSlideSelected
}: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="flex gap-3 h-[536px]">
      <ul className="flex grow flex-col gap-1 shrink-0 overflow-x-hidden overflow-y-auto h-[520px] product-scrollbar">
        {images.map((image, index) => (
          <li key={image.toString() + index}>
            <Slide
              image={image}
              index={index}
              onSlideSelected={setCurrentSlide}
              selected={index == currentSlide}
            />
          </li>
        ))}
      </ul>

      <div className="flex size-[520px] aspect-square rounded-md shrink-0 my-2">
        <img
          src={images[currentSlide]}
          alt="Product image"
          className={`size-full object-cover rounded-md`}
        />
      </div>
    </div>
  );
}
