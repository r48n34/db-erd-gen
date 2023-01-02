import { useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { Card, Text, Group, Badge } from '@mantine/core';
// import { TableData } from '../../interface/dataNode';
import { InputTable } from '../../interface/inputData';

type DataTableNodeProps = {
    data: InputTable
}

function DataTableNode({ data }: DataTableNodeProps){

    useEffect(() => {
        console.log("DataTableNode", data);
    }, [data])
    
    return (
        <Card shadow="sm" radius="md" style={{ height: `${30 + data.tableItems.length * 25}px`, padding: "10px", fontSize: "2px", width:"180px" }}>
        <div>

            <Card.Section >
                <Text size={15} align="center">
                    
                    <Badge size="lg">{data.tableName}</Badge>
                </Text>
            </Card.Section>

            { data.tableItems.map( (v,i) => {

                const nodeDistance = 45 + i * 19;

                const leftNodeName = `${data.tableName}_${v.name}_left`
                const rightNodeName = `${data.tableName}_${v.name}_right`
                
                return (
                    <div key={`${data.tableName}_${v.name}_rows`}>

                        <Group position="apart">                 
                            <Text size={8}>{v.name}</Text>
                            <Text size={8}>{v.dataType}</Text>
                        </Group>

                        <Handle type={v.isForeignKey ? "target" : "source"} position={Position.Left} id={leftNodeName} style={{ top: nodeDistance }}/>
                        <Handle type={v.isForeignKey ? "target" : "source"} position={Position.Right} id={rightNodeName} style={{ top: nodeDistance }}/>
                    </div>
                )
            }
            )}

        </div>
        </Card>
    );
}
    
export default DataTableNode
