import { ProductCreateNestedManyWithoutTimersInput } from "./ProductCreateNestedManyWithoutTimersInput";

export type TimerCreateInput = {
  discount: number;
  discription: string;
  endson: Date;
  name: string;
  products?: ProductCreateNestedManyWithoutTimersInput;
};
