import { TimerWhereUniqueInput } from "./TimerWhereUniqueInput";
import { TimerUpdateInput } from "./TimerUpdateInput";

export type UpdateTimerArgs = {
  where: TimerWhereUniqueInput;
  data: TimerUpdateInput;
};
