import { expect, test } from 'vitest'
import { Table } from '../../src/interface/inputData'

import { 
    tableDataToCRUDPostgresql,
    tableDataToCRUDKnex,
    tableDataToCRUDKysely,
    tableDataToCRUDPrisma
} from '../../src/utilis/dataBase/tableDataToCRUD'

const dummyScheme: Table[] = [
	{
		"name": "event",
		"columns": [
			{
				"id": "8c1e5059-8fe9-96b9-bb3c-5642827d",
				"name": "id",
				"dataType": "serial",
				"unique": false,
				"isPrimaryKey": true,
				"notNull": false
			},
			{
				"id": "eb4944ab-f9bc-c192-3e35-ecb86002",
				"name": "event_uid",
				"dataType": "varchar",
				"unique": true,
				"isPrimaryKey": false,
				"notNull": true
			},
			{
				"id": "96af9279-517e-731c-794a-d527cb75",
				"name": "status",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": true
			},
			{
				"id": "eca2a3b8-2888-f2dc-dd6a-c8a0aeeb",
				"name": "title",
				"dataType": "varchar",
				"unique": true,
				"isPrimaryKey": false,
				"notNull": true
			},
			{
				"id": "4e8ddaee-525f-e6b3-5dce-10fd5222",
				"name": "is_random",
				"dataType": "boolean",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": true
			},
			{
				"id": "0512f63e-059c-24dd-8df8-a3fa8174",
				"name": "description",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": true
			}
		],
		"position": {
			"x": 222.3457427614444,
			"y": 459.7776630294002
		}
	},
	{
		"name": "teams",
		"columns": [
			{
				"id": "9fba0006-866d-4348-9a6a-e3005884",
				"name": "id",
				"dataType": "serial",
				"unique": false,
				"isPrimaryKey": true,
				"notNull": false
			},
			{
				"id": "ca3f0ca1-4bb4-f021-11a4-1ed9b75f",
				"name": "name",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": false
			},
			{
				"id": "65809cca-4dc8-14a9-4f07-ab2787ef",
				"name": "event_id",
				"dataType": "integer",
				"unique": false,
				"isPrimaryKey": false,
				"foreignTo": {
					"name": "event",
					"column": "id"
				},
				"notNull": false
			}
		],
		"position": {
			"x": 560.9135821079975,
			"y": 274.34269702691785
		}
	},
	{
		"name": "members",
		"columns": [
			{
				"id": "9fba0006-866d-4348-9a6a-e3005884",
				"name": "id",
				"dataType": "serial",
				"unique": false,
				"isPrimaryKey": true,
				"notNull": false
			},
			{
				"id": "c8197ea2-5d49-d26c-b610-33c90b8d",
				"name": "teams_id",
				"dataType": "integer",
				"unique": false,
				"isPrimaryKey": false,
				"foreignTo": {
					"name": "teams",
					"column": "id"
				},
				"notNull": true
			},
			{
				"id": "be974875-f1e2-f529-226a-a6bddbb9",
				"name": "username",
				"dataType": "varchar",
				"unique": true,
				"isPrimaryKey": false,
				"notNull": true
			},
			{
				"id": "942bd39e-18fe-437a-bd6c-30df3c22",
				"name": "is_leader",
				"dataType": "boolean",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": true
			},
			{
				"id": "5183d243-b630-adac-c334-3526df9a",
				"name": "password",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": true
			},
			{
				"id": "8f9f2fb3-93c0-cca9-9722-b52977ac",
				"name": "nick_name",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": false
			}
		],
		"position": {
			"x": 987.9091230043916,
			"y": 148.2744667146623
		}
	},
	{
		"name": "task",
		"columns": [
			{
				"id": "9fba0006-866d-4348-9a6a-e3005884",
				"name": "id",
				"dataType": "serial",
				"unique": false,
				"isPrimaryKey": true,
				"notNull": false
			},
			{
				"id": "e3c72726-6de8-1e1c-7411-9fc47d9d",
				"name": "event_id",
				"dataType": "integer",
				"unique": false,
				"isPrimaryKey": false,
				"foreignTo": {
					"name": "event",
					"column": "id"
				},
				"notNull": true
			},
			{
				"id": "1d31fd14-5503-1e26-e5ab-eee036f2",
				"name": "question",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": true
			},
			{
				"id": "ff85e6cf-f863-c77b-612a-9a010d0d",
				"name": "answer",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": true
			},
			{
				"id": "8d602dba-b101-4cf8-194b-a380cb38",
				"name": "access_passcode",
				"dataType": "varchar",
				"unique": true,
				"isPrimaryKey": false,
				"notNull": true
			},
			{
				"id": "179b23e4-5ade-d140-e59e-188ae3ef",
				"name": "selectable_choice",
				"dataType": "jsonb",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": false
			},
			{
				"id": "40f4fa15-be98-edb2-ea61-38c4f655",
				"name": "description",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": false
			},
			{
				"id": "4fd27b8a-9c9a-0420-8f47-29e37c6c",
				"name": "reward",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": false
			},
			{
				"id": "0ba80a46-4c02-adb2-8d3d-c492b9f4",
				"name": "status",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": false
			},
			{
				"id": "8332ab5e-5183-2484-b7df-c9cebf32",
				"name": "title",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": false
			},
			{
				"id": "d4f02f51-743d-9701-de6e-963ae87e",
				"name": "title_desc",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": false
			},
			{
				"id": "2f1b8a52-d563-bd49-dbad-cd2636e2",
				"name": "hins",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": false
			}
		],
		"position": {
			"x": 762.400372935901,
			"y": 591.4337594215067
		}
	},
	{
		"name": "team_task_history",
		"columns": [
			{
				"id": "bb5bc34f-68b5-251e-a158-f0e3586f",
				"name": "id",
				"dataType": "serial",
				"unique": false,
				"isPrimaryKey": true,
				"notNull": false
			},
			{
				"id": "1aa30cad-bc04-a167-d8ef-067c2a8f",
				"name": "done_by_member",
				"dataType": "integer",
				"unique": false,
				"isPrimaryKey": false,
				"foreignTo": {
					"name": "members",
					"column": "id"
				},
				"notNull": true
			},
			{
				"id": "7652dffa-63ce-ccb2-a8d4-7a4d8fae",
				"name": "task_id",
				"dataType": "integer",
				"unique": false,
				"isPrimaryKey": false,
				"foreignTo": {
					"name": "task",
					"column": "id"
				},
				"notNull": true
			},
			{
				"id": "0b1ec019-e156-d1cd-4c7a-9a11d8c0",
				"name": "is_correct",
				"dataType": "boolean",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": false
			},
			{
				"id": "4ea00bef-dd66-d342-ae25-67691d19",
				"name": "answers",
				"dataType": "varchar",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": false
			}
		],
		"position": {
			"x": 1323.3299334987214,
			"y": 345.81093508824034
		}
	},
	{
		"name": "admin",
		"columns": [
			{
				"id": "93405df4-d417-4a1a-6517-ceeeaef8",
				"name": "id",
				"dataType": "serial",
				"unique": false,
				"isPrimaryKey": true,
				"notNull": false
			},
			{
				"id": "233ade28-0c00-e827-0414-44956e89",
				"name": "email",
				"dataType": "varchar",
				"unique": true,
				"isPrimaryKey": false,
				"notNull": true
			}
		],
		"position": {
			"x": 1685.8752337295941,
			"y": 777.0399331285864
		}
	},
	{
		"name": "team_task_schedule",
		"columns": [
			{
				"id": "30922bca-7f43-3d39-249e-604d3164",
				"name": "id",
				"dataType": "serial",
				"unique": false,
				"isPrimaryKey": true,
				"notNull": false
			},
			{
				"id": "36d8c992-be08-6b9e-9db1-7ee32a1d",
				"name": "team_id",
				"dataType": "integer",
				"unique": false,
				"isPrimaryKey": false,
				"foreignTo": {
					"name": "teams",
					"column": "id"
				},
				"notNull": true
			},
			{
				"id": "2fd1b8e1-b34a-0fbd-b1b6-a830069f",
				"name": "task_id",
				"dataType": "integer",
				"unique": false,
				"isPrimaryKey": false,
				"foreignTo": {
					"name": "task",
					"column": "id"
				},
				"notNull": true
			},
			{
				"id": "9d7a2892-a248-30f3-bfff-c0af03f5",
				"name": "priority",
				"dataType": "integer",
				"unique": false,
				"isPrimaryKey": false,
				"notNull": true
			}
		],
		"position": {
			"x": 1347.8442435601137,
			"y": 674.7540662097334
		}
	}
]

