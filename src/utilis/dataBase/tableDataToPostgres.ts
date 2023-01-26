import { PostgresTypeArray, postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";


export function tableDataToPostgresScheme(tables: Table[]){
    let schemeArray = [];

    for(let table of tables){
        let tableStr = []

        for(let col of table.columns){
            const defaultLength = postgresTypeArray.findIndex( 
                (v:PostgresTypeArray) => v.value == col.dataType && v.defaultValue
            );

            const currentString = `  ${col.name} ${col.dataType} ${defaultLength === -1 ? "" : postgresTypeArray[defaultLength].defaultValue}`;
            tableStr.push(currentString)

            if(col.foreignTo){
                const joinString = `  FOREIGN KEY (${col.name}) REFERENCES ${col.foreignTo.name}(${col.foreignTo.column})`
                tableStr.push(joinString)
            }
        }

        const finalTableStr = `CREATE TABLE ${table.name} ( \n` + tableStr.join(", \n") + `\n` + `) \n`

        schemeArray.push(finalTableStr)
    }

    // console.log(schemeArray);
    console.log(schemeArray.join("\n"));

    return schemeArray.join("\n")

}