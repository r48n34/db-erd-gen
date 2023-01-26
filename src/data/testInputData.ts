import { Table } from "../interface/inputData";

let tableHello: Table = {
    name: "hello" ,
    columns: [
        {
            name: "id",
            dataType: "integer",
            isPrimaryKey: true,
        },
        {
            name: "name",
            dataType: "varchar",
            isPrimaryKey: false,
        },
        {
            name: "age",
            dataType: "integer",
            isPrimaryKey: false,
        }
    ]
}

let tableYolo: Table = {
    name: "yolo" ,
    columns: [
        {
            name: "id",
            dataType: "integer",
            isPrimaryKey: true,
        },
        {
            name: "hello_id",
            dataType: "integer",
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
            dataType: "integer",
            isPrimaryKey: true,
        },
        {
            name: "hello_id",
            dataType: "integer",
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
            dataType: "integer",
            isPrimaryKey: true,
        },
        {
            name: "hay_id",
            dataType: "integer",
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