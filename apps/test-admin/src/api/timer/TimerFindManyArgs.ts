import { TimerWhereInput } from "./TimerWhereInput";
import { TimerOrderByInput } from "./TimerOrderByInput";

export type TimerFindManyArgs = {
  where?: TimerWhereInput;
  orderBy?: Array<TimerOrderByInput>;
  skip?: number;
  take?: number;
};
