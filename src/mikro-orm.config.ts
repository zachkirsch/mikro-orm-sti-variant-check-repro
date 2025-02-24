import { Migrator } from "@mikro-orm/migrations";
import { PostgreSqlDriver, type Options } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";

const config: Options = {
  driver: PostgreSqlDriver,
  dbName: "postgres",
  user: "postgres",
  password: "password",
  port: 1000,
  host: "localhost",
  entities: ["dist/**/*.entity.js"],
  entitiesTs: ["src/**/*.entity.ts"],
  metadataProvider: TsMorphMetadataProvider,
  extensions: [Migrator],
  migrations: {
    path: "dist/migrations",
    pathTs: "src/migrations",
  },
};

export default config;
