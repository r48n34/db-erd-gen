// pg key to mySQL key references:
// https://www.convert-in.com/mysql-to-postgres-types-mapping.html
// https://dev.mysql.com/doc/workbench/en/wb-migration-database-postgresql-typemapping.html

export interface PostgresTypeArray {
    label: string;
    value: string;
    group: string;
    knexKey: {
        key: string; // knex using their string
        specificTypeName?: string;
    };
    sqLiteKey: { // pg key to sqLiteKey key
        key: string | null;
    }
    mySQLKey: { // pg key to mySQL key
        key: string | null;
    }
    defaultValue?: undefined | string;
}

export const postgresTypeArray: PostgresTypeArray[] = [
    {
        label: "bigint",
        value: "bigint",
        group: "numeric",
        knexKey: {
            key: "bigInteger",
        },
        sqLiteKey: { 
            key: "INTEGER"
        },
        mySQLKey: { 
            key: "BIGINT"
        }
    },
    {
        label: "bigserial",
        value: "bigserial",
        group: "numeric",
        knexKey: {
            key: "bigIncrements",
        },
        sqLiteKey: { 
            key: "INTEGER"
        },
        mySQLKey: { 
            key: "BIGINT AUTO_INCREMENT"
        }
    },
    {
        label: "bit",
        value: "bit",
        group: "bit",
        knexKey: {
            key: "specificType",
            specificTypeName: "BIT(8)",
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "BIT"
        }
    },
    {
        label: "bit varying",
        value: "bit varying ",
        group: "bit",
        knexKey: {
            key: "specificType",
            specificTypeName: "bit varying(255)",
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "BIT"
        }
    },
    {
        label: "boolean",
        value: "boolean",
        group: "boolean",
        knexKey: {
            key: "boolean",
            specificTypeName: "box"
        },
        sqLiteKey: { 
            key: "INTEGER"
        },
        mySQLKey: { 
            key: "TINYINT(1)"
        }
    },
    {
        label: "box",
        value: "box",
        group: "geometric",
        knexKey: {
            key: "specificType",
            specificTypeName: "bytea"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "POLYGON"
        }
    },
    {
        label: "bytea",
        value: "bytea",
        group: "binary",
        knexKey: {
            key: "specificType"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "LONGBLOB"
        }
    },
    {
        label: "varchar",
        value: "varchar",
        group: "character",
        defaultValue: "(255)",
        knexKey: {
            key: "string"
        },
        sqLiteKey: { 
            key: "TEXT"
        },
        mySQLKey: { 
            key: "VARCHAR"
        }
    },
    {
        label: "char",
        value: "char",
        group: "character",
        defaultValue: "(255)",
        knexKey: {
            key: "specificType",
            specificTypeName: "CHAR(255)"
        },
        sqLiteKey: { 
            key: "TEXT"
        },
        mySQLKey: { 
            key: "CHAR"
        }
    },
    {
        label: "cidr",
        value: "cidr",
        group: "network address",
        knexKey: {
            key: "specificType",
            specificTypeName: "cidr"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "VARCHAR(43)"
        }
    },
    {
        label: "circle",
        value: "circle",
        group: "geometric",
        knexKey: {
            key: "specificType",
            specificTypeName: "circle"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "POLYGON"
        }
    },
    {
        label: "date",
        value: "date",
        group: "date/time",
        knexKey: { 
            key: "date"
        },
        sqLiteKey: { 
            key: "NUMERIC"
        },
        mySQLKey: { 
            key: "DATE"
        }
    },
    {
        label: "double precision",
        value: "double precision",
        group: "numeric",
        knexKey: { 
            key: "double"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "DOUBLE"
        }
    },
    {
        label: "inet",
        value: "inet",
        group: "network address",
        knexKey: {
            key: "specificType",
            specificTypeName: "inet"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "VARCHAR(43)"
        }
    },
    {
        label: "integer",
        value: "integer",
        group: "numeric",
        knexKey: { 
            key: "integer"
        },
        sqLiteKey: { 
            key: "INTEGER"
        },
        mySQLKey: { 
            key: "INT"
        }
    },
    {
        label: "interval",
        value: "interval",
        group: "date/time",
        knexKey: {
            key: "specificType",
            specificTypeName: "interval"
        },
        sqLiteKey: { 
            key: "NUMERIC"
        },
        mySQLKey: { 
            key: "TIME"
        }
    },
    {
        label: "json",
        value: "json",
        group: "JSON",
        knexKey: { 
            key: "json"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "LONGTEXT"
        }
    },
    {
        label: "jsonb",
        value: "jsonb",
        group: "JSON",
        knexKey: {
            key: "jsonb",
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "LONGTEXT"
        }
    },
    {
        label: "line",
        value: "line",
        group: "geometric",
        knexKey: {
            key: "specificType",
            specificTypeName: "line"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "LINESTRING"
        }
    },
    {
        label: "lseg",
        value: "lseg",
        group: "geometric",
        knexKey: {
            key: "specificType",
            specificTypeName: "lseg"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "LINESTRING"
        }
    },
    {
        label: "macaddr",
        value: "macaddr",
        group: "network address",
        knexKey: {
            key: "specificType",
            specificTypeName: "macaddr"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "VARCHAR(17)"
        }
    },
    {
        label: "macaddr8",
        value: "macaddr8",
        group: "network address",
        knexKey: {
            key: "specificType",
            specificTypeName: "macaddr8"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "VARCHAR(17)"
        }
    },
    {
        label: "money",
        value: "money",
        group: "monetary",
        knexKey: {
            key: "specificType",
            specificTypeName: "money"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "DECIMAL(19,2)"
        }
    },
    {
        label: "numeric",
        value: "numeric",
        group: "numeric",
        knexKey: {
            key: "decimal"
        },
        sqLiteKey: { 
            key: "INTEGER"
        },
        mySQLKey: { 
            key: "DECIMAL"
        }
    },
    {
        label: "path",
        value: "path",
        group: "geometric",
        knexKey: {
            key: "specificType",
            specificTypeName: "path"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "LINESTRING"
        }
    },
    {
        label: "pg_lsn",
        value: "pg_lsn",
        group: "pg_lsn",
        knexKey: {
            key: "specificType",
            specificTypeName: "pg_lsn"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: null
        }
    },
    {
        label: "pg_snapshot",
        value: "pg_snapshot",
        group: "pg_snapshot",
        knexKey: {
            key: "specificType",
            specificTypeName: "pg_snapshot"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: null
        }
    },
    {
        label: "point",
        value: "point",
        group: "geometric",
        knexKey: {
            key: "point"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "POINT"
        }
    },
    {
        label: "polygon",
        value: "polygon",
        group: "geometric",
        knexKey: {
            key: "specificType",
            specificTypeName: "polygon"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "POLYGON"
        }
    },
    {
        label: "real",
        value: "real",
        group: "numeric",
        knexKey: {
            key: "specificType",
            specificTypeName: "real"
        },
        sqLiteKey: { 
            key: "INTEGER"
        },
        mySQLKey: { 
            key: "FLOAT"
        }
    },
    {
        label: "smallint",
        value: "smallint",
        group: "numeric",
        knexKey: {
            key: "smallint"
        },
        sqLiteKey: { 
            key: "INTEGER"
        },
        mySQLKey: { 
            key: "SMALLINT"
        }
    },
    {
        label: "smallserial",
        value: "smallserial",
        group: "numeric",
        knexKey: {
            key: "increments"
        },
        sqLiteKey: { 
            key: "INTEGER"
        },
        mySQLKey: { 
            key: "SMALLINT AUTO_INCREMENT"
        }
    },
    {
        label: "serial",
        value: "serial",
        group: "numeric",
        knexKey: {
            key: "increments"
        },
        sqLiteKey: { 
            key: "INTEGER"
        },
        mySQLKey: { 
            key: "INTEGER AUTO_INCREMENT"
        }
    },
    {
        label: "text",
        value: "text",
        group: "character",
        knexKey: {
            key: "text"
        },
        sqLiteKey: { 
            key: "TEXT"
        },
        mySQLKey: { 
            key: "LONGTEXT"
        }
    },
    {
        label: "time",
        value: "time",
        group: "date/time",
        knexKey: {
            key: "time"
        },
        sqLiteKey: { 
            key: "NUMERIC"
        },
        mySQLKey: { 
            key: "TIME"
        }
    },
    {
        label: "time with time zone",
        value: "time with time zone",
        group: "date/time",
        knexKey: {
            key: "timestamp"
        },
        sqLiteKey: { 
            key: "NUMERIC"
        },
        mySQLKey: { 
            key: "TIME"
        }
    },
    {
        label: "timestamp",
        value: "timestamp",
        group: "date/time",
        knexKey: {
            key: "timestamp"
        },
        sqLiteKey: { 
            key: "NUMERIC"
        },
        mySQLKey: { 
            key: "DATETIME"
        }
    },
    {
        label: "tsquery",
        value: "tsquery",
        group: "text search",
        knexKey: {
            key: "specificType",
            specificTypeName: "tsquery"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "LONGTEXT"
        }
    },
    {
        label: "tsvector",
        value: "tsvector",
        group: "text search",
        knexKey: {
            key: "specificType",
            specificTypeName: "tsvector"
        },
        sqLiteKey: { 
            key: null
        },
        mySQLKey: { 
            key: "LONGTEXT"
        }
    },
    {
        label: "uuid",
        value: "uuid",
        group: "uuid",
        knexKey: {
            key: "uuid",
        },
        sqLiteKey: { 
            key: "TEXT"
        },
        mySQLKey: { 
            key: "VARCHAR(36)"
        }
    },
];

export const postgresTypeArrayString = new Set(
    postgresTypeArray.map((v) => v.value),
);

export const postgresTypeGroup = Array.from(
    new Set(postgresTypeArray.map((v) => v.group)),
);
