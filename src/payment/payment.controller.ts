import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from "@nestjs/common";
import { PaymentService } from "./payment.service";
import {
  AttachPaymentToCustomer,
  CreatePaymentDto,
} from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
import { CustomersService } from "../customers/customers.service";

@Controller("payment")
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly customersService: CustomersService,
  ) {}

  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Post(":id/customer/:customerId/attach")
  @HttpCode(204)
  async attachToCustomer(
    @Param() attachPaymentToCustomer: AttachPaymentToCustomer,
  ) {
    await this.paymentService.attachToCustomer(attachPaymentToCustomer);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await this.customersService.update(attachPaymentToCustomer.customerId, {
      invoice_settings: { default_payment_method: attachPaymentToCustomer.id },
    });
  }

  @Get()
  findAll() {
    return this.paymentService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.paymentService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(id, updatePaymentDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.paymentService.detach(id);
  }
}
