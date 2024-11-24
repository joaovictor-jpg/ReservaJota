import { MigrationInterface, QueryRunner } from 'typeorm';

export class CriaTabelasCustomerAndOwner1732416602929
  implements MigrationInterface
{
  name = 'CriaTabelasCustomerAndOwner1732416602929';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "owners" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userName" character varying(100), "userEmail" character varying(70), "userTelephone" character varying(11), "userPassword" character varying(255), CONSTRAINT "UQ_b2e28b27c6fff8da9c2d67b009c" UNIQUE ("userEmail"), CONSTRAINT "PK_42838282f2e6b216301a70b02d6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "customers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userName" character varying(100), "userEmail" character varying(70), "userTelephone" character varying(11), "userPassword" character varying(255), CONSTRAINT "UQ_6c3e731da4505e4f610f044ea0b" UNIQUE ("userEmail"), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "customers"`);
    await queryRunner.query(`DROP TABLE "owners"`);
  }
}
