import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { stripe } from "../stripe/stripe.service";

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return stripe.products.create(createProductDto);
  }

  findAll() {
    return stripe.products.list();
  }

  findOne(id: string) {
    return stripe.products.retrieve(id, { expand: ["default_price"] });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return stripe.products.update(id, updateProductDto);
  }

  remove(id: string) {
    return stripe.products.update(id, { active: false });
  }
}
