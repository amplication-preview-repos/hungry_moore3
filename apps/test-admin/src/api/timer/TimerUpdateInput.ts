import { ProductUpdateManyWithoutTimersInput } from "./ProductUpdateManyWithoutTimersInput";

export type TimerUpdateInput = {
  discount?: number;
  discription?: string;
  endson?: Date;
  name?: string;
  products?: ProductUpdateManyWithoutTimersInput;
};
