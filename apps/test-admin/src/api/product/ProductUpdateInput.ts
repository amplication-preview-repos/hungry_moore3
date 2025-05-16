import { CartItemUpdateManyWithoutProductsInput } from "./CartItemUpdateManyWithoutProductsInput";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";
import { ColorUpdateManyWithoutProductsInput } from "./ColorUpdateManyWithoutProductsInput";
import { Decimal } from "decimal.js";
import { SizeUpdateManyWithoutProductsInput } from "./SizeUpdateManyWithoutProductsInput";
import { TimerWhereUniqueInput } from "../timer/TimerWhereUniqueInput";
import { ProductVariantUpdateManyWithoutProductsInput } from "./ProductVariantUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  cartItem?: CartItemUpdateManyWithoutProductsInput;
  cartItems?: OrderItemUpdateManyWithoutProductsInput;
  color?: ColorUpdateManyWithoutProductsInput;
  description?: string;
  discount?: Decimal;
  images?: string;
  name?: string;
  price?: Decimal;
  size?: SizeUpdateManyWithoutProductsInput;
  timer?: TimerWhereUniqueInput | null;
  variants?: ProductVariantUpdateManyWithoutProductsInput;
};
