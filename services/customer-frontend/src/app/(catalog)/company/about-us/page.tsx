"use client";

import { Banner as BannerType } from "@sellify/customer-ui-components/types";
import Banner from "@sellify/customer-ui-components/banners/Banner";
import ContentSection from "@sellify/customer-ui-components/ContentSection";

import { getAboutUsPageBanner } from "actions/common-actions";

export default function AboutUsPage() {
  const banner: BannerType = getAboutUsPageBanner();

  return (
    <>
      <Banner banner={banner} />
      <div className="flex grow w-full justify-center relative shrink-0 mt-12 px-8 pb-16 max-w-7xl">
        <div className="flex w-full flex-col gap-8">
          <p>
            {
              "Welcome to our plant store, where we are dedicated to nurturing a love for plants and gardening in our community. Founded with a passion for greenery and sustainability, our mission is to provide high-quality plants, expert advice, and exceptional customer service to plant enthusiasts of all levels."
            }
          </p>
          <ContentSection image={banner.image} title="Our Story">
            {
              "Our journey began with a simple love for nature and a desire to share that passion with others. Over the years, we have grown from a small local shop into a beloved destination for plant lovers. We carefully curate a diverse selection of plants, from vibrant houseplants to beautiful outdoor varieties, ensuring that there is something for everyone."
            }
          </ContentSection>
          <ContentSection
            image={banner.image}
            title="Our Values"
            imageSide="left"
          >
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
          </ContentSection>
          <ContentSection image={banner.image} title="What We Offer">
            <ul className="list-disc list-inside flex flex-col w-full gap-4">
              <li>
                {
                  "Wide Selection: Explore our extensive range of indoor and outdoor plants, gardening supplies, and accessories."
                }
              </li>
              <li>
                {
                  "Workshops and Events: Join us for hands-on workshops and events designed to educate and inspire plant lovers of all ages."
                }
              </li>
              <li>
                {
                  "Personalized Service: Our team is here to help you find the perfect plants for your home or garden and to answer any questions you may have."
                }
              </li>
            </ul>
          </ContentSection>
        </div>
      </div>
    </>
  );
}
