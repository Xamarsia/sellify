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

export type FilterPanelController = {
  openFilterPanel: (filterSections: Array<FilterSectionType>) => void;
};

export type CreateRoleRequest = {
  title: string;
  permissions: number[];
};

export type CreateAdminRequest = {
  name: string;
  email: string;
  role: RolePreview;
};

export type CreateProductRequest = {
  images: File[];
  title: string;
  shortDescription?: string;
  description?: string;
  quantity: number;
  category: CategoryPreview;
  price: number;
};
