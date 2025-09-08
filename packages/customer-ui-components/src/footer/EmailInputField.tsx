import { ChangeEvent } from "react";

import Envelope from "@sellify/common-icons/envelope";
import ArrowLongRightIcon from "@sellify/common-icons/arrow-long-right";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

type EmailInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubscribe: () => void;
};

export default function EmailInputField({
  value,
  onChange,
  onSubscribe,
}: EmailInputProps) {
  return (
    <div
      className={`flex items-center justify-center h-13 w-80 p-4 gap-4 rounded-lg border hover:border-white border-stroke text-white`}
    >
      <Envelope style="size-6" />
      <input
        type="email"
        name="search"
        value={value}
        placeholder="Email Address..."
        onChange={onChange}
        required
        className={`w-full h-full text-left focus:outline-hidden `}
      />

      <TransparentIconButton onClick={onSubscribe}>
        <ArrowLongRightIcon style="size-6 hover:text-white text-stroke" />
      </TransparentIconButton>
    </div>
  );
}
