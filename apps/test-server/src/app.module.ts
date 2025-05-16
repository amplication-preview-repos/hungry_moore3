import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { AddressModule } from "./address/address.module";
import { CartModule } from "./cart/cart.module";
import { CartItemModule } from "./cartItem/cartItem.module";
import { OrderModule } from "./order/order.module";
import { OrderItemModule } from "./orderItem/orderItem.module";
import { ProductModule } from "./product/product.module";
import { SizeModule } from "./size/size.module";
import { ColorModule } from "./color/color.module";
import { ProductVariantModule } from "./productVariant/productVariant.module";
import { TimerModule } from "./timer/timer.module";
import { PaymentModule } from "./payment/payment.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    UserModule,
    AddressModule,
    CartModule,
    CartItemModule,
    OrderModule,
    OrderItemModule,
    ProductModule,
    SizeModule,
    ColorModule,
    ProductVariantModule,
    TimerModule,
    PaymentModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
