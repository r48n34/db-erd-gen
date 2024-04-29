import { Accordion, Group, Text, Box, Badge, ScrollArea, Space } from '@mantine/core';

import DeleteTableBtn from './DeleteTableBtn';
import TableForm from './TableForm';
import useTableStore from '../../../store/zustandStore';
import LeftTopBar from '../LeftTopBar';

function DisplayTableComp(){
    
    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <ScrollArea style={{ height: "88vh" }} mt={50}>

        <LeftTopBar/>
        <Space h="sm"/>

        <Accordion multiple>

            { tableArray.map( v => (
                <Accordion.Item value={v.name} key={"tables" + v.name}>
                    <Accordion.Control>
                        <Text fz={18} ta="left">
                            {v.name}
                        </Text>
                    </Accordion.Control>

                    <Accordion.Panel>

                        <Group justify="space-between" mb={4}>
                            <DeleteTableBtn tableName={v.name} />
                            <TableForm mode={'edit'} allTableData={tableArray} editData={v}  />
                        </Group>

                        { v.columns.map( k => (
                            <Box key={"tables_cols_" + k.name} mt={4}>
                                <Group justify="space-between">                 
                                    <Text fz={14}>
                                        {k.name}{" "}
                                        {k.notNull && <Badge color="red" size="xs" variant="light">(Not Null)</Badge>}
                                        {k.unique  && <Badge color="red" size="xs" variant="light">(U)</Badge>}
                                    </Text>
                                    <Text fz={14}>
                                        {k.dataType}
                                    </Text>
                                </Group>
                                { k.foreignTo && (
                                    <Group ml={6}>
                                        <Badge size="xs" variant="light" mt={4}>(FK) {k.foreignTo.name} {"->"} {k.foreignTo.column}</Badge>
                                        {/* <Text fz={14} >
                                            {k.foreignTo.name} {"->"} {k.foreignTo.column}
                                        </Text>  */}
                                    </Group>
                                )}
                            </Box>
                        ))}

                    </Accordion.Panel>
                </Accordion.Item>
            ))}

        </Accordion>
        </ScrollArea>
        </>
    )
}
    
export default DisplayTableComp
