import { Cart } from "../cart/Cart";
import { Color } from "../color/Color";
import { Product } from "../product/Product";
import { Size } from "../size/Size";

export type CartItem = {
  cart?: Cart;
  color?: Color;
  id: number;
  price: number;
  product?: Product;
  quantity: number;
  size?: Size;
};
