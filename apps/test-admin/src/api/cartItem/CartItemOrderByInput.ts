import { SortOrder } from "../../util/SortOrder";

export type CartItemOrderByInput = {
  cartId?: SortOrder;
  colorid?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  sizeid?: SortOrder;
};
