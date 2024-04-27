import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { nanoid } from "nanoid";

@Entity("sales")
export class Sale {
  @PrimaryColumn()
  id: string;

  @Column()
  customerId: string;

  @Column()
  productId: string;

  @Column()
  orderId: string;

  @Column()
  paymentMethod: string;

  @Column()
  amount: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @BeforeInsert()
  generateId() {
    this.id = `sale_${nanoid()}`;
  }
}
