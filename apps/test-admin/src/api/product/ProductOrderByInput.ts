import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  description?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  timerid?: SortOrder;
};
