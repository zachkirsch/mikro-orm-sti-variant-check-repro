import { Entity, Enum, Opt, PrimaryKey } from "@mikro-orm/postgresql";

@Entity({ discriminatorColumn: "pet_type", abstract: true })
export abstract class Pet {
  @Enum()
  pet_type!: Opt<"cat" | "dog">;

  @PrimaryKey()
  id!: string;
}
