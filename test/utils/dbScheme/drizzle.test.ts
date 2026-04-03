import { dummyScheme } from '../dummyDataTest'

import { describe, expect, test } from 'vitest'
import { tableDataToDrizzleScheme } from '../../../src/utilis/dataBase/tableDataToDrizzle'

describe('For Drizzle Scheme', () => {
	const pgSchemeStr = tableDataToDrizzleScheme(dummyScheme, 'postgresql')
	const sqliteSchemeStr = tableDataToDrizzleScheme(dummyScheme, 'sqlite')

	test('emits postgres imports, singular table names, and relations', () => {
		expect(pgSchemeStr).toContain(`import { pgTable, serial, varchar, boolean, integer, jsonb } from "drizzle-orm/pg-core";`)
		expect(pgSchemeStr).toContain(`export const team = pgTable("teams", {`)
		expect(pgSchemeStr).toContain(`export type Team = typeof team.$inferSelect;`)
		expect(pgSchemeStr).toContain(`teamTaskHistory: many(teamTaskHistory)`)
		expect(pgSchemeStr).toContain(`teamTaskSchedule: many(teamTaskSchedule)`)
		expect(pgSchemeStr).toContain(`event: one(event, { fields: [task.eventId], references: [event.id] })`)
	})

	test('emits sqlite-specific column mappings', () => {
		expect(sqliteSchemeStr).toContain(`import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";`)
		expect(sqliteSchemeStr).toContain(`export const team = sqliteTable("teams", {`)
		expect(sqliteSchemeStr).toContain(`id: integer().primaryKey().generatedByDefaultAsIdentity()`)
		expect(sqliteSchemeStr).toContain(`selectableChoice: text({ mode: 'json' })`)
		expect(sqliteSchemeStr).toContain(`event: one(event, { fields: [task.eventId], references: [event.id] })`)
	})
})
