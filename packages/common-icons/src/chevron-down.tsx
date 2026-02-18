import { sizeToCSS } from "./common/common";
import { Size } from "./common/enums";

type ChevronDownIconProps = {
  size?: Size;
};

export default function ChevronDownIcon({
  size = Size.sm,
}: ChevronDownIconProps) {
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
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
