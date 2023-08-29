import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteCascadePictures1693327373459 implements MigrationInterface {
    name = 'DeleteCascadePictures1693327373459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pictures" DROP CONSTRAINT "FK_920495d35b62eb8dee68673ce7d"`);
        await queryRunner.query(`ALTER TABLE "pictures" ADD CONSTRAINT "FK_920495d35b62eb8dee68673ce7d" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pictures" DROP CONSTRAINT "FK_920495d35b62eb8dee68673ce7d"`);
        await queryRunner.query(`ALTER TABLE "pictures" ADD CONSTRAINT "FK_920495d35b62eb8dee68673ce7d" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
