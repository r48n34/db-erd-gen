import { useCallback, useEffect, useMemo, useState } from 'react';
import ReactFlow, { 
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
    Node,
    Edge,
    NodeChange,
    EdgeChange,
    addEdge,
    Connection
} from 'reactflow';
import DataTableNode from './node/DataTableNode';
import { TableData } from '../interface/dataNode';

type ERTableCompProps = {
    data?: string;
}

const tableOne: TableData = {
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
const tableTwo: TableData  = {
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

const initialEdges: Edge[] = [
    {
        "id": "reactflow__edge-tableOnehello_one4_right-tableTwoyolo_one4_left",
        "source": "tableOne",
        "sourceHandle": "hello_one4_right",
        "target": "tableTwo",
        "targetHandle": "yolo_one4_left",
    }
] as any;

const initNodes: Node[] = [
    { id: 'tableOne', type: 'textUpdater', position: { x: 0, y: 0 }, data: tableOne },
    { id: 'tableTwo', type: 'textUpdater', position: { x: 0, y: 0 }, data: tableTwo },
];

function ERTableComp({ data }: ERTableCompProps){

    const [nodes, setNodes] = useState(initNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    // const onConnect = useCallback(
    //     (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    //     [setEdges]
    // );

    useEffect(() => {
        console.log(edges);
    }, [edges]);
    
    
    const nodeTypes = useMemo(() => ({ textUpdater: DataTableNode }), []);

    return (
        <div style={{ height: '100%', width: "100%" }}>
        <ReactFlow 
            nodes={nodes}
            edges={edges}
            
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            // onConnect={onConnect}

            nodeTypes={nodeTypes}
        >
            <Background />
            <Controls />
        </ReactFlow>
        </div>
    )
}
    
export default ERTableComp
