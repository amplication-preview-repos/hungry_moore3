import { Module } from "@nestjs/common";
import { ProductVariantModuleBase } from "./base/productVariant.module.base";
import { ProductVariantService } from "./productVariant.service";
import { ProductVariantController } from "./productVariant.controller";
import { ProductVariantResolver } from "./productVariant.resolver";

@Module({
  imports: [ProductVariantModuleBase],
  controllers: [ProductVariantController],
  providers: [ProductVariantService, ProductVariantResolver],
  exports: [ProductVariantService],
})
export class ProductVariantModule {}
