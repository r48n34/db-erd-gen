import { Table } from "../../interface/inputData";

export function exportJsonFormat(tables: Table[]){

    if(typeof window !== "undefined"){
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(tables)
        )}`;

        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "data.json";
    
        link.click();
    }

}

export function importJsonFormat(str: string){
    const obj = JSON.parse(str);
    return obj
}