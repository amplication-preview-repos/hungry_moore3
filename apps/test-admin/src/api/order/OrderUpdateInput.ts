import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  address?: AddressWhereUniqueInput;
  payment?: PaymentWhereUniqueInput | null;
  paymentId?: number | null;
  products?: OrderItemUpdateManyWithoutOrdersInput;
  status?:
    | "PENDING"
    | "PROCESSING"
    | "DISPATCHED"
    | "SHIPPED"
    | "DELIVERED"
    | "CANCELLED";
  total?: number;
  user?: UserWhereUniqueInput;
};
