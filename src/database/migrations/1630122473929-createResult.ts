import {MigrationInterface, QueryRunner} from "typeorm";

export class createResult1630122473929 implements MigrationInterface {
    name = 'createResult1630122473929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "result" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "generated" TIMESTAMP NOT NULL, "visibility" integer NOT NULL, "risk" integer NOT NULL, "module" character varying NOT NULL, "data" character varying NOT NULL, "falsePositive" boolean NOT NULL, "scanGuid" uuid, CONSTRAINT "PK_a95941d95c2092eea7cab0f0f3b" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`ALTER TABLE "public"."scan" ADD CONSTRAINT "UQ_eb96310a0bb1b246d40735022dc" UNIQUE ("target")`);
        await queryRunner.query(`ALTER TABLE "result" ADD CONSTRAINT "FK_64fc1c8158334ad483fd7ad408b" FOREIGN KEY ("scanGuid") REFERENCES "scan"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "result" DROP CONSTRAINT "FK_64fc1c8158334ad483fd7ad408b"`);
        await queryRunner.query(`ALTER TABLE "public"."scan" DROP CONSTRAINT "UQ_eb96310a0bb1b246d40735022dc"`);
        await queryRunner.query(`DROP TABLE "result"`);
    }

}
