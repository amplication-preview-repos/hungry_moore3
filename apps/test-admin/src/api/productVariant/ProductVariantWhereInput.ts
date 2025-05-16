import { ColorWhereUniqueInput } from "../color/ColorWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SizeWhereUniqueInput } from "../size/SizeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductVariantWhereInput = {
  color?: ColorWhereUniqueInput;
  id?: IntFilter;
  price?: DecimalNullableFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntFilter;
  size?: SizeWhereUniqueInput;
  sku?: StringNullableFilter;
};
