import {MigrationInterface, QueryRunner} from "typeorm";

export class createTypes1630122944814 implements MigrationInterface {
    name = 'createTypes1630122944814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "types" ("guid" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "raw" integer NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_1bce8fe4e347416718bd878e0c7" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`ALTER TABLE "public"."result" ADD "typeGuid" uuid`);
        await queryRunner.query(`ALTER TABLE "public"."result" ADD CONSTRAINT "FK_a1ee464c104b573fd6463a7bf26" FOREIGN KEY ("typeGuid") REFERENCES "types"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."result" DROP CONSTRAINT "FK_a1ee464c104b573fd6463a7bf26"`);
        await queryRunner.query(`ALTER TABLE "public"."result" DROP COLUMN "typeGuid"`);
        await queryRunner.query(`DROP TABLE "types"`);
    }

}
