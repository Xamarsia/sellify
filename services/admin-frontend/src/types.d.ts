import "@sellify/admin-ui-components/types";

export type RiskDialogContent = {
  title: string;
  description?: string;
  buttonActionTitle: string;
  onConfirm: (password: string) => boolean;
  onPasswordValidated: (...args: any) => void;
};

export type RiskDialogController = {
  showDangerAlertDialog: (content: RiskDialogContent) => void;
};
