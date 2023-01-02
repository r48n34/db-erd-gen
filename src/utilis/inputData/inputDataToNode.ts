import { InputTable } from "../../interface/inputData";
import { Node, Edge } from "reactflow";

export function inputDataToNodeAndEdges(data: InputTable[]){
    const initNodes: Node[] = [
        // { id: 'tableOne', type: 'textUpdater', position: { x: 0, y: 0 }, data: tableOne },
    ];

    const initialEdges: Edge[] = [
        // {
        //     "id": "reactflow__edge-tableOnehello_one4_right-tableTwoyolo_one4_left",
        //     "source": "tableOne",
        //     "sourceHandle": "hello_one4_right",
        //     "target": "tableTwo",
        //     "targetHandle": "yolo_one4_left",
        // }
    ];

    let initTableDistance = 200;

    for(let tableItem of data){

        const tableName = tableItem.tableName;

        // Create Edge checking
        for(let k of tableItem.tableItems){
            if(!!k.foreignTo){

                const sourceHandle = `${k.foreignTo!.tableName}_${k.foreignTo!.column}_right`
                const targetHandle = `${tableName}_${k.name}_left`

                initialEdges.push({
                    "id": `reactflow__${sourceHandle}_${targetHandle}_gen`,
                    "source": k.foreignTo!.tableName,
                    "sourceHandle": sourceHandle,
                    "target": tableName,
                    "targetHandle": targetHandle,
                })
            }
        }

        const tableInfo = {
            tableName: tableName,
            tableItems: tableItem.tableItems
        } 

        initNodes.push({ id: tableName, type: 'textUpdater', position: { x: initTableDistance, y: 500 }, data: tableInfo })
        initTableDistance += 250;
    } 

    return {
        nodes: initNodes,
        edges: initialEdges
    }

}