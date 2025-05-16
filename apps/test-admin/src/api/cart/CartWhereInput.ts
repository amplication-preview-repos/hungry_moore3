import { IntFilter } from "../../util/IntFilter";
import { CartItemListRelationFilter } from "../cartItem/CartItemListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartWhereInput = {
  id?: IntFilter;
  products?: CartItemListRelationFilter;
  user?: UserWhereUniqueInput;
};
