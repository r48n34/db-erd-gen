import { useCallback, useEffect, useMemo, useState } from 'react';
import ReactFlow, { 
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
    NodeChange,
    EdgeChange,
    Panel,
    Node,
    Edge,
} from 'reactflow';
import DataTableNode from './node/DataTableNode';
import { Badge } from '@mantine/core';

import { inputDataToNodeAndEdges } from '../utilis/inputData/inputDataToNode';
import useTableStore from '../store/zustandStore';

function ERTableComp(){

    const tableArray = useTableStore((state) => state.tableArray);
    const updateTablePositions = useTableStore((state) => state.updateTablePositions);
    const update = useTableStore((state) => state.update);

    const [nodes, setNodes] = useState<Node<any>[]>([]);
    const [edges, setEdges] = useState<Edge<any>[]>([]);

    useEffect(() => {
        const testData = inputDataToNodeAndEdges(tableArray);
        
        setNodes(testData.nodes)
        setEdges(testData.edges)
    }, [tableArray, update]);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => {
            setNodes((nds) => applyNodeChanges(changes, nds))
        },
        []
    );

    const onNodeDragStop = useCallback(
        (_: React.MouseEvent, node: Node,) => {
            updateTablePositions(node.data.name, node.position);
        },
        []
    );

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    const nodeTypes = useMemo(() => ({ textUpdater: DataTableNode }), []);

    return (
        <div style={{ height: '100%', width: "100%" }}>
        <ReactFlow 
            nodes={nodes}
            edges={edges}
            
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeDragStop={onNodeDragStop}

            nodeTypes={nodeTypes}
        >
            <Background />
            <Controls />
            <Panel position="top-right">
                <Badge>Table count: {nodes.length}</Badge>
            </Panel>
        </ReactFlow>
        </div>
    )
}
    
export default ERTableComp
