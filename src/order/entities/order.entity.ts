import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { nanoid } from "nanoid";
import { Cart } from "../../cart/entities/cart.entity";

@Entity("orders")
export class Order {
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

  @Column()
  cartId: string;

  @Column()
  status: string;

  @Column()
  paymentMethodId: string;

  @ManyToOne(() => Cart, (cart) => cart.id)
  @JoinColumn({ name: "cartId" })
  cart: Cart;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @BeforeInsert()
  generateId() {
    this.id = `ord_${nanoid()}`;
  }
}
