import { defineConfig } from "drizzle-kit";
import { env } from "./src/env.mjs";

export default defineConfig({
  schema: "./src/server/schema.ts",
  out: "./src/server/migrations",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DB_AUTH_TOKEN,
  },
});
