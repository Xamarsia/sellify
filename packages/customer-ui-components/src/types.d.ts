type ProgressItemInfo = {
  href: string;
  title: string;
  icon: ReactNode;
};


type Product = {
  image: string;
  title: string;
  shortDescription?: string;
  description?: string;
  productId: number;
  status: number;
  quantity: number;
  category: string;
  price: number;
};

type ProductPreview = {
  productId: number;
  image: string;
  hoveredImage: string;
  title: string;
  price: number;
};

type CartItem = {
  product: ProductPreview;
  amount: number;
}

// type Inventory = {
//   image: string;
//   productTitle: string;
//   productId: number;
//   quantity: number;
// };

// type Customer = {
//   customerId: number;
//   name: string;
//   ordersCount: number;
//   totalExpenses: number;
//   status: CustomerStatus;
// };

// type Category = {
//   title: string;
//   relatedProductsCount: number;
// };
