import { CartItemCreateNestedManyWithoutColorsInput } from "./CartItemCreateNestedManyWithoutColorsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantCreateNestedManyWithoutColorsInput } from "./ProductVariantCreateNestedManyWithoutColorsInput";

export type ColorCreateInput = {
  cartItem?: CartItemCreateNestedManyWithoutColorsInput;
  color: string;
  colorGuid: string;
  product: ProductWhereUniqueInput;
  variants?: ProductVariantCreateNestedManyWithoutColorsInput;
};
