export function toDownloadFile(str: string, fileName: string){

    if(typeof window !== "undefined"){
        const link = document.createElement("a");
        link.href = str;
        link.download = fileName;
    
        link.click();
    }

}