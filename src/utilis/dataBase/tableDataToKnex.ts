import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";
import { tab } from "../generateTab";

export function tableDataToKnexScheme(tables: Table[]){

    let schemeArray:string[] = [];

    for(let table of tables){
        let tableStr:string[] = []

        for(let col of table.columns){

            if(col.name === "id" && col.isPrimaryKey){
                tableStr.push(tab(3) + "table.increments()");
                continue
            }

            const targetTypeInd = postgresTypeArray.findIndex( v => v.value === col.dataType );
            let strs = tab(3) + ``

            if(postgresTypeArray[targetTypeInd].knexKey.key === "specificType"){
                const specificType = postgresTypeArray[targetTypeInd].knexKey.specificTypeName;
                strs += `table.specificType("${col.name}", "${specificType}")`;
            }
            else {
                strs += `table.${postgresTypeArray[targetTypeInd].knexKey.key}("${col.name}")`
            }

            col.unique  && (strs += `.unique()`)
            col.notNull && (strs += `.notNullable()`)

            tableStr.push(strs)

            if(col.foreignTo){
                const forientStr = tab(3) 
                    + `table.foreign("${col.name}").references("${col.foreignTo.name}.${col.foreignTo.column}")`;
                tableStr.push(forientStr)
            }
        }

        const finalTableStr = tab(1) + `if ( !(await knex.schema.hasTable("${table.name}")) ) { \n`
            + tab(2) + `await knex.schema.createTable("${table.name}", (table) => { \n`
            + tableStr.join("\n") + `\n`
            + tab(2) + `}); \n`
            + tab(1) + `} \n`

        schemeArray.push(finalTableStr);
    }

    let reverseArr = [...tables]
        .map( v => tab(1) + `await knex.schema.dropTableIfExists("${v.name}");`).reverse();

    return `import { Knex } from "knex"; \n \n`
        + `export async function up(knex: Knex): Promise<void> { \n \n `
        + schemeArray.join("\n")
        + `} \n \n`
        + `export async function down(knex: Knex): Promise<void> { \n`
        + reverseArr.join("\n")
        + `\n` + `}`
}