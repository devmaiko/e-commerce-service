import { Module } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { PaymentController } from "./payment.controller";
import { CustomersService } from "../customers/customers.service";

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, CustomersService],
})
export class PaymentModule {}
