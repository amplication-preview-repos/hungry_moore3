import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  address: AddressWhereUniqueInput;
  payment?: PaymentWhereUniqueInput | null;
  paymentId?: number | null;
  products?: OrderItemCreateNestedManyWithoutOrdersInput;
  status:
    | "PENDING"
    | "PROCESSING"
    | "DISPATCHED"
    | "SHIPPED"
    | "DELIVERED"
    | "CANCELLED";
  total: number;
  user: UserWhereUniqueInput;
};
