import { Handle, Position } from 'reactflow';
import { Card, Text, Space, Badge, Grid } from '@mantine/core';
import { Table } from '../../interface/inputData';

type DataTableNodeProps = {
    data: Table
}

function DataTableNode({ data }: DataTableNodeProps){

    return (
        <Card 
            shadow="sm" 
            radius="md" 
            style={{ height: `${47 + data.columns.length * 28}px`, padding: "10px", fontSize: "2px", width:"230px" }}
        >
        <div>

            <Card.Section >
                <Text size={15} align="center">
                    <Badge size="lg">{data.name}</Badge>
                </Text>
            </Card.Section>

            <Space h="xs" />

            { data.columns.map( (v,i) => {

                const nodeDistance = 54 + i * 24;

                const leftNodeName = `${data.name}_${v.name}_left`
                const rightNodeName = `${data.name}_${v.name}_right`
                
                return (
                    <div key={`${data.name}_${v.name}_rows`}>
                        {/* <Group position="apart">                 
                            <Text size={8}>{v.name}</Text>
                            <Text size={8}>{v.dataType}</Text>
                        </Group> */}

                        <Grid >
                            <Grid.Col span={2}>
                                <Text size={8}>
                                    { 
                                        v.isPrimaryKey 
                                        ? "PK" 
                                        : !!v.foreignTo
                                        ? "FK"
                                        : ""
                                    }
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Text size={12}>{v.name}</Text>
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <Text size={12}>{v.dataType}</Text>
                            </Grid.Col>
                        </Grid>

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
