import { Migration } from '@mikro-orm/migrations';

export class Migration20250224234425 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "pet" ("id" varchar(255) not null, "pet_type" text check ("pet_type" in ('cat', 'dog')) not null, constraint "pet_pkey" primary key ("id"));`);
    this.addSql(`create index "pet_pet_type_index" on "pet" ("pet_type");`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "pet" cascade;`);
  }

}
