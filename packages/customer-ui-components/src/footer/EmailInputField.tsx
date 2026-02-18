import { ChangeEvent } from "react";

import EnvelopeIcon from "@sellify/common-icons/envelope";
import ArrowLongRightIcon from "@sellify/common-icons/arrow-long-right";
import { Size } from "@sellify/common-icons/enums";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

type EmailInputFieldProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubscribe: () => void;
};

export default function EmailInputField({
  value,
  onChange,
  onSubscribe,
}: EmailInputFieldProps) {
  return (
    <div
      className={`flex items-center justify-center h-13 w-80 p-4 gap-4 rounded-lg border hover:border-white border-stroke text-white`}
    >
      <EnvelopeIcon size={Size.lg} />
      <input
        type="email"
        name="search"
        value={value}
        placeholder="Email Address..."
        onChange={onChange}
        required
        className={`w-full h-full text-left focus:outline-hidden `}
      />

      <TransparentIconButton onClick={onSubscribe} variant="white">
        <ArrowLongRightIcon size={Size.lg} />
      </TransparentIconButton>
    </div>
  );
}
