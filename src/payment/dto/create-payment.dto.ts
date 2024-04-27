import { IsObject, IsString } from "class-validator";
import Stripe from "stripe";

export class CreatePaymentDto {
  @IsString()
  type: Stripe.PaymentMethodCreateParams.Type;

  @IsObject()
  card: Stripe.PaymentMethodCreateParams.Card1;
}

export class AttachPaymentToCustomer {
  @IsString()
  id: string;

  @IsString()
  customerId;
}
