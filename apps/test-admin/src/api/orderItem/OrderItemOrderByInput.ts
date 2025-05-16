import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  cartId?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
};
