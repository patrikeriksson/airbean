export type CartItem = {
  name: string;
  price: number;
};

export type CartState = {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
};
