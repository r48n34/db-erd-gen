import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";
import { tab } from "../generateTab";

export function tableDataToValibotTypeScheme(tables: Table[]){

    let schemeArray: string[] = [];

    for(let table of tables){
        let tableStr: string[] = []

        for(let col of table.columns){

            const targetTypeInd = postgresTypeArray.findIndex( v => v.value === col.dataType );
            const currentType = postgresTypeArray[targetTypeInd].tsTypes;

            const yumVal = `v.${currentType.toLocaleLowerCase()}()`
            const finalValue = col.notNull || col.isPrimaryKey ? yumVal : `v.nullish(${yumVal})`

            let finalStrs = tab(1) + `${col.name}: ${finalValue},`;
            tableStr.push(finalStrs)

        }

        const uppperName = table.name.charAt(0).toUpperCase() + table.name.slice(1);

        const finalTableStr = `export const ${uppperName}Scheme = v.object({ \n`
            + tableStr.join("\n") + `\n}) \n`
            + `\nexport type ${uppperName} = v.InferOutput<typeof ${uppperName}Scheme>; \n`
            
        schemeArray.push(finalTableStr);
    }

    return `import * as v from 'valibot'; \n \n`
        + schemeArray.join("\n")
        
}