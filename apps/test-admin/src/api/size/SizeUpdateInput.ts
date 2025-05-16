import { CartItemUpdateManyWithoutSizesInput } from "./CartItemUpdateManyWithoutSizesInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantUpdateManyWithoutSizesInput } from "./ProductVariantUpdateManyWithoutSizesInput";

export type SizeUpdateInput = {
  cartItem?: CartItemUpdateManyWithoutSizesInput;
  product?: ProductWhereUniqueInput;
  size?: string;
  sizeGuid?: string;
  variants?: ProductVariantUpdateManyWithoutSizesInput;
};
