import { integer, text, sqliteTableCreator } from "drizzle-orm/sqlite-core";
export const accountTypeEnum = ["email", "google", "github"] as const;
const sqliteTable = sqliteTableCreator((name) => `app_${name}`);

export const tests = sqliteTable("test", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").unique(),
});
