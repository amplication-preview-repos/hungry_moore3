import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemUpdateInput = {
  cart?: OrderWhereUniqueInput;
  price?: number;
  product?: ProductWhereUniqueInput;
  quantity?: number;
};
