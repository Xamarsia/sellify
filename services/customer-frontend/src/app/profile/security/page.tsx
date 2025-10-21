"use client";

import { useCallback, useContext } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import SettingsSection from "@sellify/customer-ui-components/SettingsSection";

import { RiskDialogController, RiskDialogContent } from "types";
import { RiskDialogContext } from "common/contexts/common-context";
import { deleteUserAccount } from "common/actions/profile-actions";

export default function SettingsPage() {
  const { showDangerAlertDialog } =
    useContext<RiskDialogController>(RiskDialogContext);

  const onDeleteAccount = useCallback((): void => {
    const alertDialogContent: RiskDialogContent = {
      title: "Delete Account",
      buttonActionTitle: "Delete Account",
      description:
        "Are you sure you want to delete your account? This will delete your account, purchase history and all information connected to it.",
      onPasswordConfirmed: deleteUserAccount,
    };
    showDangerAlertDialog(alertDialogContent);
  }, [showDangerAlertDialog]);

  return (
    <div className="flex w-full flex-col gap-12">
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
        <Button fill="parent" variant="destructive" onClick={onDeleteAccount}>
          Delete Account
        </Button>
      </SettingsSection>
    </div>
  );
}
