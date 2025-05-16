import * as graphql from "@nestjs/graphql";
import { SizeResolverBase } from "./base/size.resolver.base";
import { Size } from "./base/Size";
import { SizeService } from "./size.service";

@graphql.Resolver(() => Size)
export class SizeResolver extends SizeResolverBase {
  constructor(protected readonly service: SizeService) {
    super(service);
  }
}
