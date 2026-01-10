import "@sellify/admin-ui-components/types";

export type RiskDialogContent = {
  title: string;
  description?: string;
  buttonActionTitle: string;
  onConfirm: (password: string) => boolean;
  onPasswordValidated: (...args: any) => void;
};

export type RiskDialogController = {
  showRiskDialog: (content: RiskDialogContent) => void;
};

export type AlertDialogContent = {
  title: string;
  icon: ReactNode;
  description?: string;
  controlPanel: ReactNode;
};

export type AlertDialogController = {
  showAlertDialog: (content: AlertDialogContent) => void;
  closeAlertDialog: () => void;
};
