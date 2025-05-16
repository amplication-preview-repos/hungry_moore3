import { ProductVariantWhereInput } from "./ProductVariantWhereInput";
import { ProductVariantOrderByInput } from "./ProductVariantOrderByInput";

export type ProductVariantFindManyArgs = {
  where?: ProductVariantWhereInput;
  orderBy?: Array<ProductVariantOrderByInput>;
  skip?: number;
  take?: number;
};
