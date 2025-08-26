import { ChangeEvent, useCallback, useState } from "react";

import EmailInputField from "./EmailInputField";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";

type FooterProps = {
  onSubscribe: (email: string) => void;
};

export default function Footer({ onSubscribe }: FooterProps) {
  const [email, setEmail] = useState<string>("");

  const onEmailChanged = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const email: string = e.target.value;
    setEmail(email);
  }, []);

  const onEmailSubscribe = useCallback((): void => {
    onSubscribe(email);
  }, [email]);

  return (
    <footer className="flex justify-center h-fit w-full bg-black text-white pt-9 pb-4 px-8">
      <div className="flex gap-6 flex-col lg:flex-row justify-between h-fit w-full max-w-[1280px]">
        <div className="flex flex-col gap-5 ">
          <h4>Company</h4>
          <div className="flex flex-col gap-1">
            <LinkButton>About Us</LinkButton>
            <LinkButton>Careers</LinkButton>
            <LinkButton>Delivery Information</LinkButton>
            <LinkButton>Privacy Policy</LinkButton>
            <LinkButton>Terms & Conditions</LinkButton>
          </div>
        </div>

        <div className="border-stroke border-t lg:hidden" />

        <div className="flex flex-col gap-5">
          <h4>Customer Care</h4>
          <div className="flex flex-col gap-1">
            <LinkButton>FAQ</LinkButton>
            <LinkButton>Return Policy</LinkButton>
            <LinkButton>Promotion Terms & Conditions</LinkButton>
          </div>
        </div>
        <div className="border-stroke border-t lg:hidden" />
        <div className="flex flex-col gap-5">
          <LinkButton>
            <h4>Contact Us</h4>
          </LinkButton>
          <LinkButton>
            <h4>Track Order</h4>
          </LinkButton>
          <LinkButton>
            <h4>Sign In</h4>
          </LinkButton>
          <LinkButton>
            <h4>Store Locator</h4>
          </LinkButton>
        </div>
        <div className="border-stroke border-t lg:hidden" />
        <div className="flex flex-col gap-5">
          <h4>Subscribe</h4>
          <p>Enter your email below to be the firs to know about news</p>
          <EmailInputField value={email} onChange={onEmailChanged} onSubscribe={onEmailSubscribe} />
        </div>
      </div>
    </footer>
  );
}
