import { Module } from "@nestjs/common";
import { PaymentIntentsService } from "./payment-intents.service";
import { PaymentIntentsController } from "./payment-intents.controller";
import { CartService } from "../cart/cart.service";
import { CommonModule } from "../common/common.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cart } from "../cart/entities/cart.entity";

@Module({
  imports: [CommonModule, TypeOrmModule.forFeature([Cart])],
  controllers: [PaymentIntentsController],
  providers: [PaymentIntentsService, CartService],
})
export class PaymentIntentsModule {}
