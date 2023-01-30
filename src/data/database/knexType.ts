export interface PostgresToKnexTypeArray {
    postgresKey: string;
    knexKey: string;
    specificTypeName?: string
}

export const postgresToKnexArray = [
    { knexKey: "bigInteger", postgresKey: "bigint"},
    { knexKey: "bigIncrements", postgresKey: "bigserial" },
    { knexKey: "specificType", postgresKey: "bit", specificTypeName: "BIT(8)" },
    { knexKey: "specificType", postgresKey: "bit varying", specificTypeName: "bit varying(255)" },
    { knexKey: "boolean", postgresKey: "boolean" },
    { knexKey: "specificType", postgresKey: "box", specificTypeName: "box" },
    { knexKey: "specificType", postgresKey: "bytea", specificTypeName: "bytea" },
    { knexKey: "string", postgresKey: "varchar" },
    { knexKey: "specificType", postgresKey: "char", specificTypeName: "CHAR(255)"},
    { knexKey: "specificType", postgresKey: "cidr", specificTypeName: "cidr" },
    { knexKey: "specificType", postgresKey: "circle", specificTypeName: "circle" },
    { knexKey: "date", postgresKey: "date" },
    { knexKey: "double", postgresKey: "double precision" },
    { knexKey: "specificType", postgresKey: "inet", specificTypeName: "inet" },
    { knexKey: "integer", postgresKey: "integer" },
    { knexKey: "specificType", postgresKey: "interval", specificTypeName: "interval" },
    { knexKey: "json", postgresKey: "json" },
    { knexKey: "jsonb", postgresKey: "jsonb" },
    { knexKey: "specificType", postgresKey: "line", specificTypeName: "line" },
    { knexKey: "specificType", postgresKey: "lseg" , specificTypeName: "lseg"},
    { knexKey: "specificType", postgresKey: "macaddr", specificTypeName: "macaddr" },
    { knexKey: "specificType", postgresKey: "macaddr8", specificTypeName: "macaddr8" },
    { knexKey: "specificType", postgresKey: "money", specificTypeName: "money" },
    { knexKey: "decimal", postgresKey: "numeric"},
    { knexKey: "specificType", postgresKey: "path", specificTypeName: "path" },
    { knexKey: "specificType", postgresKey: "pg_lsn", specificTypeName: "pg_lsn" },
    { knexKey: "specificType", postgresKey: "pg_snapshot", specificTypeName: "pg_snapshot" },
    { knexKey: "point", postgresKey: "point" },
    { knexKey: "specificType", postgresKey: "polygon", specificTypeName: "polygon" },
    { knexKey: "specificType", postgresKey: "real", specificTypeName: "real" },
    { knexKey: "smallint", postgresKey: "smallint" },
    { knexKey: "increments", postgresKey: "smallserial" },
    { knexKey: "increments", postgresKey: "serial" },
    { knexKey: "text", postgresKey: "text" },
    { knexKey: "time", postgresKey: "time" },
    { knexKey: "timestamp", postgresKey: "timestamp" },
    { knexKey: "timestamp", postgresKey: "timestamp with time zone" },
    { knexKey: "specificType", postgresKey: "tsquery", specificTypeName: "tsquery" },
    { knexKey: "specificType", postgresKey: "tsvector", specificTypeName: "tsvector" },
    { knexKey: "specificType", postgresKey: "txid_snapshot", specificTypeName: "txid_snapshot" },
    { knexKey: "uuid", postgresKey: "uuid" },
] as PostgresToKnexTypeArray[]