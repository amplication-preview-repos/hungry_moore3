import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductVariantServiceBase } from "./base/productVariant.service.base";

@Injectable()
export class ProductVariantService extends ProductVariantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
