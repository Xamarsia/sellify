import { Size } from "./enums";

export function sizeToCSS(size: Size): string {
  switch (size) {
    case Size.xs:
      return "size-3";
    case Size.sm:
      return "size-4";
    case Size.md:
      return "size-5";
    case Size.lg:
      return "size-6";
    case Size.xl:
      return "size-7";
    case Size.xxl:
      return "size-8";
  }
}
