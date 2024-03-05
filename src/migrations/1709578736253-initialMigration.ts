import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1709578736253 implements MigrationInterface {
    name = 'initialMigration1709578736253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isAdm"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isAdm" boolean NOT NULL DEFAULT false`);
    }

}
