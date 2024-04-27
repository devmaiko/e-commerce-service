import { Controller, Post, Body } from "@nestjs/common";
import { StripeService } from "./stripe.service";
import Stripe from "stripe";

@Controller("webhook")
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post()
  create(@Body() createStripeDto: Stripe.WebhookEndpoint) {
    return this.stripeService.webhook(createStripeDto);
  }
}
