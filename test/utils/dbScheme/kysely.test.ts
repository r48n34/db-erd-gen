import { dummyScheme } from '../dummyDataTest';
import { expect, test, describe } from 'vitest'
import { tableDataToKyselyScheme, tableDataToKyselyTypescriptScheme } from '../../../src/utilis/dataBase/tableDataToKysely'

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

describe('For Kysely TS Scheme', () => {

	const schemeStr = tableDataToKyselyTypescriptScheme(dummyScheme);

	test('Test import and export basic string', () => {
		expect(schemeStr).toContain(`import { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely'`)
	})

	test('Test normal terms', () => {
		expect(schemeStr).toContain(`team_task_history : Team_task_historyTable`)
		expect(schemeStr).toContain(`team_task_schedule : Team_task_scheduleTable`)
		expect(schemeStr).toContain(`id: Generated<number>`)
		expect(schemeStr).toContain(`selectable_choice: string | null`)
		expect(schemeStr).toContain(`email: string`)
		expect(schemeStr).toContain(`priority: number`)
	})

	test('Test export types string', () => {
		expect(schemeStr).toContain(`export type Task = Selectable<TaskTable>`)
		expect(schemeStr).toContain(`export type Team_task_historyUpdate = Updateable<Team_task_historyTable>`)
		expect(schemeStr).toContain(`export type AdminUpdate = Updateable<AdminTable>`)
		expect(schemeStr).toContain(`export type NewTeam_task_schedule = Insertable<Team_task_scheduleTable>`)
	})

	test('Test The drop sections', () => {
		expect(schemeStr).toContain(`export interface Database {`)
		expect(schemeStr).toContain(`export interface MembersTable {`)
		expect(schemeStr).toContain(`export interface Team_task_scheduleTable {`)
	})

})