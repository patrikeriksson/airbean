export type Coffee = {
  id: string;
  title: string;
  desc: string;
  price: number;
};

export type CoffeeResponse = {
  menu: Coffee[];
};

export type CartItem = {
  coffee: Coffee;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};
