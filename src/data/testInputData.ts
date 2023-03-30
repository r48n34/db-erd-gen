import { Table } from "../interface/inputData";

export const importString = `[
    {
        "name": "users",
        "columns": [
            {
                "name": "id",
                "dataType": "serial",
                "isPrimaryKey": true,
                "notNull": false
            },
            {
                "name": "username",
                "dataType": "varchar",
                "isPrimaryKey": false,
                "notNull": false
            },
            {
                "name": "password",
                "dataType": "varchar",
                "isPrimaryKey": false,
                "notNull": false
            }
        ],
        "position": {
			"x": 100,
			"y": 0
		}
    },
    {
        "name": "blog_content",
        "columns": [
            {
                "name": "id",
                "dataType": "serial",
                "isPrimaryKey": true,
                "notNull": false
            },
            {
                "name": "users_id",
                "dataType": "integer",
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
                "isPrimaryKey": false,
                "notNull": false
            }
        ],
        "position": {
			"x": 500,
			"y": 0
		}
    }
]`

// test data
export let grandData: Table[] = JSON.parse(importString);