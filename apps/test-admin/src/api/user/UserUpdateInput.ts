import { AddressUpdateManyWithoutUsersInput } from "./AddressUpdateManyWithoutUsersInput";
import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  addresses?: AddressUpdateManyWithoutUsersInput;
  age?: number;
  cart?: CartWhereUniqueInput | null;
  inactive?: boolean;
  isAdmin?: boolean;
  mobile?: string;
  name?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
};
