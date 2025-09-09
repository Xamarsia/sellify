type ProgressItemInfo = {
  href: string;
  title: string;
  icon: ReactNode;
};

type SearchNavigationItem = {
  href: string;
  title: string;
};

type Product = {
  productId: number;
  images: string[];
  title: string;
  shortDescription?: string;
  description?: string;
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

type SearchItem = {
  productId: number;
  image: string;
  title: string;
};

type CartItem = {
  product: ProductPreview;
  amount: number;
};
