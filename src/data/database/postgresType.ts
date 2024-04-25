// pg key to mySQL key references:
// https://www.convert-in.com/mysql-to-postgres-types-mapping.html
// https://dev.mysql.com/doc/workbench/en/wb-migration-database-postgresql-typemapping.html

export interface PostgresTypeArray {
    label: string;
    value: string;
    group: string;
    tsTypes: "string" | "number" | "boolean" | "object" | "null" | "Date"
    knexKey: {
        key: string; // knex using their string
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
        // pg key to prisma Key
        postgreSqlKey: string | null;
        mySQLKey: string | null;
        sqLiteKey: string | null;
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
            postgreSqlKey: "BigInt @db.BigInt",
            mySQLKey: "BigInt @db.BigInt",
            sqLiteKey: "BigInt",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "Boolean",
            mySQLKey: "Boolean",
            sqLiteKey: "Boolean",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "String",
            mySQLKey: "String",
            sqLiteKey: "String",
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
            postgreSqlKey: "String @db.Char(255)",
            mySQLKey: "String @db.Char(255)",
            sqLiteKey: "String",
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
            postgreSqlKey: "String @db.VarChar(43)",
            mySQLKey: "String @db.VarChar(43)",
            sqLiteKey: "String",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
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
            postgreSqlKey: "",
            mySQLKey: "",
            sqLiteKey: "",
        },
    },
];

const groupByKey = (list: any[], key: string): Record<string, any[]> => list.reduce((hash, obj) => ({...hash, [obj[key]]:( hash[obj[key]] || [] ).concat(obj)}), {})

export const groupedPostgresTypeArray = Object.entries(groupByKey(postgresTypeArray, "group")).map( ([key, value]) => ({
    group: key, items: value.map( k => ({ value: k.value, label: k.label }))
}))
// console.log(groupedPostgresTypeArray)

export const postgresTypeArrayString = new Set(
    postgresTypeArray.map((v) => v.value)
);

export const postgresTypeGroup = Array.from(
    new Set(postgresTypeArray.map((v) => v.group))
);
