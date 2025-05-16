import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type OrderItem = {
  cart?: Order;
  id: number;
  price: number;
  product?: Product;
  quantity: number;
};
