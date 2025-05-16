import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { ColorWhereUniqueInput } from "../color/ColorWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SizeWhereUniqueInput } from "../size/SizeWhereUniqueInput";

export type CartItemCreateInput = {
  cart: CartWhereUniqueInput;
  color: ColorWhereUniqueInput;
  price: number;
  product: ProductWhereUniqueInput;
  quantity: number;
  size: SizeWhereUniqueInput;
};
