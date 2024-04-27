import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CommonModule } from "./common/common.module";
import { ProductsModule } from "./products/products.module";
import { CartModule } from "./cart/cart.module";
import { PaymentModule } from "./payment/payment.module";
import { SalesModule } from "./sales/sales.module";
import { OrderModule } from "./order/order.module";
import { CustomersModule } from "./customers/customers.module";
import { PaymentIntentsModule } from "./payment-intents/payment-intents.module";
import { StripeModule } from "./stripe/stripe.module";

@Module({
  imports: [
    CommonModule,
    ProductsModule,
    CartModule,
    PaymentModule,
    SalesModule,
    OrderModule,
    CustomersModule,
    PaymentIntentsModule,
    StripeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
