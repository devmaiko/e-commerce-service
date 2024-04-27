import { IsArray, IsNumber, IsString } from "class-validator";

export class CreatePaymentIntentDto {
  @IsArray()
  products: Products[];

  @IsString()
  customerId: string;

  @IsString()
  cartId: string;

  @IsString()
  id: string;

  @IsString()
  paymentMethodId: string;
}
class Products extends CreatePaymentIntentDto {
  @IsString()
  id: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}
