type AdminStatus = "ACTIVE" | "INVITED" | "DISABLED";
type CustomerStatus = "ACTIVE" | "ARCHIVED";

type ProgressItemInfo = {
  href: string;
  title: string;
  icon: ReactNode;
};

type Order = {
  orderId: number;
  date: string;
  customerName: string;
  total: number;
  status: OrderStatus;
  items: number;
};

type Product = {
  image: string;
  title: string;
  shortDescription?: string;
  description?: string;
  productId: number;
  status: ProductStatus;
  quantity: number;
  category: string;
  price: number;
};

type Inventory = {
  image: string;
  productTitle: string;
  productId: number;
  quantity: number;
};

type Customer = {
  customerId: number;
  name: string;
  ordersCount: number;
  totalExpenses: number;
  status: CustomerStatus;
};

type Category = {
  title: string;
  relatedProductsCount: number;
};

type Admin = {
  adminId: number;
  name: string;
  role: string;
  createdOn: string;
  status: AdminStatus;
};

type Role = {
  title: string;
  relatedUsersCount: number;
};

type ProductPreview = {
  image: string;
  title: string;
  productId: number;
};

type AdminPreview = {
  adminId: number;
  name: string;
  role: string;
};
