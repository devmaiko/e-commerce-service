import { Module } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CartController } from "./cart.controller";
import { CommonModule } from "../common/common.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cart } from "./entities/cart.entity";
import { CustomersModule } from "../customers/customers.module";
import { ProductsModule } from "../products/products.module";

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([Cart]),
    CustomersModule,
    ProductsModule,
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
