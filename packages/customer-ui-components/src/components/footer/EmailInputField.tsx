import { ChangeEvent, useCallback } from "react";

import EnvelopeIcon from "@sellify/common-icons/envelope";
import ArrowLongRightIcon from "@sellify/common-icons/arrow-long-right";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

type EmailInputFieldProps = {
  value: string;
  onChange: (email: string) => void;
  onSubscribe: () => void;
};

export default function EmailInputField({
  value,
  onChange,
  onSubscribe,
}: EmailInputFieldProps) {
  const onEmailChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <div
      className={`flex items-center justify-center h-13 w-80 p-4 gap-4 rounded-lg border hover:border-white border-stroke text-white`}
    >
      <div className="*:h-6">
        <EnvelopeIcon />
      </div>
      <input
        type="email"
        name="search"
        value={value}
        placeholder="Email Address..."
        onChange={onEmailChanged}
        required
        className={`w-full h-full text-left focus:outline-hidden `}
      />
      <TransparentIconButton
        onClick={onSubscribe}
        variant="white"
        icon={<ArrowLongRightIcon />}
      />
    </div>
  );
}
