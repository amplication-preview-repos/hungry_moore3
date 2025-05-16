import { TimerWhereInput } from "./TimerWhereInput";

export type TimerListRelationFilter = {
  every?: TimerWhereInput;
  some?: TimerWhereInput;
  none?: TimerWhereInput;
};
