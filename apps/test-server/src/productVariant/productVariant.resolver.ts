import * as graphql from "@nestjs/graphql";
import { ProductVariantResolverBase } from "./base/productVariant.resolver.base";
import { ProductVariant } from "./base/ProductVariant";
import { ProductVariantService } from "./productVariant.service";

@graphql.Resolver(() => ProductVariant)
export class ProductVariantResolver extends ProductVariantResolverBase {
  constructor(protected readonly service: ProductVariantService) {
    super(service);
  }
}
