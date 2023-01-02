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

        const tableItemsConvert = tableItem.items.map( v => {

            let baseObj = {
                title: v.name,
                type: v.dataType
            } as any

            if(v.isForeignKey || !!v.foreignTo){
                baseObj.nodeType = "target"
                baseObj.linkTo = v.foreignTo

                initialEdges.push({
                    "id": `reactflow__${v.foreignTo!.tableName}_${v.foreignTo!.column}_${tableItem.name}_${v.name}_left_MY`,
                    "source": v.foreignTo!.tableName,
                    "sourceHandle": `${v.foreignTo!.tableName}_${v.foreignTo!.column}_right`,
                    "target": tableItem.name,
                    "targetHandle": `${tableItem.name}_${v.name}_left`,
                })
            }

            return baseObj
        })

        const tableInfo = {
            tableName: tableItem.name,
            tableItems: tableItemsConvert
        } 

        console.log("HELLO", tableItemsConvert);
        

        initNodes.push({ id: tableItem.name, type: 'textUpdater', position: { x: 0, y: 0 }, data: tableInfo })
    }  

    return {
        nodes: initNodes,
        edges: initialEdges
    }

}