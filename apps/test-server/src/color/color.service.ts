import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ColorServiceBase } from "./base/color.service.base";

@Injectable()
export class ColorService extends ColorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
