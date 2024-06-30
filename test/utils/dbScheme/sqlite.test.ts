import { dummyScheme } from '../dummyDataTest';
import { expect, test, describe } from 'vitest'
import { tableDataToSQLiteScheme } from '../../../src/utilis/dataBase/tableDataToSQLite'

describe('For SQLite Scheme', () => {

	const schemeStr = tableDataToSQLiteScheme(dummyScheme);

	test('Test import and export basic string', () => {
		expect(schemeStr).toContain(`CREATE TABLE event (`)
		expect(schemeStr).toContain(`CREATE TABLE task (`)
	})

	test('Test table relationship and terms', () => {
		expect(schemeStr).toContain(`id INTEGER PRIMARY KEY,`)
		expect(schemeStr).toContain(`UNIQUE (event_uid, title)`)
		expect(schemeStr).toContain(`password TEXT NOT NULL,`)
		expect(schemeStr).toContain(`FOREIGN KEY (teams_id)`)
		expect(schemeStr).toContain(`REFERENCES teams (id)`)
		expect(schemeStr).toContain(`access_passcode TEXT NOT NULL,`)
		expect(schemeStr).toContain(`priority INTEGER NOT NULL`)
	})

})