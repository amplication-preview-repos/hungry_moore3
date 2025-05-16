import { CartItem } from "../cartItem/CartItem";
import { Product } from "../product/Product";
import { ProductVariant } from "../productVariant/ProductVariant";

export type Color = {
  cartItem?: Array<CartItem>;
  color: string;
  colorGuid: string;
  id: number;
  product?: Product;
  variants?: Array<ProductVariant>;
};
