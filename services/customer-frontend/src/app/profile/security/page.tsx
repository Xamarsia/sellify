"use client";

import { useCallback, useContext } from "react";

import FireIcon from "@sellify/common-icons/fire";

import Button from "@sellify/common-ui-components/buttons/Button";
import SettingsSection from "@sellify/customer-ui-components/SettingsSection";

import { AlertContext, AlertDialogContent } from "types";
import { AlertDialogContext } from "common/contexts/common-context";
import { deleteUserAccount } from "common/actions/profile-actions";

export default function SettingsPage() {
  const { openAlertDialog } = useContext<AlertContext>(AlertDialogContext);

  const onDeleteAccount = useCallback((): void => {
    const alertDialogContent: AlertDialogContent = {
      icon: <FireIcon />,
      title: "Delete Account",
      description:
        "Are you sure you want to delete your account? This will delete your account, purchase history and all information connected to it.",
      controlPanel: (
        <>
          <Button variant="outline" fill="parent">
            Go Back
          </Button>
          <Button
            variant="destructive"
            fill="parent"
            onClick={deleteUserAccount}
          >
            Delete Account
          </Button>
        </>
      ),
    };
    openAlertDialog(alertDialogContent);
  }, [openAlertDialog]);

  return (
    <div className="flex w-full flex-col gap-12">
      <SettingsSection title="Password" description="Reset password.">
        <Button fill="parent" min-w-48>
          Update
        </Button>
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
