import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";
import { firstStrUpper, tab } from "../generateTab";

function snakeToCamel(snakeStr: string): string {
  return snakeStr
    .split('_')
    .map((word, index) => {
      word = word.toLowerCase();
      if (index === 0) {
        // For first word, remove trailing 's' if present for singular form like 'users' to 'user'
        return word.endsWith('s') ? word.slice(0, -1) : word;
      }
      // Capitalize first letter of other words
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

export function tableDataToDrizzleScheme(tables: Table[], dbTypes: "postgresql" | "mySQL" | "sqlite" | "" = "postgresql"){

    let schemeArray:string[] = [];
    const importSet: Set<string> = new Set();

    const importType = dbTypes === "postgresql"
        ? { from: "drizzle-orm/pg-core", table: "pgTable" }
        : dbTypes === "sqlite"
        ? { from: "drizzle-orm/sqlite-core", table: "sqliteTable" }
        : dbTypes === "mySQL"
        ? { from: "drizzle-orm/mysql-core", table: "mysqlTable" }
        : { from: "drizzle-orm/pg-core", table: "pgTable" }

    for(let table of tables){
        let tableStr: string[] = []

        for(let col of table.columns){

            const targetTypeInd = postgresTypeArray.findIndex( v => v.value === col.dataType );
            const currentType = postgresTypeArray[targetTypeInd]

            const dataType = dbTypes === "postgresql"
                ? currentType.drizzleKey.psql
                : dbTypes === "sqlite"
                ? currentType.drizzleKey.sqlite
                : dbTypes === "mySQL"
                ? currentType.drizzleKey.mySQL
                : currentType.drizzleKey.psql

            !!dataType && importSet.add(dataType?.split("(")[0])

            const camoWord = snakeToCamel(col.name)

            let finalStrs = tab(1) + `${camoWord}: ${dataType}`;

            if(col.isPrimaryKey){
                finalStrs = tab(1) + `${camoWord}: integer().primaryKey().generatedByDefaultAsIdentity()`;
            }

            col.foreignTo && (finalStrs += `.references(() => ${col.foreignTo.name}.${col.foreignTo.column})`)
            col.notNull && (finalStrs += `.notNull()`);
            col.unique  && (finalStrs += `.unique()`);
            
            tableStr.push(finalStrs)
        }

        const camoWordTable = snakeToCamel(table.name)

        const finalTableStr = `export const ${camoWordTable} = ${importType.table}("${table.name}", { \n`
            + tableStr.join(",\n") 
            + `\n}); \n`;
            
        schemeArray.push(finalTableStr);
        schemeArray.push(`export type ${firstStrUpper(camoWordTable)} = typeof ${camoWordTable}.$inferSelect;\n`);

        const isBeingReferencesLs = tables.filter( t => 
            t.columns.filter( c => c.foreignTo && c.foreignTo.name === table.name).length >= 1
        )
        
        const haveForeginLs = table.columns.filter( t => !!t.foreignTo )
        if(haveForeginLs.length >= 1 || isBeingReferencesLs.length >= 1){

            const beRelationOrmLs = isBeingReferencesLs.map( v => {
                const camoWordRelationship = snakeToCamel(v.name)

                return tab(1) + `${camoWordRelationship}: many(${camoWordRelationship})`
            }
            )

            const relationOrmLs = haveForeginLs.map( v => {
                const camoWordRelationship = snakeToCamel(v.foreignTo?.name!)
                const camoWordForColRelationship = snakeToCamel(v.foreignTo?.column!)

                const camoWordTableRelationship = snakeToCamel(table.name)
                const camoWordColNameRelationship = snakeToCamel(v.name)

                return tab(1) + `${camoWordRelationship}: one(${camoWordRelationship}, { fields: [${camoWordTableRelationship}.${camoWordColNameRelationship}], references: [${camoWordRelationship}.${camoWordForColRelationship}] })`
            })

            const camoWordTableRelationship = snakeToCamel(table.name)

            schemeArray.push(
                `export const ${camoWordTableRelationship}Relations = relations(${camoWordTableRelationship}, ({ one, many }) => ({\n`
                + beRelationOrmLs.join(",\n")
                + relationOrmLs.join(",\n")
                + "\n}));\n"
            );

        }
        
    }

    return `import { ${importType.table}, ${Array.from(importSet).join(", ")} } from "${importType.from}";\n`
        + `import { relations } from "drizzle-orm";\n\n`
        + schemeArray.join("\n")
}

// https://github.com/RobinBlomberg/kysely-codegen
// export function tableDataToKyselyTypescriptScheme(
//     tables: Table[]
// ){

//     let schemeArray: string[] = [];
//     let schemeTableTypesArray: string[] = [];

//     for(let table of tables){

//         const uppperName = table.name.charAt(0).toUpperCase() + table.name.slice(1);
//         schemeTableTypesArray.push(tab(1) + `${table.name} : ${uppperName}Table`);

//         let tableStr: string[] = []

//         for(let col of table.columns){

//             const targetTypeInd = postgresTypeArray.findIndex( v => v.value === col.dataType );
//             let currentType = postgresTypeArray[targetTypeInd].tsTypes + (col.notNull || col.isPrimaryKey ? "" : " | null")

//             if(postgresTypeArray[targetTypeInd].value === "serial"){
//                 currentType = "Generated<number>"
//             }

//             let finalStrs = tab(1) + `${col.name}: ${currentType}`;
//             tableStr.push(finalStrs);

//         }

//         const finalTableStr = `export interface ${uppperName}Table { \n`
//             + tableStr.join("\n") + `\n } \n \n`
//             + `export type ${uppperName} = Selectable<${uppperName}Table> \n`
//             + `export type New${uppperName} = Insertable<${uppperName}Table> \n`
//             + `export type ${uppperName}Update = Updateable<${uppperName}Table> \n `
            
//         schemeArray.push(finalTableStr);
//     }

//     return `import { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely' \n \n`
//         + `export interface Database { \n`
//         + schemeTableTypesArray.join("\n")
//         + `\n} \n\n`
//         + schemeArray.join("\n")



// }