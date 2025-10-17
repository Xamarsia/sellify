"use client";

import { useState } from "react";
import SliderItem from "./SliderItem";

type SliderProps = {
  images: Array<string>;
};

export default function ProductImagesSlider({
  images,
}: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="flex gap-3 h-[536px] items-center">
      <ul className="flex flex-col gap-1 shrink-0 overflow-x-hidden overflow-y-auto h-[528px] product-scrollbar">
        {images.map((image, index) => (
          <li key={image.toString() + index}>
            <SliderItem
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
