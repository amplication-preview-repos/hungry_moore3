import { ColorWhereInput } from "./ColorWhereInput";
import { ColorOrderByInput } from "./ColorOrderByInput";

export type ColorFindManyArgs = {
  where?: ColorWhereInput;
  orderBy?: Array<ColorOrderByInput>;
  skip?: number;
  take?: number;
};
