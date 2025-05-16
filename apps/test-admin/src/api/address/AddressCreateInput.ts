import { OrderCreateNestedManyWithoutAddressesInput } from "./OrderCreateNestedManyWithoutAddressesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressCreateInput = {
  address: string;
  isPrimary: boolean;
  orders?: OrderCreateNestedManyWithoutAddressesInput;
  pincode: number;
  user: UserWhereUniqueInput;
};
