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

    for(let tableItem of data){

        for(let k of tableItem.tableItems){
            if(k.isForeignKey || !!k.foreignTo){

                const sourceHandle = `${k.foreignTo!.tableName}_${k.foreignTo!.column}_right`
                const targetHandle = `${tableItem.tableName}_${k.name}_left`

                initialEdges.push({
                    "id": `reactflow__${sourceHandle}_${targetHandle}`,
                    "source": k.foreignTo!.tableName,
                    "sourceHandle": sourceHandle,
                    "target": tableItem.tableName,
                    "targetHandle": targetHandle,
                })
            }
        }

        const tableInfo = {
            tableName: tableItem.tableName,
            tableItems: tableItem.tableItems
        } 


        initNodes.push({ id: tableItem.tableName, type: 'textUpdater', position: { x: 0, y: 0 }, data: tableInfo })
    }  

    return {
        nodes: initNodes,
        edges: initialEdges
    }

}