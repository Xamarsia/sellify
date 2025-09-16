"use client";

import { useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";
import SettingsSection from "@sellify/customer-ui-components/SettingsSection";

export default function SettingsPage() {
  const [language, setLanguage] = useState<string>("english");
  const [appearance, setAppearance] = useState<string>("light");

  const onLanguageSelected = useCallback((key: string) => {
    setLanguage(key);
  }, []);

  const onAppearanceSelected = useCallback((key: string) => {
    setAppearance(key);
  }, []);

  const languageItems = new Map<string, string>([
    ["english", "English"],
    ["french", "French"],
  ]);

  const appearanceItems = new Map<string, string>([
    ["light", "Light"],
    ["dark", "Dark"],
  ]);

  return (
    <div className="flex w-full flex-col divide-y divide-stroke gap-6">
      <SettingsSection title="Language" description="Select your language.">
        <Dropdown
          title={"Language"}
          items={languageItems}
          selectedKey={language}
          onKeySelected={onLanguageSelected}
          disabled
        />
      </SettingsSection>

      <SettingsSection
        title="Appearance"
        description="Customize how your theme looks on your device."
      >
        <Dropdown
          title={"Light"}
          items={appearanceItems}
          selectedKey={appearance}
          onKeySelected={onAppearanceSelected}
          disabled
        />
      </SettingsSection>

      <SettingsSection title="Password" description="Reset password.">
        <Button fill="parent">Update</Button>
      </SettingsSection>

      <SettingsSection title="Email" description="Reset email.">
        <Button fill="parent">Update</Button>
      </SettingsSection>

      <SettingsSection
        title="Account Settings"
        description="You can remove your account at any time. This will delete your account, purchase history and all information connected to it."
      >
        <Button fill="parent" variant="destructive">
          Delete Account
        </Button>
      </SettingsSection>
    </div>
  );
}
