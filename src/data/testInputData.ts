import { InputItem, InputTable } from "../interface/inputData";

let tableHello: InputTable = {
    tableName: "hello" ,
    tableItems: [
        {
            name: "id",
            dataType: "Integer",
            isPrimaryKey: true,
        },
        {
            name: "name",
            dataType: "string",
            isPrimaryKey: false,
        },
        {
            name: "age",
            dataType: "Integer",
            isPrimaryKey: false,
        }
    ]
}

let tableYolo: InputTable = {
    tableName: "yolo" ,
    tableItems: [
        {
            name: "id",
            dataType: "Integer",
            isPrimaryKey: true,
        },
        {
            name: "hello_id",
            dataType: "Integer",
            isPrimaryKey: false,
            relationship: "one-to-one",
            foreignTo: {
                tableName: "hello",
                column: "id"
            },
        },
    ]
}

let tableHay: InputTable = {
    tableName: "hay" ,
    tableItems: [
        {
            name: "id",
            dataType: "Integer",
            isPrimaryKey: true,
        },
        {
            name: "hello_id",
            dataType: "Integer",
            isPrimaryKey: false,
            relationship: "one-to-one",
            foreignTo: {
                tableName: "hello",
                column: "id"
            },
        },
    ]
}

let tableApple: InputTable = {
    tableName: "apple" ,
    tableItems: [
        {
            name: "id",
            dataType: "Integer",
            isPrimaryKey: true,
        },
        {
            name: "hay_id",
            dataType: "Integer",
            isPrimaryKey: false,
            relationship: "one-to-one",
            foreignTo: {
                tableName: "hay",
                column: "id"
            },
        },
    ]
}

export let grandData: InputTable[] = [tableHello, tableYolo, tableHay, tableApple];