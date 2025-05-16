import { ColorWhereUniqueInput } from "../color/ColorWhereUniqueInput";
import { Decimal } from "decimal.js";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SizeWhereUniqueInput } from "../size/SizeWhereUniqueInput";

export type ProductVariantUpdateInput = {
  color?: ColorWhereUniqueInput;
  price?: Decimal | null;
  product?: ProductWhereUniqueInput;
  quantity?: number;
  size?: SizeWhereUniqueInput;
  sku?: string | null;
};
