import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";
import { tab } from "../generateTab";

export function tableDataToTsTypeScheme(tables: Table[]){

    let schemeArray:string[] = [];

    for(let table of tables){
        let tableStr: string[] = []

        for(let col of table.columns){

            const targetTypeInd = postgresTypeArray.findIndex( v => v.value === col.dataType );
            const currentType = postgresTypeArray[targetTypeInd].tsTypes + (col.notNull || col.isPrimaryKey ? "" : " | null")

            const finalStrs = tab(1) + `${col.name}: ${currentType};`;
            tableStr.push(finalStrs)

        }

        const uppperName = table.name.charAt(0).toUpperCase() + table.name.slice(1);

        const finalTableStr = `export type ${uppperName} = { \n`
            + tableStr.join("\n") + `\n } \n`
            
        schemeArray.push(finalTableStr);
    }

    return schemeArray.join("\n")
        
}