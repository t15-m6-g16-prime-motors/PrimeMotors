import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangePictureEntity1692816334334 implements MigrationInterface {
    name = 'ChangePictureEntity1692816334334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pictures" DROP COLUMN "picture"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "pictures" ADD "coverImage" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pictures" ADD "image01" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pictures" ADD "image02" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pictures" ADD "image03" text`);
        await queryRunner.query(`ALTER TABLE "pictures" ADD "image04" text`);
        await queryRunner.query(`ALTER TABLE "pictures" ADD "image05" text`);
        await queryRunner.query(`ALTER TABLE "pictures" ADD "image06" text`);
        await queryRunner.query(`ALTER TABLE "pictures" DROP CONSTRAINT "FK_920495d35b62eb8dee68673ce7d"`);
        await queryRunner.query(`ALTER TABLE "pictures" ADD CONSTRAINT "UQ_920495d35b62eb8dee68673ce7d" UNIQUE ("carId")`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pictures" ADD CONSTRAINT "FK_920495d35b62eb8dee68673ce7d" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pictures" DROP CONSTRAINT "FK_920495d35b62eb8dee68673ce7d"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pictures" DROP CONSTRAINT "UQ_920495d35b62eb8dee68673ce7d"`);
        await queryRunner.query(`ALTER TABLE "pictures" ADD CONSTRAINT "FK_920495d35b62eb8dee68673ce7d" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pictures" DROP COLUMN "image06"`);
        await queryRunner.query(`ALTER TABLE "pictures" DROP COLUMN "image05"`);
        await queryRunner.query(`ALTER TABLE "pictures" DROP COLUMN "image04"`);
        await queryRunner.query(`ALTER TABLE "pictures" DROP COLUMN "image03"`);
        await queryRunner.query(`ALTER TABLE "pictures" DROP COLUMN "image02"`);
        await queryRunner.query(`ALTER TABLE "pictures" DROP COLUMN "image01"`);
        await queryRunner.query(`ALTER TABLE "pictures" DROP COLUMN "coverImage"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "country" character varying(50) NOT NULL DEFAULT 'Brasil'`);
        await queryRunner.query(`ALTER TABLE "pictures" ADD "picture" text NOT NULL`);
    }

}
