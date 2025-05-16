import { Color } from "../color/Color";
import { Decimal } from "decimal.js";
import { Product } from "../product/Product";
import { Size } from "../size/Size";

export type ProductVariant = {
  color?: Color;
  id: number;
  price: Decimal | null;
  product?: Product;
  quantity: number;
  size?: Size;
  sku: string | null;
};
