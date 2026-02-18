import { sizeToCSS } from "./common/common";
import { Size } from "./common/enums";

type XMarkIconProps = {
  size?: Size;
};

export default function XMarkIcon({ size = Size.sm }: XMarkIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className={`${sizeToCSS(size)}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
