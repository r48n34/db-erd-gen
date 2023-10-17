export interface PostgresTypeArray {
    label: string;
    value: string;
    group: string;
    knexKey: {
        key: string; // knex using their string
        specificTypeName?: string;
    };
    sqLiteKey?: { // 
        key: string | null ;
    }
    defaultValue?: undefined | string;
}

export const postgresTypeArray = [
    {
        label: "bigint",
        value: "bigint",
        group: "numeric",
        knexKey: {
            key: "bigInteger",
        },
        sqLiteKey: { 
            key: "INTEGER"
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
        }
    },
] as PostgresTypeArray[];

export const postgresTypeArrayString = new Set(
    postgresTypeArray.map((v) => v.value),
);

export const postgresTypeGroup = Array.from(
    new Set(postgresTypeArray.map((v) => v.group)),
);
