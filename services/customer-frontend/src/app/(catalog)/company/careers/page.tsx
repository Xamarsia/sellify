"use client";

import { Banner as BannerType } from "@sellify/customer-ui-components/types";
import Banner from "@sellify/customer-ui-components/banners/Banner";

import { getCareersPageBanner } from "actions/common-actions";

export default function CareersPage() {
  const banner: BannerType = getCareersPageBanner();

  return (
    <>
      <Banner banner={banner} />
      <div className="flex grow w-full justify-center relative shrink-0 mt-12 px-8 pb-16 max-w-7xl">
        <div className="flex w-full flex-col gap-8">
          <p>
            {
              "Join our passionate team dedicated to providing high-quality plants and exceptional customer service! We believe that our employees are the heart of our business, and we are always looking for enthusiastic individuals who share our love for plants and gardening."
            }
          </p>
          <p>{"You can email us at info@yourstore.com."}</p>
          <div className="flex w-full flex-col gap-8 ">
            <h2>{"Why Work With Us?"}</h2>
            <ul className="list-disc list-inside flex flex-col w-full gap-4">
              <li>
                {
                  "Quality: We believe in offering only the best plants and products. Each item in our store is selected with care to ensure it meets our high standards."
                }
              </li>
              <li>
                {
                  "Sustainability: We are committed to environmentally friendly practices, from sourcing our plants responsibly to minimizing waste in our operations."
                }
              </li>
              <li>
                {
                  "Expertise: Our knowledgeable staff is passionate about plants and is always ready to provide guidance and support to help you succeed in your gardening journey."
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
