import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimerServiceBase } from "./base/timer.service.base";

@Injectable()
export class TimerService extends TimerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
