import { Injectable } from "@nestjs/common";
import { CreateOrderDto, Status } from "./dto/create-order.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./entities/order.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const order = await this.repository.create(createOrderDto);
    return this.repository.save(order);
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: string, updateOrderDto: { status: Status }) {
    return this.repository.update(id, updateOrderDto);
  }

  remove(id: string) {
    return `This action removes a #${id} order`;
  }
}
