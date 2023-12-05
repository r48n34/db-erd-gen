import { PostgresTypeArray, postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";

export function tableDataToMySQLScheme(tables: Table[]){
    let schemeArray:string[] = [];

    for(let table of tables){
        let tableStr:string[] = []
        let uniqueKeys: string[] = []; 

        for(let col of table.columns){

            const haveDefaultInd = postgresTypeArray.findIndex( 
                (v:PostgresTypeArray) => v.value == col.dataType
            );

            const currentType = postgresTypeArray[haveDefaultInd]
            console.log(currentType.mySQLKey.key);
            const mySQLKey = currentType.mySQLKey.key

            // const defaultString = haveDefaultInd === -1 ? "" : currentType.defaultValue;

            const isPrimary = col.isPrimaryKey ? "AUTO_INCREMENT PRIMARY KEY" : "";
            const isNotNull = col.notNull ? "NOT NULL" : "";

            col.unique && uniqueKeys.push(col.name)

            const currentString = `  ${col.name} ${mySQLKey} ${isPrimary} ${isNotNull}`;
            tableStr.push(currentString)

            if(col.foreignTo){
                const joinString = `  FOREIGN KEY (${col.name}) REFERENCES ${col.foreignTo.name}(${col.foreignTo.column})`
                tableStr.push(joinString)
            }
        }

        uniqueKeys.length >= 1 && tableStr.push(`  UNIQUE (${uniqueKeys.join(", ")})`)

        const finalTableStr = `CREATE TABLE ${table.name} ( \n` + tableStr.join(", \n") + `\n` + `); \n`
        schemeArray.push(finalTableStr);
    }

    // console.log(schemeArray.join("\n"));
    return schemeArray.join("\n")
}