import { sizeToCSS } from "./common/common";
import { Size } from "./common/enums";

type ArrowLongLeftIconProps = {
  size?: Size;
};

export default function ArrowLongLeftIcon({
  size = Size.md,
}: ArrowLongLeftIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`${sizeToCSS(size)}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
      />
    </svg>
  );
}
