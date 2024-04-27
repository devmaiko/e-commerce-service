import { Controller, Post, Body, HttpCode } from "@nestjs/common";
import { PaymentIntentsService } from "./payment-intents.service";
import { CreatePaymentIntentDto } from "./dto/create-payment-intent.dto";

@Controller("payment-intents")
export class PaymentIntentsController {
  constructor(private readonly paymentIntentsService: PaymentIntentsService) {}

  @Post()
  @HttpCode(204)
  create(@Body() createPaymentIntentDto: CreatePaymentIntentDto) {
    return this.paymentIntentsService.create(createPaymentIntentDto);
  }
}
