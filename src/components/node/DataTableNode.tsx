// import { useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { Card, Text, Group, Badge } from '@mantine/core';
// import { TableData } from '../../interface/dataNode';
import { Table } from '../../interface/inputData';

type DataTableNodeProps = {
    data: Table
}

function DataTableNode({ data }: DataTableNodeProps){

    // useEffect(() => {
    //     console.log("DataTableNode", data);
    // }, [data])
    
    return (
        <Card 
            shadow="sm" 
            radius="md" 
            style={{ height: `${35 + data.columns.length * 22}px`, padding: "10px", fontSize: "2px", width:"180px" }}
        >
        <div>

            <Card.Section >
                <Text size={15} align="center">
                    <Badge size="lg">{data.name}</Badge>
                </Text>
            </Card.Section>

            { data.columns.map( (v,i) => {

                const nodeDistance = 45 + i * 19;

                const leftNodeName = `${data.name}_${v.name}_left`
                const rightNodeName = `${data.name}_${v.name}_right`
                
                return (
                    <div key={`${data.name}_${v.name}_rows`}>

                        <Group position="apart">                 
                            <Text size={8}>{v.name}</Text>
                            <Text size={8}>{v.dataType}</Text>
                        </Group>

                        <Handle 
                            type={!!v.foreignTo ? "target" : "source"} 
                            position={Position.Left} id={leftNodeName} 
                            style={{ top: nodeDistance, width: "0px", minWidth: "0px" }}
                        />
                        <Handle 
                            type={!!v.foreignTo ? "target" : "source"} 
                            position={Position.Right} id={rightNodeName} 
                            style={{ top: nodeDistance, width: "0px", minWidth: "0px" }}
                        />
                    </div>
                )
            }
            )}

        </div>
        </Card>
    );
}
    
export default DataTableNode
