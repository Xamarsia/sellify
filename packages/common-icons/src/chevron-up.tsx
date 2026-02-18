import { sizeToCSS } from "./common/common";
import { Size } from "./common/enums";

type ChevronUpIconProps = {
  size?: Size;
};

export default function ChevronUpIcon({ size = Size.sm }: ChevronUpIconProps) {
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
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );
}
