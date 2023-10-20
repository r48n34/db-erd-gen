import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";
import { tab } from "../generateTab";

export function tableDataToZodTypeScheme(tables: Table[]){

    let schemeArray:string[] = [];

    for(let table of tables){
        let tableStr: string[] = []

        for(let col of table.columns){

            const targetTypeInd = postgresTypeArray.findIndex( v => v.value === col.dataType );
            const currentType = postgresTypeArray[targetTypeInd].tsTypes

            const zodVal = `z.${currentType.toLocaleLowerCase()}()`
            const finalZodValue = col.notNull || col.isPrimaryKey ? zodVal : `z.optional(${zodVal})`

            let finalStrs = tab(1) + `${col.name}: ${finalZodValue},`;
            tableStr.push(finalStrs)

        }

        const uppperName = table.name.charAt(0).toUpperCase() + table.name.slice(1);

        const finalTableStr = `export const ${uppperName}Scheme = z.object({ \n`
            + tableStr.join("\n") + `\n }) \n`
            + `\n type ${uppperName} = z.infer<typeof ${uppperName}Scheme>; \n`
            
        schemeArray.push(finalTableStr);
    }

    return `import { z } from "zod"; \n \n`
        + schemeArray.join("\n")
        
}