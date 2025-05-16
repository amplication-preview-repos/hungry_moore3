import * as graphql from "@nestjs/graphql";
import { ColorResolverBase } from "./base/color.resolver.base";
import { Color } from "./base/Color";
import { ColorService } from "./color.service";

@graphql.Resolver(() => Color)
export class ColorResolver extends ColorResolverBase {
  constructor(protected readonly service: ColorService) {
    super(service);
  }
}
