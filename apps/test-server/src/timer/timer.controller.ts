import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimerService } from "./timer.service";
import { TimerControllerBase } from "./base/timer.controller.base";

@swagger.ApiTags("timers")
@common.Controller("timers")
export class TimerController extends TimerControllerBase {
  constructor(protected readonly service: TimerService) {
    super(service);
  }
}
