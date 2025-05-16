import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductVariantService } from "./productVariant.service";
import { ProductVariantControllerBase } from "./base/productVariant.controller.base";

@swagger.ApiTags("productVariants")
@common.Controller("productVariants")
export class ProductVariantController extends ProductVariantControllerBase {
  constructor(protected readonly service: ProductVariantService) {
    super(service);
  }
}
