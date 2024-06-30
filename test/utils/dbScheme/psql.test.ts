import { dummyScheme } from '../dummyDataTest';
import { expect, test, describe } from 'vitest'
import { tableDataToPostgresScheme } from '../../../src/utilis/dataBase/tableDataToPostgres'

describe('For Postgres Scheme', () => {

	const schemeStr = tableDataToPostgresScheme(dummyScheme);

	test('Test import and export basic string', () => {
		expect(schemeStr).toContain(`CREATE TABLE event (`)
		expect(schemeStr).toContain(`CREATE TABLE task (`)
	})

	test('Test table relationship and terms', () => {
		expect(schemeStr).toContain(`id serial primary key, `)
		expect(schemeStr).toContain(`FOREIGN KEY (event_id) REFERENCES event(id),`)
		expect(schemeStr).toContain(`done_by_member integer NOT NULL,`)
		expect(schemeStr).toContain(`FOREIGN KEY (team_id) REFERENCES teams(id),`)
		expect(schemeStr).toContain(`email varchar(255) NOT NULL UNIQUE`)
		expect(schemeStr).toContain(`is_random boolean NOT NULL,`)
	})

})