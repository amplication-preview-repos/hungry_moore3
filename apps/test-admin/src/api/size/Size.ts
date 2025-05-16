import { CartItem } from "../cartItem/CartItem";
import { Product } from "../product/Product";
import { ProductVariant } from "../productVariant/ProductVariant";

export type Size = {
  cartItem?: Array<CartItem>;
  id: number;
  product?: Product;
  size: string;
  sizeGuid: string;
  variants?: Array<ProductVariant>;
};
