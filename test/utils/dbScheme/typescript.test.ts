import { dummyScheme } from '../dummyDataTest';
import { expect, test, describe } from 'vitest'
import { tableDataToTsTypeScheme } from '../../../src/utilis/dataBase/tableDataToTsType'

describe('For Typescript Scheme', () => {

	const schemeStr = tableDataToTsTypeScheme(dummyScheme);

	test('Test import and export basic string', () => {
		expect(schemeStr).toContain(`export type Event = {`)
		expect(schemeStr).toContain(`export type Task = {`)
	})

	test('Test table relationship and terms', () => {
		expect(schemeStr).toContain(`selectable_choice: string | null;`)
		expect(schemeStr).toContain(`id: number;`)
		expect(schemeStr).toContain(`email: string;`)
		expect(schemeStr).toContain(`title_desc: string | null;`)
		expect(schemeStr).toContain(`selectable_choice: string | null;`)
		expect(schemeStr).toContain(`event_id: number | null;`)
		expect(schemeStr).toContain(`is_leader: boolean;`)
	})

})