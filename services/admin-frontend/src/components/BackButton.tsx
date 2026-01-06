"use client";

import { useRouter } from "next/navigation";

import ArrowLongLeftIcon from "@sellify/common-icons/arrow-long-left";

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function BackButton({ onClick }: ButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={onClick ? onClick : router.back}
      className="inline-flex items-center gap-x-2 m-1 truncate cursor-pointer text-black hover:text-secondary "
    >
      <ArrowLongLeftIcon style="size-5" /> Back
    </button>
  );
}
