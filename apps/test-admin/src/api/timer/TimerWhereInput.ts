import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type TimerWhereInput = {
  discount?: IntFilter;
  discription?: StringFilter;
  endson?: DateTimeFilter;
  id?: IntFilter;
  name?: StringFilter;
  products?: ProductListRelationFilter;
};
