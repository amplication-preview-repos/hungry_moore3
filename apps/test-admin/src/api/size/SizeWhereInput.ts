import { CartItemListRelationFilter } from "../cartItem/CartItemListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductVariantListRelationFilter } from "../productVariant/ProductVariantListRelationFilter";

export type SizeWhereInput = {
  cartItem?: CartItemListRelationFilter;
  id?: IntFilter;
  product?: ProductWhereUniqueInput;
  size?: StringFilter;
  sizeGuid?: StringFilter;
  variants?: ProductVariantListRelationFilter;
};
