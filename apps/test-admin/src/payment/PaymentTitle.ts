import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "fromField";

export const PaymentTitle = (record: TPayment): string => {
  return record.fromField?.toString() || String(record.id);
};
