import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";
import { tab } from "../generateTab";

export function tableDataToPrismaScheme(tables: Table[], dbTypes: "postgresql" | "mySQL" | "sqlite" | "" = "postgresql") {

    let schemeArray: string[] = [];

    for (let table of tables) {
        let tableStr: string[] = []
        let uniqueList: string[] = []

        for (let col of table.columns) {

            const targetTypeInd = postgresTypeArray.findIndex(v => v.value === col.dataType);
            const currentType = postgresTypeArray[targetTypeInd]

            const currentKey = currentType.prismaKey.key + (!col.notNull && col.isPrimaryKey ? "" : "?")

            const prismaKeyNativeAttribute = dbTypes === "postgresql"
                ? " " + currentType.prismaKey.nativeAttribute.psql
                : dbTypes === "mySQL"
                ? " " + currentType.prismaKey.nativeAttribute.mySQL
                : ""

            const finalStrs = tab(1)
                + (col.foreignTo
                    ? `${col.name} ${col.foreignTo.name} @relation(fields: [${col.foreignTo.column}], references: [${col.foreignTo.column}], onDelete: NoAction, onUpdate: NoAction)`
                    : `${col.name} ${currentKey}${prismaKeyNativeAttribute}`
                )

            if (col.unique) {
                uniqueList.push(col.name)
            }

            tableStr.push(finalStrs)

        }

        const finalTableStr = `model ${table.name} { \n`
            + tableStr.join("\n")
            + (uniqueList.length >= 1 ? `\n\n${tab(1)}@@unique([${uniqueList.join(", ")}])` : "")
            + `\n} \n`

        schemeArray.push(finalTableStr);
    }

    return (dbTypes === "postgresql" ? `// https://www.prisma.io/docs/orm/prisma-schema/data-model/unsupported-database-features#enable-postgresql-extensions-for-native-database-functions\n// For psql extentions \n` : "") + schemeArray.join("\n")

}
