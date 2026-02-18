import { sizeToCSS } from "./common/common";
import { Size } from "./common/enums";

type ChevronRightMiniIconProps = {
  size?: Size;
};

export default function ChevronRightMiniIcon({
  size = Size.md,
}: ChevronRightMiniIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`${sizeToCSS(size)}`}
    >
      <path
        fillRule="evenodd"
        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
