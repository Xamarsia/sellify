import { sizeToCSS } from "./common/common";
import { Size } from "./common/enums";

type MinusIconProps = {
  size?: Size;
};

export default function MinusIcon({ size = Size.sm }: MinusIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`${sizeToCSS(size)}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  );
}
