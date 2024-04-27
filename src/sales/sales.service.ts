import { Injectable } from "@nestjs/common";
import { CreateSaleDto } from "./dto/create-sale.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Sale } from "./entities/sale.entity";

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private readonly repository: Repository<Sale>,
  ) {}
  async create(createSaleDto: CreateSaleDto) {
    const sale = await this.repository.create(createSaleDto);
    return this.repository.save(sale);
  }

  async findAll() {
    return this.repository.find();
  }
}
