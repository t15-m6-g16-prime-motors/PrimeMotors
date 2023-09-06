import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteCascadeCarUserComments1694000268390 implements MigrationInterface {
    name = 'DeleteCascadeCarUserComments1694000268390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_cb77c129bb5afaca6648b869aa2"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_cb77c129bb5afaca6648b869aa2" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_cb77c129bb5afaca6648b869aa2"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_cb77c129bb5afaca6648b869aa2" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
