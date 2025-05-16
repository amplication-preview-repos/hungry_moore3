import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { ColorWhereUniqueInput } from "../color/ColorWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SizeWhereUniqueInput } from "../size/SizeWhereUniqueInput";

export type CartItemWhereInput = {
  cart?: CartWhereUniqueInput;
  color?: ColorWhereUniqueInput;
  id?: IntFilter;
  price?: IntFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntFilter;
  size?: SizeWhereUniqueInput;
};
