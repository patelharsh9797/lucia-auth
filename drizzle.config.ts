import { env } from "./src/env.mjs";
import { defineConfig } from "drizzle-kit";

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
