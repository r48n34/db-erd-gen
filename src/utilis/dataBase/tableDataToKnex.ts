import { postgresToKnexArray } from "../../data/database/knexType";
import { Table } from "../../interface/inputData";
import { tab } from "../generateTab";



export function tableDataToKnexScheme(tables: Table[]){
    let schemeArray = [];

    for(let table of tables){
        let tableStr = []

        for(let col of table.columns){

           if(col.name === "id" && col.isPrimaryKey){
            tableStr.push(tab(3) + "table.increments();");
            continue
           }

           const targetType = postgresToKnexArray.findIndex( v => v.postgresKey === col.dataType );
           const strs = tab(3) + `table.${postgresToKnexArray[targetType].knexKey}("${col.name}")`
           tableStr.push(strs)
        }

        const finalTableStr = tab(1) + `if ( !(await knex.schema.hasTable("${table.name}")) ) { \n`
            + tab(2) + `await knex.schema.createTable("${table.name}", (table) => { \n`
            + tableStr.join("\n") + `\n`
            + tab(2) + `}); \n`
            + tab(1) + `} \n`

        
        schemeArray.push(finalTableStr);
    }

    console.log(schemeArray.join("\n"));
    return `import { Knex } from "knex"; \n \n`
        + `export async function up(knex: Knex): Promise<void> { \n \n `
        + schemeArray.join("\n")
        + `} \n \n`
        + `export async function down(knex: Knex): Promise<void> { \n`
        + tables.map( v => tab(1) + `await knex.schema.dropTableIfExists("${v.name}");`).join("\n")
        + `\n` + `}`
}