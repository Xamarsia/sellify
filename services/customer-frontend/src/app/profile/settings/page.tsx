"use client";

import { useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";
import SettingsItem from "@sellify/customer-ui-components/SettingsItem";

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
      <SettingsItem title="Language" description="Select your language.">
        <Dropdown
          title={"Language"}
          items={languageItems}
          selectedKey={language}
          onItemSelected={onLanguageSelected}
          disabled
        />
      </SettingsItem>

      <SettingsItem
        title="Appearance"
        description="Customize how your theme looks on your device."
      >
        <Dropdown
          title={"Light"}
          items={appearanceItems}
          selectedKey={appearance}
          onItemSelected={onAppearanceSelected}
          disabled
        />
      </SettingsItem>

      <SettingsItem title="Password" description="Reset password.">
        <Button fill="parent">Update</Button>
      </SettingsItem>

      <SettingsItem title="Email" description="Reset email.">
        <Button fill="parent">Update</Button>
      </SettingsItem>

      <SettingsItem
        title="Account Settings"
        description="You can remove your account at any time. This will delete your account, purchase history and all information connected to it."
      >
        <Button fill="parent" variant="destructive">
          Delete Account
        </Button>
      </SettingsItem>
    </div>
  );
}
