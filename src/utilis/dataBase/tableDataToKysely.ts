import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";
import { tab } from "../generateTab";

export function tableDataToKyselyScheme(tables: Table[]){

    let schemeArray = [];

    for(let table of tables){
        let tableStr: string[] = []

        for(let col of table.columns){

            if(col.name === "id" && col.isPrimaryKey){
                tableStr.push(tab(2) + `.addColumn("id", "serial", (col) => col.primaryKey())`);
                continue
            }

            const targetTypeInd = postgresTypeArray.findIndex( v => v.value === col.dataType );
            const currentType = postgresTypeArray[targetTypeInd]
            let strs = tab(2) + ``;

            let funcString = "(col) => col"

            if(col.foreignTo){
                funcString += `.references("${col.foreignTo.name}.${col.foreignTo.column}").onDelete('cascade')`;
            }

            if(col.notNull){
                funcString += `.notNull()`;
            }

            if(funcString.length > 12){
                strs += `.addColumn("${col.name}", "${currentType.value}", ${funcString})`
            }
            else{
                strs += `.addColumn("${col.name}", "${currentType.value}")`
            }

            tableStr.push(strs)

            // if(postgresTypeArray[targetTypeInd].knexKey.key === "specificType"){
            //     const specificType = postgresTypeArray[targetTypeInd].knexKey.specificTypeName;
            //     strs += `table.specificType("${col.name}", "${specificType}")`;
            // }
            // else{
            //     strs += `table.${postgresTypeArray[targetTypeInd].knexKey.key}("${col.name}")`
            // }

            // if(col.notNull){
            //     strs += `.notNullable()`
            // }

            // tableStr.push(strs)

            // if(col.foreignTo){
            //     const forientStr = tab(3) 
            //         + `table.foreign("${col.name}").references("${col.foreignTo.name}.${col.foreignTo.column}")`;
            //     tableStr.push(forientStr)
            // }
        }

        const finalTableStr = tab(1) + `await db.schema \n`
            + tab(2) + `.createTable("${table.name}") \n`
            + tableStr.join("\n") + `\n`
            
            

        schemeArray.push(finalTableStr);
    }

    // console.log(schemeArray.join("\n"));

    let reverseArr = [...tables]
        // .map( v => tab(1) + `await knex.schema.dropTableIfExists("${v.name}");`).reverse();
        .map( v => tab(1) + `await db.schema.dropTable('${v.name}').execute();`).reverse();

    return `import { Kysely } from 'kysely'; \n \n`
        + `export async function up(db: Kysely<any>): Promise<void> { \n `
        + schemeArray.join("\n")
        + `} \n \n`
        + `export async function down(db: Kysely<any>): Promise<void> { \n`
        + reverseArr.join("\n")
        + `\n` + `}`
}