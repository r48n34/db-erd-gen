const TAB = "\t"

export function tab(num: number = 2){
    let strs = "";

    for(let i = 0; i < num; i ++){
        strs += TAB
    }

    return strs
}