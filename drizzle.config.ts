import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.POSTGRES_URL_NON_POOLING,
  },
  tablesFilter: ["bet_allianz_*"],
} satisfies Config;
