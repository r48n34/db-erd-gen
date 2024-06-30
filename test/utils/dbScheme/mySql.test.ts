import { dummyScheme } from '../dummyDataTest';
import { expect, test, describe } from 'vitest'
import { tableDataToMySQLScheme } from '../../../src/utilis/dataBase/tableDataToMySQL'

describe('For MySQL Scheme', () => {

	const schemeStr = tableDataToMySQLScheme(dummyScheme);

	test('Test import and export basic string', () => {
		expect(schemeStr).toContain(`CREATE TABLE event (`)
		expect(schemeStr).toContain(`CREATE TABLE task (`)
	})

	test('Test table relationship and terms', () => {
		expect(schemeStr).toContain(`id INTEGER AUTO_INCREMENT AUTO_INCREMENT PRIMARY KEY ,`)
		expect(schemeStr).toContain(`team_id INT  NOT NULL,`)
		expect(schemeStr).toContain(`FOREIGN KEY (team_id) REFERENCES teams(id),`)
		expect(schemeStr).toContain(`access_passcode VARCHAR  NOT NULL`)
		expect(schemeStr).toContain(`is_leader TINYINT(1)  NOT NULL,`)
		expect(schemeStr).toContain(`UNIQUE (event_uid, title)`)
	})

})