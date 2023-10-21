import { Accordion, Group, Text, Box, Badge, ScrollArea } from '@mantine/core';

import DeleteTableBtn from './DeleteTableBtn';
import TableForm from './TableForm';
import useTableStore from '../../../store/zustandStore';

function DisplayTableComp(){
    
    const tableArray = useTableStore((state) => state.tableArray);
    // const update = useTableStore((state) => state.update);

    return (
        <>
        <ScrollArea style={{ height: "88vh" }} mt={4}>
        <Accordion multiple>

            { tableArray.map( v => (
                <Accordion.Item value={v.name} key={"tables" + v.name}>
                    <Accordion.Control>
                        <Text size={18} align="left">
                            {v.name}
                        </Text>
                    </Accordion.Control>

                    <Accordion.Panel>
                        {/* <Text size={14} align="center">
                            {v.name}
                        </Text> */}

                        <Group position="apart" mb={4}>
                            <DeleteTableBtn tableName={v.name} />
                                {/* <Text size={14} align="center">
                                {v.name}
                                </Text> */}
                            <TableForm mode={'edit'} allTableData={tableArray} editData={v}  />
                        </Group>

                        { v.columns.map( k => (
                            <Box key={"tables_cols_" + k.name}>
                                <Group position="apart">                 
                                    <Text size={14}>
                                        {k.name}{" "}
                                        {/* {k.foreignTo && <Badge size="xs">(FK)</Badge>} */}
                                        {k.notNull && <Badge color="red" size="xs">(Not Null)</Badge>}
                                    </Text>
                                    <Text size={14}>{k.dataType}</Text>
                                </Group>
                                { k.foreignTo && (
                                    <Group ml={6}>
                                        <Badge size="xs">(FK)</Badge>
                                        <Text size={14} > {k.foreignTo.name} {"->"} {k.foreignTo.column}</Text> 
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
