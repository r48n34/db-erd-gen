import { Accordion, Group, Text, Box, Badge, ScrollArea, Space, Code, Tooltip } from '@mantine/core';

import DeleteTableBtn from './DeleteTableBtn';
import TableForm from './TableForm';
import useTableStore from '../../../store/zustandStore';
import LeftTopBar from '../LeftTopBar';
import TableDataCRUD from '../../debug/TableDataCRUD';

function DisplayTableComp() {

    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
            <ScrollArea style={{ height: "88vh" }} mt={50}>

                <LeftTopBar />
                <Space h="sm" />

                <Accordion multiple variant="filled">

                    {tableArray.map(v => (
                        <Accordion.Item value={v.name} key={"tables" + v.name}>
                            <Accordion.Control>
                                <Text fz={18} ta="left">
                                    {v.name}
                                </Text>
                            </Accordion.Control>

                            <Accordion.Panel>

                                <Text fz={16} ta="center">
                                    <Code>
                                        {v.name}
                                    </Code>
                                </Text>

                                {v.columns.map(k => (
                                    <Box key={"tables_cols_" + k.name} mt={4}>
                                        <Group justify="space-between">
                                            <Text fz={14}>
                                                {k.name}{" "}
                                                {k.notNull && (
                                                    <Tooltip label="Not Null">
                                                    <Badge radius="sm" color="red" size="xs" variant="light">
                                                        (Not Null)
                                                    </Badge>
                                                    </Tooltip>
                                                )}
                                                {k.unique && (
                                                    <Tooltip label="Unique">
                                                        <Badge radius="sm" color="red" size="xs" variant="light">
                                                            (U)
                                                        </Badge>
                                                    </Tooltip>
                                                )}
                                            </Text>
                                            <Text fz={14}>
                                                {k.dataType}
                                            </Text>
                                        </Group>
                                        {k.foreignTo && (
                                            <Group ml={6}>
                                                <Badge radius="sm" size="xs" variant="light" mt={4}>
                                                    (FK) {k.foreignTo.name} {"->"} {k.foreignTo.column}
                                                </Badge>
                                            </Group>
                                        )}
                                    </Box>
                                ))}

                                <Group justify="space-between" mb={4} mt={16}>
                                    <DeleteTableBtn tableName={v.name} />

                                    <Group>
                                        <TableDataCRUD dataTable={v} />
                                        <TableForm mode={'edit'} allTableData={tableArray} editData={v} />
                                    </Group>
                                </Group>

                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}

                </Accordion>
            </ScrollArea>
        </>
    )
}

export default DisplayTableComp
