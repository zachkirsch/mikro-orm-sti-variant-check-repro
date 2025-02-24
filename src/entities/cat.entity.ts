import { Entity } from "@mikro-orm/postgresql";
import { Pet } from "./pet.entity";

@Entity()
export class Cat extends Pet {}
