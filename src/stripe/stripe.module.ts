import { Module } from "@nestjs/common";
import { StripeService } from "./stripe.service";
import { StripeController } from "./stripe.controller";
import { SalesService } from "../sales/sales.service";
import { CommonModule } from "../common/common.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Sale } from "../sales/entities/sale.entity";
import { OrderService } from "../order/order.service";
import { Order } from "../order/entities/order.entity";

@Module({
  imports: [CommonModule, TypeOrmModule.forFeature([Sale, Order])],
  controllers: [StripeController],
  providers: [StripeService, SalesService, OrderService],
})
export class StripeModule {}
