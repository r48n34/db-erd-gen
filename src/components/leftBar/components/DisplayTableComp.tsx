import { Accordion, Group, Text, Box, Badge } from '@mantine/core';
import { Table } from '../../../interface/inputData';

import DeleteTableBtn from './DeleteTableBtn';
import TableForm from './TableForm';
import useTableStore from '../../../store/zustandStore';

type DisplayTableCompProps = {
    data: Table[];
}
    
function DisplayTableComp({ data }: DisplayTableCompProps){
    
    const tableArray = useTableStore((state) => state.tableArray);

    return (
        <>
        <Accordion multiple>

            { data.map( v => (
                <Accordion.Item value={v.name} key={"tables" + v.name}>
                    <Accordion.Control>
                        <Text size={18} align="left">
                            {v.name}
                        </Text>
                    </Accordion.Control>

                    <Accordion.Panel>
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
