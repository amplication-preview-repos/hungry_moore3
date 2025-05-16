import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressWhereInput = {
  address?: StringFilter;
  id?: IntFilter;
  isPrimary?: BooleanFilter;
  orders?: OrderListRelationFilter;
  pincode?: IntFilter;
  user?: UserWhereUniqueInput;
};
