import { MigrationInterface, QueryRunner } from "typeorm";

export class ResetTokenEntity1692885683665 implements MigrationInterface {
    name = 'ResetTokenEntity1692885683665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_token" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_token"`);
    }

}
