import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeCarsEntity1691674127414 implements MigrationInterface {
    name = 'ChangeCarsEntity1691674127414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "fuel_type"`);
        await queryRunner.query(`DROP TYPE "public"."cars_fuel_type_enum"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "fuel_type" character varying NOT NULL DEFAULT 'Gasoline'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "fuel_type"`);
        await queryRunner.query(`CREATE TYPE "public"."cars_fuel_type_enum" AS ENUM('GASOLINE', 'ETHANOL', 'FLEX', 'ELECTRIC')`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "fuel_type" "public"."cars_fuel_type_enum" NOT NULL DEFAULT 'GASOLINE'`);
    }

}
