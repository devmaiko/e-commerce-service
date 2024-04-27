import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  HttpCode,
} from "@nestjs/common";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { CustomersService } from "../customers/customers.service";
import { ProductsService } from "../products/products.service";
import Stripe from "stripe";

@Controller("cart")
export class CartController {
  constructor(
    private readonly cartService: CartService,
    private readonly customersService: CustomersService,
    private readonly productsService: ProductsService,
  ) {}

  @Post()
  async create(@Body() createCartDto: CreateCartDto) {
    const promises = [];
    promises.push(this.customersService.findOne(createCartDto.customerId));
    for (const product of createCartDto.products) {
      const productInfo = await this.productsService.findOne(product.id);
      product.price = (productInfo.default_price as Stripe.Price).unit_amount;
    }
    await Promise.all(promises);
    return this.cartService.create(createCartDto);
  }

  @Get(":id")
  async findAllByCustomerId(@Param("id") id: string) {
    await this.customersService.findOne(id);
    const items = await this.cartService.findAllByCustomerId(id);
    if (!items.length) {
      throw new HttpException(
        "Empty card for this customer!",
        HttpStatus.NOT_FOUND,
      );
    } else {
      return items;
    }
  }

  @Patch(":id")
  @HttpCode(204)
  async update(@Param("id") id: string, @Body() updateCartDto: UpdateCartDto) {
    const item = await this.cartService.findOne(id);
    if (!item) {
      throw new HttpException(
        "Cart not found to update!",
        HttpStatus.NOT_FOUND,
      );
    }
    return this.cartService.update(id, updateCartDto);
  }

  @Delete(":id")
  @HttpCode(204)
  async remove(@Param("id") id: string) {
    const item = await this.cartService.findOne(id);
    if (!item) {
      throw new HttpException(
        "Cart not found to delete!",
        HttpStatus.NOT_FOUND,
      );
    }
    return this.cartService.remove(id);
  }
}
