export function tab(num: number = 2){
    const TAB = "\t";
    
    let strs = "";

    for(let i = 0; i < num; i ++){
        strs += TAB
    }

    return strs
}

export function firstStrUpper(str: string) : string{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function firstStrLower(str: string) : string{
    return str.charAt(0).toLowerCase() + str.slice(1);
}