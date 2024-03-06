import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1709675444962 implements MigrationInterface {
    name = 'initialMigration1709675444962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tasks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "dueDate" TIMESTAMP NOT NULL, "priority" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "stateId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_17bdaad57c3360aae9fb9a1741f" FOREIGN KEY ("stateId") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_17bdaad57c3360aae9fb9a1741f"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "stateId"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
    }

}
