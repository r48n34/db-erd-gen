import { dummyScheme } from '../dummyDataTest';
import { expect, test, describe } from 'vitest'
import { tableDataToValibotTypeScheme } from '../../../src/utilis/dataBase/tableDataToValibotType'

describe('For Valibot Scheme', () => {

	const schemeStr = tableDataToValibotTypeScheme(dummyScheme);

	test('Test import and export basic string', () => {
		expect(schemeStr).toContain(`import * as v from 'valibot';`)
		expect(schemeStr).toContain(`export const TeamsScheme = v.object({`)
		expect(schemeStr).toContain(`export const Team_task_scheduleScheme = v.object({`)
		expect(schemeStr).toContain(`export type Team_task_history = v.InferOutput<typeof Team_task_historyScheme>;`)
	})

	test('Test table relationship and terms', () => {
		expect(schemeStr).toContain(`id: v.number(),`)
		expect(schemeStr).toContain(`name: v.nullish(v.string()),`)
		expect(schemeStr).toContain(`nick_name: v.nullish(v.string()),`)
		expect(schemeStr).toContain(`is_leader: v.boolean(),`)
		expect(schemeStr).toContain(`selectable_choice: v.nullish(v.string()),`)
		expect(schemeStr).toContain(`team_id: v.number(),`)
		expect(schemeStr).toContain(`priority: v.number(),`)
	})

})