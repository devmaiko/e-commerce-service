import { Injectable } from "@nestjs/common";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Repository } from "typeorm";
import { Cart } from "./entities/cart.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly repository: Repository<Cart>,
  ) {}

  async create(createCartDto: CreateCartDto) {
    const cart = await this.repository.create(createCartDto);
    return this.repository.save(cart);
  }

  findAllByCustomerId(id: string) {
    return this.repository.findBy({ customerId: id });
  }

  findOne(id: string) {
    console.log("id", id);
    return this.repository.findOne({ where: { id } });
  }

  update(id: string, updateCartDto: UpdateCartDto) {
    return this.repository.update(id, updateCartDto);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
