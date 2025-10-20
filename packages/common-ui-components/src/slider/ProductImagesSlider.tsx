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
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 not-md:w-full lg:h-[536px] shrink-0">
      <div className="flex md:order-2  ">
        <img
          src={images[currentSlide]}
          alt="Product image"
          className={`aspect-1/1 size-full object-cover rounded-md`}
        />
      </div>
      <ul className="flex h-full flex-row md:flex-col md:shrink-0 gap-1 overflow-x-auto md:overflow-y-auto md:order-1 product-scrollbar">
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
    </div>
  );
}
