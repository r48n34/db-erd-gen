import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";
import { tab } from "../generateTab";

export function tableDataToYupTypeScheme(tables: Table[]){

    let schemeArray: string[] = [];

    for(let table of tables){
        let tableStr: string[] = []

        for(let col of table.columns){

            const targetTypeInd = postgresTypeArray.findIndex( v => v.value === col.dataType );
            const currentType = postgresTypeArray[targetTypeInd].tsTypes

            const yumVal = `yup.${currentType.toLocaleLowerCase()}()`
            const finalZodValue = col.notNull || col.isPrimaryKey ? `${yumVal}.defined()` : `${yumVal}.nullable()`

            let finalStrs = tab(1) + `${col.name}: ${finalZodValue},`;
            tableStr.push(finalStrs)

        }

        const uppperName = table.name.charAt(0).toUpperCase() + table.name.slice(1);

        const finalTableStr = `export const ${uppperName}Scheme = yup.object({ \n`
            + tableStr.join("\n") + `\n}) \n`
            + `\nexport type ${uppperName} = yup.InferType<typeof ${uppperName}Scheme>; \n`
            
        schemeArray.push(finalTableStr);
    }

    return `import * as yup from 'yup'; \n \n`
        + schemeArray.join("\n")
        
}