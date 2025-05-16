import { Color as TColor } from "../api/color/Color";

export const COLOR_TITLE_FIELD = "color";

export const ColorTitle = (record: TColor): string => {
  return record.color?.toString() || String(record.id);
};
