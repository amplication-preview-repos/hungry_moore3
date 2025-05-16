import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentCreateInput = {
  amount: number;
  fromField: string;
  order?: OrderWhereUniqueInput | null;
  status: "PENDING" | "FAILED" | "SUCCESS" | "REFUNDED" | "CANCELLED";
  to: string;
  transactionId: string;
  type: "CASH_ON_DELIVERY" | "CARD" | "UPI";
};
