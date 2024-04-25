import { Table } from "../interface/inputData";

export const importString = `[
	{
		"name": "users",
		"columns": [
			{
				"name": "id",
				"dataType": "serial",
				"isPrimaryKey": true,
				"notNull": false,
				"unique": false
			},
			{
				"name": "username",
				"dataType": "varchar",
				"isPrimaryKey": false,
				"notNull": false,
				"unique": false
			},
			{
				"name": "password",
				"dataType": "varchar",
				"isPrimaryKey": false,
				"notNull": false,
				"unique": false
			}
		],
		"position": {
			"x": 159,
			"y": 152
		}
	},
	{
		"name": "blog_content",
		"columns": [
			{
				"name": "id",
				"dataType": "serial",
				"unique": false,
				"isPrimaryKey": true,
				"notNull": false
			},
			{
				"name": "users_id",
				"dataType": "integer",
				"unique": false,
				"isPrimaryKey": false,
				"foreignTo": {
					"name": "users",
					"column": "id"
				},
				"notNull": false
			},
			{
				"name": "content",
				"dataType": "text",
				"unique": true,
				"isPrimaryKey": false,
				"notNull": false
			}
		],
		"position": {
			"x": 569.9866443912128,
			"y": 271.71160262473705
		}
	}
]`

// test data
export let grandData: Table[] = JSON.parse(importString);