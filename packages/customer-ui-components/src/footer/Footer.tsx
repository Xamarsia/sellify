"use client";

import { ChangeEvent, useCallback, useState } from "react";

import EmailInputField from "./EmailInputField";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";

type FooterProps = {
  copyright?: string;
  onSubscribe?: (email: string) => void;
};

export default function Footer({ copyright, onSubscribe }: FooterProps) {
  const [email, setEmail] = useState<string>("");

  const onEmailChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const email: string = e.target.value;
      setEmail(email);
    },
    [],
  );

  const onEmailSubscribe = useCallback((): void => {
    if (onSubscribe) {
      onSubscribe(email);
    }
  }, [email]);

  return (
    <footer className="flex flex-col justify-center items-center h-fit w-full bg-black text-white pt-9 pb-4 px-8 body gap-5 lg:gap-2">
      <div className="flex gap-6 flex-col lg:flex-row justify-between h-fit w-full max-w-[1280px]">
        <div className="flex flex-col gap-5 ">
          <h4>Company</h4>
          <div className="flex flex-col gap-1">
            <LinkButton href="/company/about-us">About Us</LinkButton>
            <LinkButton href="/company/careers">Careers</LinkButton>
            <LinkButton href="/company/delivery-information">
              Delivery Information
            </LinkButton>
            <LinkButton>Privacy Policy</LinkButton>
            <LinkButton>Terms & Conditions</LinkButton>
          </div>
        </div>

        <div className="border-stroke border-t lg:hidden" />

        <div className="flex flex-col gap-5">
          <h4>Customer Care</h4>
          <div className="flex flex-col gap-1">
            <LinkButton href="/customer-care/faq">FAQ</LinkButton>
            <LinkButton href="/customer-care/return-policy">
              Return Policy
            </LinkButton>
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
          <EmailInputField
            value={email}
            onChange={onEmailChanged}
            onSubscribe={onEmailSubscribe}
          />
        </div>
      </div>
      <p> © {copyright}</p>
    </footer>
  );
}
