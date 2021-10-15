import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateOvertimes1634264574334 implements MigrationInterface {
    name = 'CreateOvertimes1634264574334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "overtimes" ("id" varchar PRIMARY KEY NOT NULL, "date" datetime NOT NULL, "start_time" datetime NOT NULL, "end_time" datetime NOT NULL, "description" varchar NOT NULL, "shipping_status" boolean NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "user_id" varchar)`);
        await queryRunner.query(`CREATE TABLE "temporary_overtimes" ("id" varchar PRIMARY KEY NOT NULL, "date" datetime NOT NULL, "start_time" datetime NOT NULL, "end_time" datetime NOT NULL, "description" varchar NOT NULL, "shipping_status" boolean NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "user_id" varchar, CONSTRAINT "FK_30143e97cf5555d50304a3e3c31" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_overtimes"("id", "date", "start_time", "end_time", "description", "shipping_status", "created_at", "updated_at", "user_id") SELECT "id", "date", "start_time", "end_time", "description", "shipping_status", "created_at", "updated_at", "user_id" FROM "overtimes"`);
        await queryRunner.query(`DROP TABLE "overtimes"`);
        await queryRunner.query(`ALTER TABLE "temporary_overtimes" RENAME TO "overtimes"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "overtimes" RENAME TO "temporary_overtimes"`);
        await queryRunner.query(`CREATE TABLE "overtimes" ("id" varchar PRIMARY KEY NOT NULL, "date" datetime NOT NULL, "start_time" datetime NOT NULL, "end_time" datetime NOT NULL, "description" varchar NOT NULL, "shipping_status" boolean NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "user_id" varchar)`);
        await queryRunner.query(`INSERT INTO "overtimes"("id", "date", "start_time", "end_time", "description", "shipping_status", "created_at", "updated_at", "user_id") SELECT "id", "date", "start_time", "end_time", "description", "shipping_status", "created_at", "updated_at", "user_id" FROM "temporary_overtimes"`);
        await queryRunner.query(`DROP TABLE "temporary_overtimes"`);
        await queryRunner.query(`DROP TABLE "overtimes"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
