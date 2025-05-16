import { Module } from "@nestjs/common";
import { SizeModuleBase } from "./base/size.module.base";
import { SizeService } from "./size.service";
import { SizeController } from "./size.controller";
import { SizeResolver } from "./size.resolver";

@Module({
  imports: [SizeModuleBase],
  controllers: [SizeController],
  providers: [SizeService, SizeResolver],
  exports: [SizeService],
})
export class SizeModule {}
