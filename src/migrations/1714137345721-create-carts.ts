import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCarts1714137345721 implements MigrationInterface {
  name = "CreateCarts1714137345721";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cart" ("id" character varying NOT NULL, "products" jsonb NOT NULL DEFAULT '[]', "customerId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cart"`);
  }
}
