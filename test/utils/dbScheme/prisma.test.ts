import { dummyScheme } from '../dummyDataTest';
import { expect, test, describe } from 'vitest'
import { tableDataToPrismaScheme } from '../../../src/utilis/dataBase/tableDataToPrisma'

// TODO MySQL and Default
describe('For Postgres Scheme Postgresql', () => {

	const schemeStr = tableDataToPrismaScheme(dummyScheme, "postgresql");

	test('Test import and export basic string', () => {
		expect(schemeStr).toContain(`model event {`)
		expect(schemeStr).toContain(`model team_task_history {`)
	})

	test('Test table relationship and terms', () => {
		expect(schemeStr).toContain(`id Int @db.Int @default(autoincrement())`)
		expect(schemeStr).toContain(`event_uid String? @db.VarChar(255)`)
		expect(schemeStr).toContain(`event_id event @relation(fields: [id], references: [id], onDelete: NoAction, onUpdate: NoAction)`)
		expect(schemeStr).toContain(`username String? @db.VarChar(255)`)
		expect(schemeStr).toContain(`selectable_choice JSONB? @db.JsonB`)
		expect(schemeStr).toContain(`is_correct Boolean?`)
	})

})