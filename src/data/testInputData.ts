import { Column, Table } from "../interface/inputData";

let tableHello: Table = {
    name: "hello" ,
    columns: [
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

let tableYolo: Table = {
    name: "yolo" ,
    columns: [
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
                name: "hello",
                column: "id"
            },
        },
    ]
}

let tableHay: Table = {
    name: "hay" ,
    columns: [
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
                name: "hello",
                column: "id"
            },
        },
    ]
}

let tableApple: Table = {
    name: "apple" ,
    columns: [
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
                name: "hay",
                column: "id"
            },
        },
    ]
}

// test data
export let grandData: Table[] = [tableHello, tableYolo, tableHay, tableApple];