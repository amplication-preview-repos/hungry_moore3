import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  address?: AddressWhereUniqueInput;
  id?: IntFilter;
  payment?: PaymentWhereUniqueInput;
  paymentId?: IntNullableFilter;
  products?: OrderItemListRelationFilter;
  status?:
    | "PENDING"
    | "PROCESSING"
    | "DISPATCHED"
    | "SHIPPED"
    | "DELIVERED"
    | "CANCELLED";
  total?: IntFilter;
  user?: UserWhereUniqueInput;
};
