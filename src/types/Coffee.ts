export interface Coffee {
  id: string;
  title: string;
  desc: string;
  price: number;
}

export interface CoffeeResponse {
  menu: Coffee[];
}
