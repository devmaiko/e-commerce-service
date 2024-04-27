import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
  @IsArray()
  products: Products[];

  @IsString()
  customerId: string;

  @IsString()
  status: Status;

  @IsString()
  cartId: string;

  @IsString()
  paymentMethodId: string;
}

export enum Status {
  PENDING = "pending",
  COMPLETED = "completed",
}

class Products extends CreateOrderDto {
  @IsString()
  id: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}
