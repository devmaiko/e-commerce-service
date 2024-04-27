import {
  IsArray,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from "class-validator";
import Stripe from "stripe";

export class CreateCartDto {
  @IsArray()
  products: Products[];

  @IsString()
  customerId: string;

  @IsNumber()
  @IsOptional()
  price: number;
}

class Products extends CreateCartDto {
  @IsString()
  id: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  @IsObject()
  @IsOptional()
  default_price: Stripe.Price;

  @IsString()
  @IsOptional()
  unit_amount: number;
}
