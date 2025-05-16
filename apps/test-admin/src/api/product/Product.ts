import { CartItem } from "../cartItem/CartItem";
import { OrderItem } from "../orderItem/OrderItem";
import { Color } from "../color/Color";
import { Decimal } from "decimal.js";
import { Size } from "../size/Size";
import { Timer } from "../timer/Timer";
import { ProductVariant } from "../productVariant/ProductVariant";

export type Product = {
  cartItem?: Array<CartItem>;
  cartItems?: Array<OrderItem>;
  color?: Array<Color>;
  description: string;
  discount: Decimal;
  id: number;
  images: string;
  name: string;
  price: Decimal;
  size?: Array<Size>;
  timer?: Timer | null;
  variants?: Array<ProductVariant>;
};
