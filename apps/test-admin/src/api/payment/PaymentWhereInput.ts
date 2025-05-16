import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: IntFilter;
  fromField?: StringFilter;
  id?: IntFilter;
  order?: OrderWhereUniqueInput;
  status?: "PENDING" | "FAILED" | "SUCCESS" | "REFUNDED" | "CANCELLED";
  to?: StringFilter;
  transactionId?: StringFilter;
  type?: "CASH_ON_DELIVERY" | "CARD" | "UPI";
};
