import { IsNumber, IsString } from "class-validator";

export class CreateSaleDto {
  @IsString()
  customerId: string;

  @IsString()
  productId: string;

  @IsString()
  orderId: string;

  @IsString()
  paymentMethod: string;

  @IsNumber()
  amount: number;
}
