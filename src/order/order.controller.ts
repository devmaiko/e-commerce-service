import { Controller, Get, Post, Param, Delete } from "@nestjs/common";
import { OrderService } from "./order.service";
import { Status } from "./dto/create-order.dto";
import { SnsService } from "../common/services/sns.service";
import { CartService } from "../cart/cart.service";
import { CustomersService } from "../customers/customers.service";

@Controller("orders")
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly snsService: SnsService,
    private readonly cartService: CartService,
    private readonly customerService: CustomersService,
  ) {}

  @Post("cart/:cartId")
  async create(@Param("cartId") cartId: string) {
    const cart: any = await this.cartService.findOne(cartId);
    const customer: any = await this.customerService.findOne(cart.customerId);
    const order = await this.orderService.create({
      cartId: cart.id,
      customerId: cart.customerId,
      status: Status.PENDING,
      products: cart.products,
      paymentMethodId: customer.invoice_settings.default_payment_method,
    });
    await this.snsService.publish(JSON.stringify(order));
    return order;
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.orderService.findOne(+id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.orderService.remove(id);
  }
}
