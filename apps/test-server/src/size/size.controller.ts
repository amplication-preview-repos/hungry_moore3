import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SizeService } from "./size.service";
import { SizeControllerBase } from "./base/size.controller.base";

@swagger.ApiTags("sizes")
@common.Controller("sizes")
export class SizeController extends SizeControllerBase {
  constructor(protected readonly service: SizeService) {
    super(service);
  }
}
