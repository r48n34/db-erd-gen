import { Node, Edge } from "reactflow";
// import { TableData } from "../interface/dataNode";

export const tableOne = {
    tableName: "hello",
    tableItems: [
        {title: "one", type: "Integer"},
        {title: "one1", type: "Integer"},
        {title: "one2", type: "Integer"},
        {title: "one3", type: "Integer"},
        {title: "one4", type: "Integer"},
        {title: "one5", type: "Integer"},
    ]
}

export const tableTwo = {
    tableName: "yolo",
    tableItems: [
        {title: "one", type: "Integer"},
        {title: "one1", type: "Integer"},
        {title: "one2", type: "Integer"},
        {title: "one3", type: "Integer"},
        {title: "one4", type: "Integer", nodeType: "target"},
        {title: "one5", type: "Integer"},
    ]
}

export const initialEdges: Edge[] = [
    {
        "id": "reactflow__edge-tableOnehello_one4_right-tableTwoyolo_one4_left",
        "source": "tableOne",
        "sourceHandle": "hello_one4_right",
        "target": "tableTwo",
        "targetHandle": "yolo_one4_left",
    }
] as any;

export const initNodes: Node[] = [
    { id: 'tableOne', type: 'textUpdater', position: { x: 0, y: 0 }, data: tableOne },
    { id: 'tableTwo', type: 'textUpdater', position: { x: 0, y: 0 }, data: tableTwo },
];