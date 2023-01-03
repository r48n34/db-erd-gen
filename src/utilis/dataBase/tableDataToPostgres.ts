import { Table } from "../../interface/inputData";

export function tableDataToPostgresScheme(tables: Table[]){
    let schemeArray = [];

    for(let table of tables){
        const firstLine = `CREATE TABLE ${table.name} (`
        const lastLine = `)`
    }
}