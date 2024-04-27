import { Module } from "@nestjs/common";
import { SalesService } from "./sales.service";
import { SalesController } from "./sales.controller";
import { CommonModule } from "../common/common.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Sale } from "./entities/sale.entity";
import PdfService from "../common/services/pdf.service";

@Module({
  imports: [CommonModule, TypeOrmModule.forFeature([Sale])],
  controllers: [SalesController],
  providers: [SalesService, PdfService],
})
export class SalesModule {}
