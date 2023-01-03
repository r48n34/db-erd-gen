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
    addEdge,
    Connection
} from 'reactflow';
import DataTableNode from './node/DataTableNode';
import { Badge } from '@mantine/core';

import { grandData } from '../data/testInputData';
import { inputDataToNodeAndEdges } from '../utilis/inputData/inputDataToNode';

type ERTableCompProps = {
    data?: string;
}

const testData = inputDataToNodeAndEdges(grandData);

function ERTableComp({ data }: ERTableCompProps){

    const [nodes, setNodes] = useState(testData.nodes);
    const [edges, setEdges] = useState(testData.edges);

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
            <MiniMap nodeStrokeWidth={3} zoomable pannable />
            <Panel position="top-right">
                <Badge>Table count: {nodes.length}</Badge>
            </Panel>
        </ReactFlow>
        </div>
    )
}
    
export default ERTableComp
