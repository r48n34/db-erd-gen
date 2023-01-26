import { useCallback, useEffect, useMemo, useState } from 'react';
import ReactFlow, { 
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
    NodeChange,
    EdgeChange,
    MiniMap,
    Panel,
    Node,
    Edge,
    addEdge,
    Connection
} from 'reactflow';
import DataTableNode from './node/DataTableNode';
import { Badge } from '@mantine/core';

import { inputDataToNodeAndEdges } from '../utilis/inputData/inputDataToNode';
import useTableStore from '../store/zustandStore';

function ERTableComp(){

    const tableArray = useTableStore((state) => state.tableArray);
    const update = useTableStore((state) => state.update);

    useEffect(() => {
        const testData = inputDataToNodeAndEdges(tableArray);
        setNodes(testData.nodes)
        setEdges(testData.edges)
    }, [tableArray, update]);

    const [nodes, setNodes] = useState<Node<any>[]>([]);
    const [edges, setEdges] = useState<Edge<any>[]>([]);

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

    // useEffect(() => {
    //     console.log(edges);
    //     console.log(nodes);
    // }, [nodes, edges]);
    
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
            {/* <MiniMap nodeStrokeWidth={2} zoomable pannable /> */}
            <Panel position="top-right">
                <Badge>Table count: {nodes.length}</Badge>
            </Panel>
        </ReactFlow>
        </div>
    )
}
    
export default ERTableComp