// PSQL raw string CRUD
test('Postgresql CRUD functions test', () => {
    const crudStr = tableDataToCRUDPostgresql(dummyScheme[1]);

    expect(crudStr).toContain(`SELECT * FROM teams;`); // C
    expect(crudStr).toContain(`INSERT INTO teams (id, name, event_id) VALUES ("", "", "");`); // R
    expect(crudStr).toContain(`UPDATE teams SET ? WHERE ?;`); // U
    expect(crudStr).toContain(`DELETE FROM teams WHERE ?;`); // D
})

// Knex CRUD
test('Knex CRUD functions test', () => {
    const crudStr = tableDataToCRUDKnex(dummyScheme[0]);

    expect(crudStr).toContain(`const data = await knex.column("id", "event_uid", "status", "title", "is_random", "description").select().from("event");`); // C
    expect(crudStr).toContain(`await knex("event").insert([{ id: '', event_uid: '', status: '', title: '', is_random: '', description: '', }]);`); // R
    expect(crudStr).toContain(`await knex("event").where("col", "target_values").update({});`); // U
    expect(crudStr).toContain(`await knex("event").where("col", "target_values").del();`); // D
})

// Kysely CRUD
test('Kysely CRUD functions test', () => {
    const crudStr = tableDataToCRUDKysely(dummyScheme[0]);

    expect(crudStr).toContain(`const data = await db.selectFrom("event").select(['id', 'event_uid', 'status', 'title', 'is_random', 'description']).execute();`); // C
    expect(crudStr).toContain(`await db.insertInto("event").values([{ id: '', event_uid: '', status: '', title: '', is_random: '', description: '', }]).execute();`); // R
    expect(crudStr).toContain(`await db.updateTable("event").set({}).where("col", "=". "target_values").executeTakeFirst();`); // U
    expect(crudStr).toContain(`await db.deleteFrom("event").where("col", "=". "target_values").executeTakeFirst();`); // D
})

// Kysely CRUD
test('Prisma CRUD functions test', () => {
    const crudStr = tableDataToCRUDPrisma(dummyScheme[3]);

    expect(crudStr).toContain(`const data = await prisma.task.findMany();`); // C
    expect(crudStr).toContain(`await await prisma.task.create({ data:{ id: '', event_id: '', question: '', answer: '', access_passcode: '', selectable_choice: '', description: '', reward: '', status: '', title: '', title_desc: '', hins: '', } });`); // R
    expect(crudStr).toContain(`await await prisma.task.update({ where: {}, data: {} });`); // U
    expect(crudStr).toContain(`await await prisma.task.delete({ where: {} });`); // D
})
