import { Order } from "../order/Order";
import { User } from "../user/User";

export type Address = {
  address: string;
  id: number;
  isPrimary: boolean;
  orders?: Array<Order>;
  pincode: number;
  user?: User;
};
