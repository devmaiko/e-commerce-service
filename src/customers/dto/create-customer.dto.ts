import { IsObject, IsOptional, IsString } from "class-validator";
import Stripe from "stripe";

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsObject()
  @IsOptional()
  metadata: Stripe.Emptyable<Stripe.MetadataParam>;

  @IsObject()
  @IsOptional()
  invoice_settings: Stripe.CustomerCreateParams.InvoiceSettings;
}
