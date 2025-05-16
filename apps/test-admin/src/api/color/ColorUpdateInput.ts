import { CartItemUpdateManyWithoutColorsInput } from "./CartItemUpdateManyWithoutColorsInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantUpdateManyWithoutColorsInput } from "./ProductVariantUpdateManyWithoutColorsInput";

export type ColorUpdateInput = {
  cartItem?: CartItemUpdateManyWithoutColorsInput;
  color?: string;
  colorGuid?: string;
  product?: ProductWhereUniqueInput;
  variants?: ProductVariantUpdateManyWithoutColorsInput;
};
