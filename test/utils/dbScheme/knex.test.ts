import { dummyScheme } from '../dummyDataTest';

import { expect, test, describe } from 'vitest'
import { Table } from '../../../src/interface/inputData'
import { tableDataToKyselyScheme } from '../../../src/utilis/dataBase/tableDataToKysely'
import { tableDataToKnexScheme } from '../../../src/utilis/dataBase/tableDataToKnex'

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

describe('For Knex Scheme', () => {
	const schemeStr = tableDataToKnexScheme(dummyScheme);

	test('Test import and key table strings', () => {
		expect(schemeStr).toContain(`import { Knex } from "knex";`)
		expect(schemeStr).toContain(`await knex.schema.createTable("event", (table) => {`)
		expect(schemeStr).toContain(`table.increments()`)
		expect(schemeStr).toContain(`table.string("event_uid").unique().notNullable()`)
		expect(schemeStr).toContain(`table.boolean("is_random").notNullable()`)
	})

	test('Test foreign keys and reverse drops', () => {
		expect(schemeStr).toContain(`table.foreign("event_id").references("event.id")`)
		expect(schemeStr).toContain(`await knex.schema.dropTableIfExists("team_task_schedule");`)
		expect(schemeStr).toContain(`await knex.schema.dropTableIfExists("event");`)
	})

	test('Handles specific type columns in addition to foreign keys', () => {
		const customScheme: Table[] = [
			{
				name: 'users',
				columns: [
					{
						id: '1',
						name: 'id',
						dataType: 'serial',
						isPrimaryKey: true,
						notNull: false,
						unique: false,
					},
				],
			},
			{
				name: 'audit_log',
				columns: [
					{
						id: '2',
						name: 'id',
						dataType: 'serial',
						isPrimaryKey: true,
						notNull: false,
						unique: false,
					},
					{
						id: '3',
						name: 'owner_id',
						dataType: 'integer',
						isPrimaryKey: false,
						notNull: true,
						unique: false,
						foreignTo: {
							name: 'users',
							column: 'id',
						},
					},
					{
						id: '4',
						name: 'flags',
						dataType: 'bit',
						isPrimaryKey: false,
						notNull: false,
						unique: false,
					},
				],
			},
		]

		const customStr = tableDataToKnexScheme(customScheme)

		expect(customStr).toContain(`table.specificType("flags", "BIT(8)")`)
		expect(customStr).toContain(`table.foreign("owner_id").references("users.id")`)
		expect(customStr).toContain(`await knex.schema.dropTableIfExists("audit_log");`)
		expect(customStr).toContain(`await knex.schema.dropTableIfExists("users");`)
	})
})
