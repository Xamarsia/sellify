"use client";

import { CollapsiblePanelInfo } from "@sellify/common-ui-components/types";
import CollapsiblePanel from "@sellify/common-ui-components/CollapsiblePanel";

import { Banner as BannerType } from "@sellify/customer-ui-components/types";
import Banner from "@sellify/customer-ui-components/banners/Banner";

import { getFAQPageBanner, getFAQs } from "actions/common-actions";

export default function FAQPage() {
  const banner: BannerType = getFAQPageBanner();
  const FAQs: Array<CollapsiblePanelInfo> = getFAQs();

  return (
    <>
      <Banner banner={banner} />
      <div className="flex grow w-full justify-center relative shrink-0 mt-12 px-8 pb-16 max-w-7xl">
        <div className="flex w-full flex-col gap-2">
          {FAQs.map(({ title, content }, index) => {
            return (
              <CollapsiblePanel panelTitle={title} key={`FAQ_${index}`}>
                {content}
              </CollapsiblePanel>
            );
          })}
        </div>
      </div>
    </>
  );
}
