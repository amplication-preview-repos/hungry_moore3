import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemWhereInput = {
  cart?: OrderWhereUniqueInput;
  id?: IntFilter;
  price?: IntFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntFilter;
};
