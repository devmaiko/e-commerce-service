import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSales1714242320016 implements MigrationInterface {
  name = "CreateSales1714242320016";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "sales" ("id" character varying NOT NULL, "customerId" character varying NOT NULL, "productId" character varying NOT NULL, "orderId" character varying NOT NULL, "paymentMethod" character varying NOT NULL, "amount" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "sales"`);
  }
}
