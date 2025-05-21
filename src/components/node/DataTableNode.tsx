import { Handle, Position } from 'reactflow';
import { Card, Text, Space, Badge, Grid, Box, Tooltip } from '@mantine/core';
import { Table } from '../../interface/inputData';
import TableForm from '../leftBar/components/TableForm';
import useTableStore from '../../store/zustandStore';

type DataTableNodeProps = {
    data: Table
}

function DataTableNode({ data }: DataTableNodeProps) {

    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <Card
            shadow="sm"
            radius="md"
            style={{ height: `${47 + data.columns.length * 28}px`, padding: "10px", fontSize: "2px", width: "320px" }}
        >
            <div>

                <Card.Section>
                    <Text fz={15} ta="center" mt={12}>
                        <Badge
                            size="lg"
                            tt="none"
                            radius={"md"}
                            rightSection={
                                <TableForm
                                    mode={'edit'}
                                    editData={data}
                                    allTableData={tableArray}

                                    size={14}
                                    color={"white"}
                                />
                            }
                        >
                            {data.name}
                        </Badge>
                    </Text>
                </Card.Section>

                <Space h="xs" />

                {data.columns.map((v, ind) => {

                    const nodeDistance = 54 + ind * 24;

                    const leftNodeName = `${data.name}_${v.name}_left`
                    const rightNodeName = `${data.name}_${v.name}_right`

                    return (
                        <Box key={`${data.name}_${v.name}_rows`}>
                            <Grid >
                                <Grid.Col span={2}>
                                    <Text fz={8}>
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
                                    <Tooltip label={v.name}>
                                    <Text fz={12}>
                                        {v.name && v.name.length >= 20 ? v.name.slice(0, 20) + "..." : v.name}
                                    </Text>
                                    </Tooltip>
                                </Grid.Col>

                                <Grid.Col span={4}>
                                    <Tooltip label={v.dataType}>
                                    <Text fz={12}>
                                        {v.dataType}
                                    </Text>
                                    </Tooltip>
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
                        </Box>
                    )
                }
                )}

            </div>
        </Card>
    );
}

export default DataTableNode
