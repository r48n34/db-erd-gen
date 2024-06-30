import { dummyScheme } from '../dummyDataTest';
import { expect, test, describe } from 'vitest'
import { tableDataToZodTypeScheme } from '../../../src/utilis/dataBase/tableDataToZodType'

describe('For Zod Scheme', () => {

	const schemeStr = tableDataToZodTypeScheme(dummyScheme);

	test('Test import and export basic string', () => {
		expect(schemeStr).toContain(`import { z } from "zod";`)
		expect(schemeStr).toContain(`export const EventScheme = z.object({`)
		expect(schemeStr).toContain(`export const Team_task_historyScheme = z.object({`)
		expect(schemeStr).toContain(`type Members = z.infer<typeof MembersScheme>;`)
	})

	test('Test table relationship and terms', () => {
		expect(schemeStr).toContain(`id: z.number(),`)
		expect(schemeStr).toContain(`selectable_choice: z.optional(z.string()),`)
		expect(schemeStr).toContain(`description: z.optional(z.string()),`)
		expect(schemeStr).toContain(`nick_name: z.optional(z.string()),`)
		expect(schemeStr).toContain(`type Task = z.infer<typeof TaskScheme>;`)
		expect(schemeStr).toContain(`priority: z.number(),`)
		expect(schemeStr).toContain(`question: z.string(),`)
	})

})