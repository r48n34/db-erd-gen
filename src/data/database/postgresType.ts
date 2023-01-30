export interface PostgresTypeArray {
    label: string;
    value: string;
    group: string;
    defaultValue?: undefined | string;
}

export const postgresTypeArray = [
    { label: "bigint", value: "bigint", group: "numeric" },
    { label: "bigserial", value: "bigserial", group: "numeric" },
    { label: "bit", value: "bit", group: "bit" },
    { label: "bit varying", value: "bit varying ", group: "bit" },
    { label: "boolean", value: "boolean", group: "boolean" },
    { label: "box", value: "box", group: "geometric" },
    { label: "bytea", value: "bytea", group: "binary" },
    { label: "varchar", value: "varchar", group: "character", defaultValue: "(255)" },
    { label: "char", value: "char", group: "character", defaultValue: "(255)" },
    { label: "cidr", value: "cidr", group: "network address" },
    { label: "circle", value: "circle", group: "geometric" },
    { label: "date", value: "date", group: "date/time" },
    { label: "double precision", value: "double precision", group: "numeric" },
    { label: "inet", value: "inet", group: "network address" },
    { label: "integer", value: "integer", group: "numeric" },
    { label: "interval", value: "interval", group: "date/time" },
    { label: "json", value: "json", group: "JSON" },
    { label: "jsonb", value: "jsonb", group: "JSON" },
    { label: "line", value: "line", group: "geometric" },
    { label: "lseg", value: "lseg", group: "geometric" },
    { label: "macaddr", value: "macaddr", group: "network address" },
    { label: "macaddr8", value: "macaddr8", group: "network address" },
    { label: "money", value: "money", group: "monetary" },
    { label: "numeric", value: "numeric", group: "numeric" },
    { label: "path", value: "path", group: "geometric" },
    { label: "pg_lsn", value: "pg_lsn", group: "pg_lsn" },
    { label: "pg_snapshot", value: "pg_snapshot", group: "pg_snapshot" },
    { label: "point", value: "point", group: "geometric" },
    { label: "polygon", value: "polygon", group: "geometric" },
    { label: "real", value: "real", group: "numeric" },
    { label: "smallint", value: "smallint", group: "numeric" },
    { label: "smallserial", value: "smallserial", group: "numeric" },
    { label: "serial", value: "serial", group: "numeric" },
    { label: "text", value: "text", group: "character" },
    { label: "time", value: "time", group: "date/time" },
    { label: "time with time zone", value: "time with time zone", group: "date/time" },
    { label: "timestamp", value: "timestamp", group: "date/time" },
    { label: "tsquery", value: "tsquery", group: "text search" },
    { label: "tsvector", value: "tsvector", group: "text search" },
    { label: "txid_snapshot", value: "txid_snapshot", group: "others" },
    { label: "uuid", value: "uuid", group: "uuid" },
    { label: "xm",	 value: "xm", group: "others" }	
] as PostgresTypeArray[]

export const postgresTypeArrayString = new Set(postgresTypeArray.map( v => v.value ))