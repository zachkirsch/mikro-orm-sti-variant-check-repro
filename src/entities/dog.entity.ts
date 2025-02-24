import { Entity } from "@mikro-orm/postgresql";
import { Pet } from "./pet.entity";

@Entity()
export class Dog extends Pet {}
