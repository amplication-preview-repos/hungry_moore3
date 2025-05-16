import { CartItemUpdateManyWithoutCartsInput } from "./CartItemUpdateManyWithoutCartsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartUpdateInput = {
  products?: CartItemUpdateManyWithoutCartsInput;
  user?: UserWhereUniqueInput;
};
