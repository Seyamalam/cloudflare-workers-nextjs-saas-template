import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

import { createId } from '@paralleldrive/cuid2'

const commonColumns = {
  createdAt: integer({
    mode: "timestamp",
  }).$defaultFn(() => new Date()).notNull(),
  updatedAt: integer({
    mode: "timestamp",
  }).$onUpdateFn(() => new Date()).notNull(),
  updateCounter: integer().default(0).$onUpdate(() => sql`updateCounter + 1`),
}

// Basic content/post table - keeping this as an example of what the template could be used for
export const postTable = sqliteTable("post", {
  ...commonColumns,
  id: text().primaryKey().$defaultFn(() => `post_${createId()}`).notNull(),
  title: text({
    length: 255,
  }).notNull(),
  content: text(),
  slug: text({
    length: 255,
  }).unique().notNull(),
  published: integer({ mode: "boolean" }).default(false).notNull(),
});
