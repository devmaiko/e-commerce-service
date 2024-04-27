import { IsObject, IsOptional, IsString } from "class-validator";
import Stripe from "stripe";

export class CreateProductDto {
  @IsString()
  name: string;

  @IsObject()
  default_price_data: Stripe.ProductCreateParams.DefaultPriceData;

  @IsString()
  @IsOptional()
  description: string;

  @IsObject()
  @IsOptional()
  metadata: Stripe.MetadataParam;
}
