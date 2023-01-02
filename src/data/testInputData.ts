import { InputItem, InputTable } from "../interface/inputData";

let tableHello: InputTable = {
    name: "hello" ,
    items: [
        {
            name: "id",
            dataType: "Integer",
            isPrimaryKey: true,
            isForeignKey: false
        },
        {
            name: "name",
            dataType: "string",
            isPrimaryKey: false,
            isForeignKey: false
        },
        {
            name: "age",
            dataType: "Integer",
            isPrimaryKey: false,
            isForeignKey: false
        }
    ]
}

let tableYolo: InputTable = {
    name: "yolo" ,
    items: [
        {
            name: "id",
            dataType: "Integer",
            isPrimaryKey: true,
            isForeignKey: false
        },
        {
            name: "hello_id",
            dataType: "Integer",
            isPrimaryKey: false,
            isForeignKey: true,
            relationship: "one-to-one",
            foreignTo: {
                tableName: "hello",
                column: "id"
            },
        },

    ]
}

export let grandData: InputTable[] = [tableHello, tableYolo];