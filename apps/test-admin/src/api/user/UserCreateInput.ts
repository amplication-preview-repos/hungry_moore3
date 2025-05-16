import { AddressCreateNestedManyWithoutUsersInput } from "./AddressCreateNestedManyWithoutUsersInput";
import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  addresses?: AddressCreateNestedManyWithoutUsersInput;
  age: number;
  cart?: CartWhereUniqueInput | null;
  inactive: boolean;
  isAdmin: boolean;
  mobile: string;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
};
