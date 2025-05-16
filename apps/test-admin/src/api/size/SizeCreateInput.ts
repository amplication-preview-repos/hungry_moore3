import { CartItemCreateNestedManyWithoutSizesInput } from "./CartItemCreateNestedManyWithoutSizesInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantCreateNestedManyWithoutSizesInput } from "./ProductVariantCreateNestedManyWithoutSizesInput";

export type SizeCreateInput = {
  cartItem?: CartItemCreateNestedManyWithoutSizesInput;
  product: ProductWhereUniqueInput;
  size: string;
  sizeGuid: string;
  variants?: ProductVariantCreateNestedManyWithoutSizesInput;
};
