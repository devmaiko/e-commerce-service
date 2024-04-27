import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrders1714139219389 implements MigrationInterface {
  name = "CreateOrders1714139219389";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "orders" ("id" character varying NOT NULL, "products" jsonb NOT NULL DEFAULT '[]', "customerId" character varying NOT NULL, "cartId" character varying NOT NULL, "status" character varying NOT NULL, "paymentMethodId" character varying NOT NULL,"createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "FK_d7b6b269e131a5287bd05da4a51" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "FK_d7b6b269e131a5287bd05da4a51"`,
    );
    await queryRunner.query(`DROP TABLE "orders"`);
  }
}
