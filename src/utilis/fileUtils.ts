export function readJsonFromFile(file: File): Promise<string> {
    return new Promise( (rec, rej) => {
        try { 
            let reader = new FileReader();
            
            reader.onload = function() {
                rec(reader.result as string)
            }
            
            reader.readAsText(file); 
        } 
        catch (error) {
            rec("")
        } 
    })
}