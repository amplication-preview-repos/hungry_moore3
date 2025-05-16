import { ColorWhereUniqueInput } from "./ColorWhereUniqueInput";
import { ColorUpdateInput } from "./ColorUpdateInput";

export type UpdateColorArgs = {
  where: ColorWhereUniqueInput;
  data: ColorUpdateInput;
};
