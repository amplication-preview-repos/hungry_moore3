import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type UserWhereInput = {
  addresses?: AddressListRelationFilter;
  age?: IntFilter;
  cart?: CartWhereUniqueInput;
  id?: IntFilter;
  inactive?: BooleanFilter;
  isAdmin?: BooleanFilter;
  mobile?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
