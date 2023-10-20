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

export const postgresTypeArrayString = new Set(
  postgresTypeArray.map((v) => v.value)
);

export const postgresTypeGroup = Array.from(
  new Set(postgresTypeArray.map((v) => v.group))
);
