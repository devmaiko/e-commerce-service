import { Injectable } from "@nestjs/common";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
import { stripe } from "../stripe/stripe.service";

@Injectable()
export class PaymentService {
  create(createPaymentDto: CreatePaymentDto) {
    return stripe.paymentMethods.create(createPaymentDto);
  }

  findAll() {
    return stripe.paymentMethods.list();
  }

  findOne(id: string) {
    return stripe.paymentMethods.retrieve(id);
  }

  update(id: string, updatePaymentDto: UpdatePaymentDto) {
    return stripe.paymentMethods.update(id, updatePaymentDto);
  }

  async attachToCustomer(attachPaymentToCustomer) {
    return stripe.setupIntents.create({
      payment_method_types: ["card"],
      confirm: true,
      customer: attachPaymentToCustomer.customerId,
      payment_method: attachPaymentToCustomer.id,
    });
  }

  detach(id) {
    return stripe.paymentMethods.detach(id);
  }
}
