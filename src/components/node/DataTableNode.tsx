import { useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { Card, Text, Group, Badge } from '@mantine/core';
import { TableData } from '../../interface/dataNode';

type DataTableNodeProps = {
    data: TableData
}

function DataTableNode({ data }: DataTableNodeProps){

    useEffect(() => {
        console.log(data);
    }, [data])
    
    return (
        <Card shadow="sm" radius="md" style={{ height: `${data.tableItems.length * 25}px`, padding: "10px", fontSize: "2px", width:"180px" }}>
        <div>

            <Card.Section >
                <Text size={15} align="center">
                    
                    <Badge size="lg">{data.tableName}</Badge>
                </Text>
            </Card.Section>

            { data.tableItems.map( (v,i) => {

                const nodeDistance = 45 + i * 19;

                const leftNodeName = `${data.tableName}_${v.title}_left`
                const rightNodeName = `${data.tableName}_${v.title}_right`
                
                return (
                    <div key={`${data.tableName}_${v.title}_rows`}>

                        <Group position="apart">                 
                            <Text size={8}>{v.title}</Text>
                            <Text size={8}>{v.type}</Text>
                        </Group>

                        <Handle type={v.nodeType || "source"} position={Position.Left} id={leftNodeName} style={{ top: nodeDistance }}/>
                        <Handle type={v.nodeType || "source"} position={Position.Right} id={rightNodeName} style={{ top: nodeDistance }}/>
                    </div>
                )
            }
            )}

        </div>
        </Card>
    );
}
    
export default DataTableNode
