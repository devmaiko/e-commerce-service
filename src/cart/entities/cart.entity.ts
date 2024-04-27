import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { nanoid } from "nanoid";

@Entity("cart")
export class Cart {
  @PrimaryColumn()
  id: string;

  @Column({
    type: "jsonb",
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  products: Array<{ id: string; quantity: number }>;

  @Column()
  customerId: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @BeforeInsert()
  generateId() {
    this.id = `cart_${nanoid()}`;
  }
}
