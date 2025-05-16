import { CartItem } from "../cartItem/CartItem";
import { User } from "../user/User";

export type Cart = {
  id: number;
  products?: Array<CartItem>;
  user?: User;
};
