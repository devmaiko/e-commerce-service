import { Controller, Get, Post, Body } from "@nestjs/common";
import { SalesService } from "./sales.service";
import { CreateSaleDto } from "./dto/create-sale.dto";
import PdfService from "../common/services/pdf.service";

@Controller("sales")
export class SalesController {
  constructor(
    private readonly pdfService: PdfService,
    private readonly salesService: SalesService,
  ) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  async findAll() {
    const sales = await this.salesService.findAll();
    await this.pdfService.generate(sales);
  }
}
