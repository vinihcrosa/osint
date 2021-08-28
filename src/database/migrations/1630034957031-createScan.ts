import {MigrationInterface, QueryRunner} from "typeorm";

export class createScan1630034957031 implements MigrationInterface {
    name = 'createScan1630034957031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "scan" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "target" character varying NOT NULL, "type" character varying array NOT NULL, "tags" character varying array NOT NULL, CONSTRAINT "PK_d2afd268992e2adbd5da7c646e2" PRIMARY KEY ("guid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "scan"`);
    }

}
