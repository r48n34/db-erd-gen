import { dummyScheme } from '../dummyDataTest';

import { expect, test, describe } from 'vitest'
import { tableDataToKyselyScheme } from '../../../src/utilis/dataBase/tableDataToKysely'

describe('For Kysely Scheme', () => {

	const schemeStr = tableDataToKyselyScheme(dummyScheme, "postgresql");

	test('Test import and export basic string', () => {
		expect(schemeStr).toContain(`import { Kysely } from 'kysely';`)
		expect(schemeStr).toContain(`export async function down(db: Kysely<any>): Promise<void>`)
	})

	test('Test table relationship and terms', () => {
		expect(schemeStr).toContain(`.addColumn("event_uid", "varchar", (col) => col.notNull().unique())`)
		expect(schemeStr).toContain(`.addColumn("event_id", "integer", (col) => col.references("event.id").onDelete('cascade'))`)
		expect(schemeStr).toContain(`.createTable("task") `)
		expect(schemeStr).toContain(`.addColumn("access_passcode", "varchar", (col) => col.notNull().unique())`)
		expect(schemeStr).toContain(`.addColumn("task_id", "integer", (col) => col.references("task.id").onDelete('cascade').notNull())`)
		expect(schemeStr).toContain(`.addColumn("team_id", "integer", (col) => col.references("teams.id").onDelete('cascade').notNull())`)
	})

	test('Test The drop sections', () => {
		expect(schemeStr).toContain(`await db.schema.dropTable('team_task_schedule').execute();`)
		expect(schemeStr).toContain(`await db.schema.dropTable('team_task_history').execute();`)
		expect(schemeStr).toContain(`await db.schema.dropTable('event').execute();`)
	})


})