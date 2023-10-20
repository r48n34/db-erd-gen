import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";
import { tab } from "../generateTab";

// https://www.prisma.io/docs/concepts/components/prisma-schema/data-model
export function tableDataToPrismaScheme(tables: Table[]){

    let schemeArray:string[] = [];

    for(let table of tables){
        let tableStr: string[] = []

        for(let col of table.columns){

            const targetTypeInd = postgresTypeArray.findIndex( v => v.value === col.dataType );
            const currentType = postgresTypeArray[targetTypeInd]

            const dataType = currentType.value

            console.log(currentType);

            let finalStrs = tab(2) + ``;
            let funcString = "(col) => col";

            const defFuncLength = funcString.length

            if(col.name === "id" && col.isPrimaryKey){
                funcString += `.primaryKey()`;
            }

            if(col.foreignTo){
                funcString += `.references("${col.foreignTo.name}.${col.foreignTo.column}").onDelete('cascade')`;
            }

            if(col.notNull){
                funcString += `.notNull()`;
            }

            // Determine last string
            if(funcString.length > defFuncLength){ // default, no extra cb strings
                finalStrs += `.addColumn("${col.name}", "${dataType}", ${funcString})`
            }
            else{
                finalStrs += `.addColumn("${col.name}", "${dataType}")`
            }

            tableStr.push(finalStrs)

        }

        const finalTableStr = tab(1) + `await db.schema \n`
            + tab(2) + `.createTable("${table.name}") \n`
            + tableStr.join("\n") + `\n`
            
        schemeArray.push(finalTableStr);
    }

    // console.log(schemeArray.join("\n"));

    let reverseArr = [...tables]
        .map( v => tab(1) + `await db.schema.dropTable('${v.name}').execute();`).reverse();

    return `import { Kysely } from 'kysely'; \n \n`
        + `export async function up(db: Kysely<any>): Promise<void> { \n `
        + schemeArray.join("\n")
        + `} \n \n`
        + `export async function down(db: Kysely<any>): Promise<void> { \n`
        + reverseArr.join("\n")
        + `\n` + `}`
}