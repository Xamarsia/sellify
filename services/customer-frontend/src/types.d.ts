import {
  ProductPreview,
  CartItem,
} from "@sellify/customer-ui-components/types.d.ts";

type DialogContext = {
  addProductToCart: (cartItem: CartItem) => void;
};

type CartContext = {
  openCartPanel: (cartItems: Array<CartItem>) => void;
};

type SearchContext = {
  openSearchPanel: () => void;
};
