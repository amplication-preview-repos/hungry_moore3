import { Product } from "../product/Product";

export type Timer = {
  discount: number;
  discription: string;
  endson: Date;
  id: number;
  name: string;
  products?: Array<Product>;
};
