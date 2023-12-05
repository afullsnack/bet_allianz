import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/node-postgres";

// import { env } from "~/env";
import * as schema from "./schema";

export const db = drizzle(
  sql,
  { schema }
);
