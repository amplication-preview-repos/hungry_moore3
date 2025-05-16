import { CartItemCreateNestedManyWithoutProductsInput } from "./CartItemCreateNestedManyWithoutProductsInput";
import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";
import { ColorCreateNestedManyWithoutProductsInput } from "./ColorCreateNestedManyWithoutProductsInput";
import { Decimal } from "decimal.js";
import { SizeCreateNestedManyWithoutProductsInput } from "./SizeCreateNestedManyWithoutProductsInput";
import { TimerWhereUniqueInput } from "../timer/TimerWhereUniqueInput";
import { ProductVariantCreateNestedManyWithoutProductsInput } from "./ProductVariantCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  cartItem?: CartItemCreateNestedManyWithoutProductsInput;
  cartItems?: OrderItemCreateNestedManyWithoutProductsInput;
  color?: ColorCreateNestedManyWithoutProductsInput;
  description: string;
  discount: Decimal;
  images: string;
  name: string;
  price: Decimal;
  size?: SizeCreateNestedManyWithoutProductsInput;
  timer?: TimerWhereUniqueInput | null;
  variants?: ProductVariantCreateNestedManyWithoutProductsInput;
};
