import { CartItemListRelationFilter } from "../cartItem/CartItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductVariantListRelationFilter } from "../productVariant/ProductVariantListRelationFilter";

export type ColorWhereInput = {
  cartItem?: CartItemListRelationFilter;
  color?: StringFilter;
  colorGuid?: StringFilter;
  id?: IntFilter;
  product?: ProductWhereUniqueInput;
  variants?: ProductVariantListRelationFilter;
};
