import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { stripe } from "../stripe/stripe.service";

@Injectable()
export class CustomersService {
  create(createCustomerDto: CreateCustomerDto) {
    return stripe.customers.create(createCustomerDto);
  }

  findAll() {
    return stripe.customers.list();
  }

  findOne(id: string) {
    return stripe.customers.retrieve(id);
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return stripe.customers.update(id, updateCustomerDto);
  }

  remove(id: string) {
    return stripe.customers.del(id);
  }

  findCustomerPaymentMethodByCustomerId(id: string) {
    return stripe.customers.listPaymentMethods(id, { limit: 100 });
  }
}
