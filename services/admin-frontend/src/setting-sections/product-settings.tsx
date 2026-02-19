"use client";

import { useRouter } from "next/navigation";

import InfoSection from "@sellify/admin-ui-components/InfoSection";
import SettingsSection from "@sellify/admin-ui-components/SettingsSection";

type Props = {
  productId: number;
};

export default function ProductSettings({ productId }: Props) {
  const router = useRouter();
  return (
    <>
      <SettingsSection
        title="Edit Product"
        description="Update product info."
        buttonText="Edit"
        onClick={() => router.push(`/product/${productId}/edit`)}
      />
      <InfoSection title="Danger Zone">
        <SettingsSection
          title="Delete Product"
          description="Permanently delete your product and all associated data. This action cannot be undone"
          buttonText="Delete"
          type="destructive"
        />
      </InfoSection>
    </>
  );
}
