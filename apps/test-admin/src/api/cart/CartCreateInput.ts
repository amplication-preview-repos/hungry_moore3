import { CartItemCreateNestedManyWithoutCartsInput } from "./CartItemCreateNestedManyWithoutCartsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartCreateInput = {
  products?: CartItemCreateNestedManyWithoutCartsInput;
  user: UserWhereUniqueInput;
};
