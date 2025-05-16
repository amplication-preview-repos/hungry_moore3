import { Module } from "@nestjs/common";
import { ColorModuleBase } from "./base/color.module.base";
import { ColorService } from "./color.service";
import { ColorController } from "./color.controller";
import { ColorResolver } from "./color.resolver";

@Module({
  imports: [ColorModuleBase],
  controllers: [ColorController],
  providers: [ColorService, ColorResolver],
  exports: [ColorService],
})
export class ColorModule {}
