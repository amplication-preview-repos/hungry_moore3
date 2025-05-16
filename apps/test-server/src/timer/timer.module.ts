import { Module } from "@nestjs/common";
import { TimerModuleBase } from "./base/timer.module.base";
import { TimerService } from "./timer.service";
import { TimerController } from "./timer.controller";
import { TimerResolver } from "./timer.resolver";

@Module({
  imports: [TimerModuleBase],
  controllers: [TimerController],
  providers: [TimerService, TimerResolver],
  exports: [TimerService],
})
export class TimerModule {}
