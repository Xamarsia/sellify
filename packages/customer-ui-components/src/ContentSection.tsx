import { ReactNode } from "react";

type ButtonProps = {
  title: string;
  image: string;
  imageSide?: "left" | "right";
  children: ReactNode;
};

export default function ContentSection({
  title,
  image,
  imageSide = "right",
  children,
}: ButtonProps) {
  return (
    <div
      className={`flex flex-col-reverse gap-8 ${imageSide === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className="relative w-full aspect-square md:basis-1/2 shrink-0">
        <img
          src={image}
          alt={`${title}_image`}
          className={`object-cover aspect-square rounded-md`}
        />
      </div>
      <div className="flex w-full md:basis-1/2 flex-col gap-8 ">
        <h2>{title}</h2>
        <div className="flex items-start flex-col gap-1">{children}</div>
      </div>
    </div>
  );
}
