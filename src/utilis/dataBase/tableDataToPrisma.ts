import { postgresTypeArray } from "../../data/database/postgresType";
import { Table } from "../../interface/inputData";
import { tab } from "../generateTab";

export function tableDataToPrismaScheme(tables: Table[], dbTypes: "postgresql" | "mySQL" | "sqlite" | "" = "postgresql"){

    let schemeArray:string[] = [];
    
    for(let table of tables){
        let tableStr: string[] = []
        let uniqueList: string[] = []

        for(let col of table.columns){

            const targetTypeInd = postgresTypeArray.findIndex( v => v.value === col.dataType );
            const currentType = postgresTypeArray[targetTypeInd]

            const currentKey = currentType.prismaKey.key + (!col.notNull && col.isPrimaryKey ? "" : "?")

            const prismaKeyNativeAttribute = dbTypes === "postgresql"
                ? " " + currentType.prismaKey.nativeAttribute.psql
                : dbTypes === "mySQL"
                ? " " + currentType.prismaKey.nativeAttribute.mySQL
                : ""

            let finalStrs = tab(1) + `${col.name} ${currentKey}${prismaKeyNativeAttribute}`;

            if(col.foreignTo){
                finalStrs = tab(1) + `${col.name} ${col.foreignTo.name} @relation(fields: [${col.foreignTo.column}], references: [${col.foreignTo.column}], onDelete: NoAction, onUpdate: NoAction)`
            }

            if(col.unique){
                uniqueList.push(col.name) 
            }
            // let funcString = "(col) => col";

            // const defFuncLength = funcString.length

            // if(col.name === "id" && col.isPrimaryKey){
            //     funcString += `.primaryKey()`;
            // }

            // col.foreignTo && (funcString += `.references("${col.foreignTo.name}.${col.foreignTo.column}").onDelete('cascade')`)
            // col.notNull && (funcString += `.notNull()`);
            // col.unique  && (funcString += `.unique()`);
            
            // // Determine last string
            // if(funcString.length > defFuncLength){ // default, no extra cb strings
            //     finalStrs += `.addColumn("${col.name}", "${dataType}", ${funcString})`
            // }
            // else{
            //     finalStrs += `.addColumn("${col.name}", "${dataType}")`
            // }

            tableStr.push(finalStrs)

        }

        const finalTableStr = `model ${table.name} { \n`
            + tableStr.join("\n") 
            + (uniqueList.length >= 1 ? `\n\n${tab(1)}@@unique([${uniqueList.join(", ")}])` : "")
            + `\n} \n`

        schemeArray.push(finalTableStr);
    }


    return schemeArray.join("\n")


}
