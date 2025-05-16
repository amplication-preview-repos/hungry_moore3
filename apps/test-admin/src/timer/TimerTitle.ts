import { Timer as TTimer } from "../api/timer/Timer";

export const TIMER_TITLE_FIELD = "name";

export const TimerTitle = (record: TTimer): string => {
  return record.name?.toString() || String(record.id);
};
