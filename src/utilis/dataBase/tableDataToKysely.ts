import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";
import { tab } from "../generateTab";

export function tableDataToKyselyScheme(tables: Table[], dbTypes: "postgresql" | "mySQL" | "sqlite" | "" = "postgresql"){

    let schemeArray:string[] = [];

    for(let table of tables){
        let tableStr: string[] = []

        for(let col of table.columns){

            const targetTypeInd = postgresTypeArray.findIndex( v => v.value === col.dataType );
            const currentType = postgresTypeArray[targetTypeInd]

            const dataType = dbTypes === "postgresql"
                ? currentType.value
                : dbTypes === "sqlite"
                ? currentType.sqLiteKey.key
                : dbTypes === "mySQL"
                ? currentType.mySQLKey.key
                : ""

            // console.log(currentType);

            let finalStrs = tab(2) + ``;
            let funcString = "(col) => col";

            const defFuncLength = funcString.length

            if(col.name === "id" && col.isPrimaryKey){
                funcString += `.primaryKey()`;
            }

            col.foreignTo && (funcString += `.references("${col.foreignTo.name}.${col.foreignTo.column}").onDelete('cascade')`)
            col.notNull && (funcString += `.notNull()`);
            col.unique  && (funcString += `.unique()`);
            
            // Determine last string
            finalStrs += funcString.length > defFuncLength
                ? `.addColumn("${col.name}", "${dataType}", ${funcString})`
                : `.addColumn("${col.name}", "${dataType}")`

            tableStr.push(finalStrs)

        }

        const finalTableStr = tab(1) + `await db.schema \n`
            + tab(2) + `.createTable("${table.name}") \n`
            + tableStr.join("\n") 
            + `\n`
            + tab(2) + `.execute(); \n`;
            
        schemeArray.push(finalTableStr);
    }

    const reverseArr = [...tables]
        .map( v => tab(1) + `await db.schema.dropTable('${v.name}').execute();`).reverse();

    return `import { Kysely } from 'kysely'; \n \n`
        + `export async function up(db: Kysely<any>): Promise<void> { \n `
        + schemeArray.join("\n")
        + `} \n \n`
        + `export async function down(db: Kysely<any>): Promise<void> { \n`
        + reverseArr.join("\n")
        + `\n` + `}`
}

// https://github.com/RobinBlomberg/kysely-codegen
export function tableDataToKyselyTypescriptScheme(
    tables: Table[]
){

    let schemeArray: string[] = [];
    let schemeTableTypesArray: string[] = [];

    for(let table of tables){

        const uppperName = table.name.charAt(0).toUpperCase() + table.name.slice(1);
        schemeTableTypesArray.push(tab(1) + `${table.name} : ${uppperName}Table`);

        let tableStr: string[] = []

        for(let col of table.columns){

            const targetTypeInd = postgresTypeArray.findIndex( v => v.value === col.dataType );
            let currentType = postgresTypeArray[targetTypeInd].tsTypes + (col.notNull || col.isPrimaryKey ? "" : " | null")

            if(postgresTypeArray[targetTypeInd].value === "serial"){
                currentType = "Generated<number>"
            }

            let finalStrs = tab(1) + `${col.name}: ${currentType}`;
            tableStr.push(finalStrs);

        }

        const finalTableStr = `export interface ${uppperName}Table { \n`
            + tableStr.join("\n") + `\n } \n \n`
            + `export type ${uppperName} = Selectable<${uppperName}Table> \n`
            + `export type New${uppperName} = Insertable<${uppperName}Table> \n`
            + `export type ${uppperName}Update = Updateable<${uppperName}Table> \n `
            
        schemeArray.push(finalTableStr);
    }

    return `import { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely' \n \n`
        + `export interface Database { \n`
        + schemeTableTypesArray.join("\n")
        + `\n} \n\n`
        + schemeArray.join("\n")



}