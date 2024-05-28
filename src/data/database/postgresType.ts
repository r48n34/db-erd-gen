// pg key to mySQL key references:
// https://www.convert-in.com/mysql-to-postgres-types-mapping.html
// https://dev.mysql.com/doc/workbench/en/wb-migration-database-postgresql-typemapping.html

export interface PostgresTypeArray {
    label: string;
    value: string;
    group: string;
    tsTypes: "string" | "number" | "boolean" | "object" | "null" | "Date"
    knexKey: {
        // knex using their string
        key: string; 
        specificTypeName?: string;
    };
    sqLiteKey: {
        // pg key to sqLiteKey key
        key: string | null;
    };
    mySQLKey: {
        // pg key to mySQL key
        key: string | null;
    };
    prismaKey: {
        key: string | null;
        nativeAttribute: {
            psql: string | null
            mySQL: string | null
        }
    };
    defaultValue?: undefined | string;
}

export const postgresTypeArray: PostgresTypeArray[] = [
    {
        label: "bigint",
        value: "bigint",
        group: "numeric",
        tsTypes: "number",
        knexKey: {
            key: "bigInteger",
        },
        sqLiteKey: {
            key: "INTEGER",
        },
        mySQLKey: {
            key: "BIGINT",
        },
        prismaKey: {
            key: "BigInt",
            nativeAttribute: {
                psql: "@db.BigInt",
                mySQL: "@db.BigInt"
            }
        },
    },
    {
        label: "bigserial",
        value: "bigserial",
        group: "numeric",
        tsTypes: "number",
        knexKey: {
            key: "bigIncrements",
        },
        sqLiteKey: {
            key: "INTEGER",
        },
        mySQLKey: {
            key: "BIGINT AUTO_INCREMENT",
        },
        prismaKey: {
            key: "BigInt",
            nativeAttribute: {
                psql: "@db.BigInt @default(autoincrement())",
                mySQL: "@db.UnsignedBigInt @default(autoincrement())"
            }
        },
    },
    {
        label: "bit",
        value: "bit",
        group: "bit",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "BIT(8)",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "BIT",
        },
        prismaKey: {
            key: "Bytes",
            nativeAttribute: {
                psql: "@db.ByteA",
                mySQL: "@db.Bit"
            }
        },
    },
    {
        label: "bit varying",
        value: "bit varying ",
        group: "bit",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "bit varying(255)",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "BIT",
        },
        prismaKey: {
            key: "String",
            nativeAttribute: {
                psql: "@db.VarBit",
                mySQL: ""
            }
        },
    },
    {
        label: "boolean",
        value: "boolean",
        group: "boolean",
        tsTypes: "boolean",
        knexKey: {
            key: "boolean",
            specificTypeName: "box",
        },
        sqLiteKey: {
            key: "INTEGER",
        },
        mySQLKey: {
            key: "TINYINT(1)",
        },
        prismaKey: {
            key: "Boolean",
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "box",
        value: "box",
        group: "geometric",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "bytea",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "POLYGON",
        },
        prismaKey: {
            key: `Unsupported("box")`,
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "bytea",
        value: "bytea",
        group: "binary",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "LONGBLOB",
        },
        prismaKey: {
            key: "Bytes",
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "varchar",
        value: "varchar",
        group: "character",
        tsTypes: "string",
        defaultValue: "(255)",
        knexKey: {
            key: "string",
        },
        sqLiteKey: {
            key: "TEXT",
        },
        mySQLKey: {
            key: "VARCHAR",
        },
        prismaKey: {
            key: "String",
            nativeAttribute: {
                psql: "@db.VarChar(255)",
                mySQL: "@db.VarChar(255)"
            }
        },
    },
    {
        label: "char",
        value: "char",
        group: "character",
        tsTypes: "string",
        defaultValue: "(255)",
        knexKey: {
            key: "specificType",
            specificTypeName: "CHAR(255)",
        },
        sqLiteKey: {
            key: "TEXT",
        },
        mySQLKey: {
            key: "CHAR",
        },
        prismaKey: {
            key: "String",
            nativeAttribute: {
                psql: "@db.Char(255)",
                mySQL: "@db.Char(255)"
            }
        },
    },
    {
        label: "cidr",
        value: "cidr",
        tsTypes: "string",
        group: "network address",
        knexKey: {
            key: "specificType",
            specificTypeName: "cidr",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "VARCHAR(43)",
        },
        prismaKey: {
            key: "String",
            nativeAttribute: {
                psql: "@db.VarChar(43)",
                mySQL: "@db.VarChar(43)"
            }
        },
    },
    {
        label: "circle",
        value: "circle",
        group: "geometric",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "circle",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "POLYGON",
        },
        prismaKey: {
            key: `Unsupported("circle")`,
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "date",
        value: "date",
        group: "date/time",
        tsTypes: "Date",
        knexKey: {
            key: "date",
        },
        sqLiteKey: {
            key: "NUMERIC",
        },
        mySQLKey: {
            key: "DATE",
        },
        prismaKey: {
            key: "DateTime",
            nativeAttribute: {
                psql: "@db.Date",
                mySQL: "@db.Date(3)"
            }
        },
    },
    {
        label: "double precision",
        value: "double precision",
        group: "numeric",
        tsTypes: "number",
        knexKey: {
            key: "double",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "DOUBLE",
        },
        prismaKey: {
            key: "Float",
            nativeAttribute: {
                psql: "@db.DoublePrecision",
                mySQL: "@db.Double"
            }
        },
    },
    {
        label: "inet",
        value: "inet",
        group: "network address",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "inet",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "VARCHAR(43)",
        },
        prismaKey: {
            key: "String",
            nativeAttribute: {
                psql: "@db.VarChar(43)",
                mySQL: "@db.VarChar(43)"
            }
        },
    },
    {
        label: "integer",
        value: "integer",
        group: "numeric",
        tsTypes: "number",
        knexKey: {
            key: "integer",
        },
        sqLiteKey: {
            key: "INTEGER",
        },
        mySQLKey: {
            key: "INT",
        },
        prismaKey: {
            key: "Int",
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "interval",
        value: "interval",
        group: "date/time",
        tsTypes: "Date",
        knexKey: {
            key: "specificType",
            specificTypeName: "interval",
        },
        sqLiteKey: {
            key: "NUMERIC",
        },
        mySQLKey: {
            key: "TIME",
        },
        prismaKey: {
            key: "DateTime",
            nativeAttribute: {
                psql: "@db.Time(3)",
                mySQL: "@db.Time(3)"
            }
        },
    },
    {
        label: "json",
        value: "json",
        group: "JSON",
        tsTypes: "string",
        knexKey: {
            key: "json",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "LONGTEXT",
        },
        prismaKey: {
            key: "Json",
            nativeAttribute: {
                psql: "@db.Json",
                mySQL: "@db.Json"
            }
        },
    },
    {
        label: "jsonb",
        value: "jsonb",
        group: "JSON",
        tsTypes: "string",
        knexKey: {
            key: "jsonb",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "LONGTEXT",
        },
        prismaKey: {
            key: "JSONB",
            nativeAttribute: {
                psql: "@db.JsonB",
                mySQL: "@db.Json"
            }
        },
    },
    {
        label: "line",
        value: "line",
        group: "geometric",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "line",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "LINESTRING",
        },
        prismaKey: {
            key: `Unsupported("line")`,
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "lseg",
        value: "lseg",
        group: "geometric",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "lseg",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "LINESTRING",
        },
        prismaKey: {
            key: `Unsupported("lseg")`,
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "macaddr",
        value: "macaddr",
        group: "network address",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "macaddr",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "VARCHAR(17)",
        },
        prismaKey: {
            key: "String",
            nativeAttribute: {
                psql: "@db.VarChar(17)",
                mySQL: "@db.VarChar(17)"
            }
        },
    },
    {
        label: "macaddr8",
        value: "macaddr8",
        group: "network address",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "macaddr8",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "VARCHAR(17)",
        },
        prismaKey: {
            key: "String",
            nativeAttribute: {
                psql: "@db.VarChar(17)",
                mySQL: "@db.VarChar(17)"
            }
        },
    },
    {
        label: "money",
        value: "money",
        group: "monetary",
        tsTypes: "number",
        knexKey: {
            key: "specificType",
            specificTypeName: "money",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "DECIMAL(19,2)",
        },
        prismaKey: {
            key: "Decimal",
            nativeAttribute: {
                psql: "@db.Money",
                mySQL: "@db.Decimal(19, 2)"
            }
        },
    },
    {
        label: "numeric",
        value: "numeric",
        group: "numeric",
        tsTypes: "number",
        knexKey: {
            key: "decimal",
        },
        sqLiteKey: {
            key: "INTEGER",
        },
        mySQLKey: {
            key: "DECIMAL",
        },
        prismaKey: {
            key: "Decimal",
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "path",
        value: "path",
        group: "geometric",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "path",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "LINESTRING",
        },
        prismaKey: {
            key: `Unsupported("path")`,
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "pg_lsn",
        value: "pg_lsn",
        group: "pg_lsn",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "pg_lsn",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: null,
        },
        prismaKey: {
            key: `Unsupported("pg_lsn")`,
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "pg_snapshot",
        value: "pg_snapshot",
        group: "pg_snapshot",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "pg_snapshot",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: null,
        },
        prismaKey: {
            key: `Unsupported("pg_snapshot")`,
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "point",
        value: "point",
        group: "geometric",
        tsTypes: "number",
        knexKey: {
            key: "point",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "POINT",
        },
        prismaKey: {
            key: `Unsupported("point")`,
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "polygon",
        value: "polygon",
        group: "geometric",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "polygon",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "POLYGON",
        },
        prismaKey: {
            key: `Unsupported("polygon")`,
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "real",
        value: "real",
        group: "numeric",
        tsTypes: "number",
        knexKey: {
            key: "specificType",
            specificTypeName: "real",
        },
        sqLiteKey: {
            key: "INTEGER",
        },
        mySQLKey: {
            key: "FLOAT",
        },
        prismaKey: {
            key: "Float",
            nativeAttribute: {
                psql: "@db.Real",
                mySQL: ""
            }
        },
    },
    {
        label: "smallint",
        value: "smallint",
        group: "numeric",
        tsTypes: "number",
        knexKey: {
            key: "smallint",
        },
        sqLiteKey: {
            key: "INTEGER",
        },
        mySQLKey: {
            key: "SMALLINT",
        },
        prismaKey: {
            key: "Int",
            nativeAttribute: {
                psql: "@db.SmallInt",
                mySQL: "@db.SmallInt"
            }
        },
    },
    {
        label: "smallserial",
        value: "smallserial",
        group: "numeric",
        tsTypes: "number",
        knexKey: {
            key: "increments",
        },
        sqLiteKey: {
            key: "INTEGER",
        },
        mySQLKey: {
            key: "SMALLINT AUTO_INCREMENT",
        },
        prismaKey: {
            key: "INT",
            nativeAttribute: {
                psql: "@db.SmallInt @default(autoincrement())",
                mySQL: "@db.SmallInt @default(autoincrement())"
            }
        },
    },
    {
        label: "serial",
        value: "serial",
        group: "numeric",
        tsTypes: "number",
        knexKey: {
            key: "increments",
        },
        sqLiteKey: {
            key: "INTEGER",
        },
        mySQLKey: {
            key: "INTEGER AUTO_INCREMENT",
        },
        prismaKey: {
            key: "INT",
            nativeAttribute: {
                psql: "@db.Int @default(autoincrement())",
                mySQL: "@db.Int @default(autoincrement())"
            }
        },
    },
    {
        label: "text",
        value: "text",
        group: "character",
        tsTypes: "string",
        knexKey: {
            key: "text",
        },
        sqLiteKey: {
            key: "TEXT",
        },
        mySQLKey: {
            key: "LONGTEXT",
        },
        prismaKey: {
            key: "String",
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "time",
        value: "time",
        group: "date/time",
        tsTypes: "Date",
        knexKey: {
            key: "time",
        },
        sqLiteKey: {
            key: "NUMERIC",
        },
        mySQLKey: {
            key: "TIME",
        },
        prismaKey: {
            key: "DateTime",
            nativeAttribute: {
                psql: "@db.Time(3)",
                mySQL: "@db.Time(3)"
            }
        },
    },
    {
        label: "time with time zone",
        value: "time with time zone",
        group: "date/time",
        tsTypes: "Date",
        knexKey: {
            key: "timestamp",
        },
        sqLiteKey: {
            key: "NUMERIC",
        },
        mySQLKey: {
            key: "TIME",
        },
        prismaKey: {
            key: "DateTime",
            nativeAttribute: {
                psql: "@db.Time(3)",
                mySQL: "@db.Time(3)"
            }
        },
    },
    {
        label: "timestamp",
        value: "timestamp",
        group: "date/time",
        tsTypes: "Date",
        knexKey: {
            key: "timestamp",
        },
        sqLiteKey: {
            key: "NUMERIC",
        },
        mySQLKey: {
            key: "DATETIME",
        },
        prismaKey: {
            key: "DateTime",
            nativeAttribute: {
                psql: "@db.Timestamp(3)",
                mySQL: "@db.Timestamp(3)"
            }
        },
    },
    {
        label: "tsquery",
        value: "tsquery",
        group: "text search",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "tsquery",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "LONGTEXT",
        },
        prismaKey: {
            key: "String",
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "tsvector",
        value: "tsvector",
        group: "text search",
        tsTypes: "string",
        knexKey: {
            key: "specificType",
            specificTypeName: "tsvector",
        },
        sqLiteKey: {
            key: null,
        },
        mySQLKey: {
            key: "LONGTEXT",
        },
        prismaKey: {
            key: "String",
            nativeAttribute: {
                psql: "",
                mySQL: ""
            }
        },
    },
    {
        label: "uuid",
        value: "uuid",
        group: "uuid",
        tsTypes: "string",
        knexKey: {
            key: "uuid",
        },
        sqLiteKey: {
            key: "TEXT",
        },
        mySQLKey: {
            key: "VARCHAR(36)",
        },
        prismaKey: {
            key: "String",
            nativeAttribute: {
                psql: "@db.Uuid",
                mySQL: ""
            }
        },
    },
];

const groupByKey = <T>(list: T[], key: string): Record<string, T[]> => list.reduce(
    (hash: Record<string, T[]>, obj: any) => ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
, {})

export const groupedPostgresTypeArray = Object.entries(groupByKey(postgresTypeArray, "group"))
    .map( ([key, value]) => ({
        group: key,
        items: value.map( k => ({ value: k.value, label: k.label }))
    }))

export const postgresTypeArrayString = new Set(
    postgresTypeArray.map((v) => v.value)
);

export const postgresTypeGroup = Array.from(
    new Set(postgresTypeArray.map((v) => v.group))
);
