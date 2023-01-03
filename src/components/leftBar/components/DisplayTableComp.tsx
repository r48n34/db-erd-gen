import { Accordion, Group, Text, Box } from '@mantine/core';
import { Table } from '../../../interface/inputData';

import DeleteTableBtn from './DeleteTableBtn';

type DisplayTableCompProps = {
    data: Table[];
}
    
function DisplayTableComp({ data }: DisplayTableCompProps){

    return (
        <>
        <Accordion multiple>

            { data.map( v => (
                <Accordion.Item value={v.name} key={"tables" + v.name}>
                    <Accordion.Control>
                        <Text>{v.name}</Text>
                    </Accordion.Control>

                    <Accordion.Panel>
                        <Group position="right">
                            <DeleteTableBtn tableName={v.name} />
                        </Group>
                        { v.columns.map( k => (
                            <Box key={"tables_cols_" + k.name}>
                                <Group position="apart">                 
                                    <Text size={10}>{k.name}</Text>
                                    <Text size={10}>{k.dataType}</Text>
                                </Group>
                                { k.foreignTo && (
                                    <Text size={10} ml={6}> {k.foreignTo.name} {"->"} {k.foreignTo.column}</Text> 
                                )}
                            </Box>
                        ))}
                    </Accordion.Panel>
                </Accordion.Item>
            ))}

        </Accordion>
        </>
    )
}
    
export default DisplayTableComp
