import { toDownloadFile } from "./downloadFile";
import { Table } from "../../interface/inputData";

export function exportJsonFormat(tables: Table[]){
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(tables)
    )}`;

    toDownloadFile(jsonString, `data-${new Date().getTime()}.json`)
}

export function importJsonFormat(str: string){
    return JSON.parse(str)
}