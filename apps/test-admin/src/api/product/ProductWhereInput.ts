import { CartItemListRelationFilter } from "../cartItem/CartItemListRelationFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { ColorListRelationFilter } from "../color/ColorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { IntFilter } from "../../util/IntFilter";
import { SizeListRelationFilter } from "../size/SizeListRelationFilter";
import { TimerWhereUniqueInput } from "../timer/TimerWhereUniqueInput";
import { ProductVariantListRelationFilter } from "../productVariant/ProductVariantListRelationFilter";

export type ProductWhereInput = {
  cartItem?: CartItemListRelationFilter;
  cartItems?: OrderItemListRelationFilter;
  color?: ColorListRelationFilter;
  description?: StringFilter;
  discount?: DecimalFilter;
  id?: IntFilter;
  images?: StringFilter;
  name?: StringFilter;
  price?: DecimalFilter;
  size?: SizeListRelationFilter;
  timer?: TimerWhereUniqueInput;
  variants?: ProductVariantListRelationFilter;
};
