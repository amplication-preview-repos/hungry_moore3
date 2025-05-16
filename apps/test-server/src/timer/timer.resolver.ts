import * as graphql from "@nestjs/graphql";
import { TimerResolverBase } from "./base/timer.resolver.base";
import { Timer } from "./base/Timer";
import { TimerService } from "./timer.service";

@graphql.Resolver(() => Timer)
export class TimerResolver extends TimerResolverBase {
  constructor(protected readonly service: TimerService) {
    super(service);
  }
}
