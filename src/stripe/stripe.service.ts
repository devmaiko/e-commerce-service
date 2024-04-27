import { Injectable } from "@nestjs/common";

import Stripe from "stripe";
import { SalesService } from "../sales/sales.service";
import { OrderService } from "../order/order.service";
import { Status } from "../order/dto/create-order.dto";

export const stripe = new Stripe(process.env.STRIPE_KEY);

@Injectable()
export class StripeService {
  constructor(
    public readonly salesService: SalesService,
    public readonly orderService: OrderService,
  ) {}
  async webhook(event) {
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        await this.salesService.create({
          customerId: paymentIntentSucceeded.customer,
          productId: paymentIntentSucceeded.metadata.productId,
          orderId: paymentIntentSucceeded.metadata.orderId,
          paymentMethod: paymentIntentSucceeded.payment_method,
          amount: paymentIntentSucceeded.amount,
        });
        await this.orderService.update(
          paymentIntentSucceeded.metadata.orderId,
          { status: Status.COMPLETED },
        );
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  }
}
