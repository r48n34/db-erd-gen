import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";

export function tableDataToSQLiteScheme(tables: Table[]){
    let schemeArray:string[] = [];

    for(let table of tables){
        let tableStr:string[] = []
        let uniqueKeys: string[] = []; 

        for(let col of table.columns){

            const targetTypeInd = postgresTypeArray.findIndex( v => v.value === col.dataType );
            const currentType = postgresTypeArray[targetTypeInd] 

            const sqliteType = currentType.sqLiteKey.key

            const isPrimary = col.isPrimaryKey ? " PRIMARY KEY" : "";
            const isNotNull = col.notNull ? " NOT NULL" : "";

            col.unique && uniqueKeys.push(col.name)

            const currentString = `  ${col.name} ${sqliteType}${isPrimary}${isNotNull}`;
            tableStr.push(currentString)

            if(col.foreignTo){
                const joinString = `  FOREIGN KEY (${col.name}) \n \t REFERENCES ${col.foreignTo.name} (${col.foreignTo.column}) \n \t ON DELETE CASCADE \n \t ON UPDATE NO ACTION`
                tableStr.push(joinString)
            }
        }

        uniqueKeys.length >= 1 && tableStr.push(`  UNIQUE (${uniqueKeys.join(", ")})`)

        const finalTableStr = `CREATE TABLE ${table.name} ( \n` + tableStr.join(", \n") + `\n` + `); \n`
        schemeArray.push(finalTableStr);
    }

    return schemeArray.join("\n")
}