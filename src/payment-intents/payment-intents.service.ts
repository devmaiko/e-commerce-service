import { Injectable } from "@nestjs/common";
import { CreatePaymentIntentDto } from "./dto/create-payment-intent.dto";
import { stripe } from "../stripe/stripe.service";

@Injectable()
export class PaymentIntentsService {
  async create(createPaymentIntentDto: CreatePaymentIntentDto) {
    const promises = [];
    for (const product of createPaymentIntentDto.products) {
      const paymentIntents = await stripe.paymentIntents.create({
        customer: createPaymentIntentDto.customerId,
        currency: "brl",
        amount: product.price * product.quantity,
        metadata: {
          orderId: createPaymentIntentDto.id,
          productId: product.id,
        },
      });
      await stripe.paymentIntents.confirm(paymentIntents.id, {
        payment_method: createPaymentIntentDto.paymentMethodId,
        return_url: "https://www.example.com",
      });
    }
    return Promise.all(promises);
  }
}
