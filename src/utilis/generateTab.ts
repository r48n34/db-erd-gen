export function tab(num: number = 2){
    const TAB = "\t";
    
    let strs = "";

    for(let i = 0; i < num; i ++){
        strs += TAB
    }

    return strs
}