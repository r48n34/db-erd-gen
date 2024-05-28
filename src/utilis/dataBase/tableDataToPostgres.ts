import { PostgresTypeArray, postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";

export function tableDataToPostgresScheme(tables: Table[]){
    let schemeArray:string[] = [];

    for(let table of tables){
        let tableStr:string[] = []

        for(let col of table.columns){
            const haveDefault = postgresTypeArray.findIndex( 
                (v:PostgresTypeArray) => v.value == col.dataType && v.defaultValue
            );

            const defaultString = haveDefault === -1 ? "" : postgresTypeArray[haveDefault].defaultValue;
            const isPrimary = col.isPrimaryKey ? " primary key" : "";
            const isNotNull = col.notNull ? " NOT NULL" : "";
            const isUnique = col.unique ? " UNIQUE" : "";

            const currentString = `  ${col.name} ${col.dataType}${defaultString + isPrimary}${isNotNull}${isUnique}`;
            tableStr.push(currentString)

            if(col.foreignTo){
                const joinString = `  FOREIGN KEY (${col.name}) REFERENCES ${col.foreignTo.name}(${col.foreignTo.column})`
                tableStr.push(joinString)
            }
        }

        const finalTableStr = `CREATE TABLE ${table.name} ( \n` + tableStr.join(", \n") + `\n` + `); \n`
        schemeArray.push(finalTableStr);
    }

    return schemeArray.join("\n")
}