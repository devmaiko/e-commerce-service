import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { CommonModule } from "../common/common.module";
import { Order } from "./entities/order.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SnsService } from "../common/services/sns.service";
import { CartService } from "../cart/cart.service";
import { Cart } from "../cart/entities/cart.entity";
import { CustomersService } from "../customers/customers.service";

@Module({
  imports: [CommonModule, TypeOrmModule.forFeature([Order, Cart])],
  controllers: [OrderController],
  providers: [OrderService, SnsService, CartService, CustomersService],
})
export class OrderModule {}
