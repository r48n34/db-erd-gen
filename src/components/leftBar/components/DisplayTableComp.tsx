import { Accordion, Group, Text, Box, Badge } from '@mantine/core';

import DeleteTableBtn from './DeleteTableBtn';
import TableForm from './TableForm';
import useTableStore from '../../../store/zustandStore';

function DisplayTableComp(){
    
    const tableArray = useTableStore((state) => state.tableArray);
    const update = useTableStore((state) => state.update);

    return (
        <>
        <Accordion multiple>

            { tableArray.map( v => (
                <Accordion.Item value={v.name} key={"tables" + v.name}>
                    <Accordion.Control>
                        <Text size={18} align="left">
                            {v.name}
                        </Text>
                    </Accordion.Control>

                    <Accordion.Panel>
                        <Text size={14} align="center">
                            {v.name}
                        </Text>

                        { v.columns.map( k => (
                            <Box key={"tables_cols_" + k.name}>
                                <Group position="apart">                 
                                    <Text size={14}>{k.name} {k.foreignTo && <Badge size="xs">(FK)</Badge>}</Text>
                                    <Text size={14}>{k.dataType}</Text>
                                </Group>
                                { k.foreignTo && (
                                    <Text size={14} ml={6}> {k.foreignTo.name} {"->"} {k.foreignTo.column}</Text> 
                                )}
                            </Box>
                        ))}

                        <Group position="right">
                            <DeleteTableBtn tableName={v.name} />
                            <TableForm mode={'edit'} allTableData={tableArray} editData={v}  />
                        </Group>

                    </Accordion.Panel>
                </Accordion.Item>
            ))}

        </Accordion>
        </>
    )
}
    
export default DisplayTableComp
