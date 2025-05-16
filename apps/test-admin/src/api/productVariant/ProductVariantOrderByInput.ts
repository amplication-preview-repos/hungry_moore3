import { SortOrder } from "../../util/SortOrder";

export type ProductVariantOrderByInput = {
  colorId?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  sizeId?: SortOrder;
  sku?: SortOrder;
};
