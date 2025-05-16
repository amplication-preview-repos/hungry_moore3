import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ColorService } from "./color.service";
import { ColorControllerBase } from "./base/color.controller.base";

@swagger.ApiTags("colors")
@common.Controller("colors")
export class ColorController extends ColorControllerBase {
  constructor(protected readonly service: ColorService) {
    super(service);
  }
}
