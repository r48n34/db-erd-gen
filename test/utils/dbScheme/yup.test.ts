import { dummyScheme } from '../dummyDataTest';
import { expect, test, describe } from 'vitest'
import { tableDataToYupTypeScheme } from '../../../src/utilis/dataBase/tableDataToYupType'

describe('For Yup Scheme', () => {

	const schemeStr = tableDataToYupTypeScheme(dummyScheme);

	test('Test import and export basic string', () => {
		expect(schemeStr).toContain(`import * as yup from 'yup';`)
		expect(schemeStr).toContain(`export const TeamsScheme = yup.object({`)
		expect(schemeStr).toContain(`export const Team_task_scheduleScheme = yup.object({`)
		expect(schemeStr).toContain(`export type Team_task_history = yup.InferType<typeof Team_task_historyScheme>;`)
	})

	test('Test table relationship and terms', () => {
		expect(schemeStr).toContain(`id: yup.number().defined(),`)
		expect(schemeStr).toContain(`is_leader: yup.boolean().defined(),`)
		expect(schemeStr).toContain(`event_id: yup.number().nullable(),`)
		expect(schemeStr).toContain(`password: yup.string().defined(),`)
		expect(schemeStr).toContain(`answers: yup.string().nullable(),`)
		expect(schemeStr).toContain(`email: yup.string().defined(),`)
		expect(schemeStr).toContain(`task_id: yup.number().defined(),`)
	})

})