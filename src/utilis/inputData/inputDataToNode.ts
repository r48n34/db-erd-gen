import { Node, Edge } from "reactflow";
import { Table } from "../../interface/inputData";

export function inputDataToNodeAndEdges(tablesArr: Table[]){
    const initNodes: Node[] = [];
    const initialEdges: Edge[] = [];

    let initTableDistance = 200;

    for(let table of tablesArr){

        const name = table.name;

        // Create Edge checking
        for(let k of table.columns){
            if(!!k.foreignTo){

                const sourceHandle = `${k.foreignTo!.name}_${k.foreignTo!.column}_right`
                const targetHandle = `${name}_${k.name}_left`

                initialEdges.push({
                    "id": `reactflow__${sourceHandle}_${targetHandle}_gen`,
                    "source": k.foreignTo!.name,
                    "sourceHandle": sourceHandle,
                    "target": name,
                    "targetHandle": targetHandle,
                })
            }
        }

        const tableInfo = {
            name: name,
            columns: table.columns,
            position: table.position || { x: initTableDistance, y: 500 }
        } 

        initNodes.push({ 
            id: name, 
            type: 'textUpdater',
            position: table.position || { x: initTableDistance, y: 500 },
            data: tableInfo
        })

        initTableDistance += 250;
    } 

    return {
        nodes: initNodes,
        edges: initialEdges
    }

}