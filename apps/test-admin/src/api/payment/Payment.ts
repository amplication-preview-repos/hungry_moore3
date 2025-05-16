import { Order } from "../order/Order";

export type Payment = {
  amount: number;
  fromField: string;
  id: number;
  order?: Order | null;
  status?: "PENDING" | "FAILED" | "SUCCESS" | "REFUNDED" | "CANCELLED";
  to: string;
  transactionId: string;
  type?: "CASH_ON_DELIVERY" | "CARD" | "UPI";
};
