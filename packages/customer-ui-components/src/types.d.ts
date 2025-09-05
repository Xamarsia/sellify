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
};

// contexts

type DialogContext = {
  addProductToCart: (cartItem: CartItem) => void;
};
