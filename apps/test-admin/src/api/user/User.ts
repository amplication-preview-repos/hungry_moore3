import { Address } from "../address/Address";
import { Cart } from "../cart/Cart";
import { Order } from "../order/Order";

export type User = {
  addresses?: Array<Address>;
  age: number;
  cart?: Cart | null;
  id: number;
  inactive: boolean;
  isAdmin: boolean;
  mobile: string;
  name: string | null;
  orders?: Array<Order>;
};
