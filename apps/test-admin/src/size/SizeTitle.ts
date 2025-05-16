import { Size as TSize } from "../api/size/Size";

export const SIZE_TITLE_FIELD = "size";

export const SizeTitle = (record: TSize): string => {
  return record.size?.toString() || String(record.id);
};
