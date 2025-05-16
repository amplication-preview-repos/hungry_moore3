import { Address } from "../address/Address";
import { Payment } from "../payment/Payment";
import { OrderItem } from "../orderItem/OrderItem";
import { User } from "../user/User";

export type Order = {
  address?: Address;
  id: number;
  payment?: Payment | null;
  paymentId: number | null;
  products?: Array<OrderItem>;
  status?:
    | "PENDING"
    | "PROCESSING"
    | "DISPATCHED"
    | "SHIPPED"
    | "DELIVERED"
    | "CANCELLED";
  total: number;
  user?: User;
};
