"use client";

import { useRouter } from "next/navigation";

import { Size } from "@sellify/common-icons/enums";
import Cog6ToothIcon from "@sellify/common-icons/cog-6-tooth";

import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

type Props = {
  url: string;
};

export default function SettingsButton({ url }: Props) {
  const router = useRouter();

  return (
    <TransparentIconButton onClick={() => router.push(url)}>
      <Cog6ToothIcon size={Size.xxl} />
    </TransparentIconButton>
  );
}
