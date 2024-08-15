import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";
import { firstStrUpper, tab } from "../generateTab";

export function tableDataToPrismaScheme(tables: Table[], dbTypes: "postgresql" | "mySQL" | "sqlite" | "" = "postgresql") {

    let schemeArray: string[] = [];

    for (let table of tables) {
        let tableStr: string[] = []

        for (let col of table.columns) {

            const targetTypeInd = postgresTypeArray.findIndex(v => v.value === col.dataType);
            const currentType = postgresTypeArray[targetTypeInd]

            const currentKey = currentType.prismaKey.key + (!col.notNull && col.isPrimaryKey ? "" : "?")

            const prismaKeyNativeAttribute = dbTypes === "postgresql"
                ? " " + currentType.prismaKey.nativeAttribute.psql
                : dbTypes === "mySQL"
                    ? " " + currentType.prismaKey.nativeAttribute.mySQL
                    : ""

            let finalStrs = tab(1) + `${col.name} ${currentKey}${prismaKeyNativeAttribute}`
            col.unique && (finalStrs += " @unique")

            tableStr.push(finalStrs)

            if (col.foreignTo) {
                tableStr.push(
                    tab(1) + `${col.foreignTo.name} ${firstStrUpper(col.foreignTo.name)} @relation(fields: [${col.name}], references: [${col.foreignTo.column}], onDelete: NoAction, onUpdate: NoAction)`
                )
            }

        }

        const finalTableStr = `model ${firstStrUpper(table.name)} { \n`
            + tableStr.join("\n")
            + `\n} \n`

        schemeArray.push(finalTableStr);
    }

    return (dbTypes === "postgresql" ? `// https://www.prisma.io/docs/orm/prisma-schema/data-model/unsupported-database-features#enable-postgresql-extensions-for-native-database-functions\n// For psql extentions \n` : "") + schemeArray.join("\n")

}
