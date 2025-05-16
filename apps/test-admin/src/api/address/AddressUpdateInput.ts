import { OrderUpdateManyWithoutAddressesInput } from "./OrderUpdateManyWithoutAddressesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressUpdateInput = {
  address?: string;
  isPrimary?: boolean;
  orders?: OrderUpdateManyWithoutAddressesInput;
  pincode?: number;
  user?: UserWhereUniqueInput;
};
