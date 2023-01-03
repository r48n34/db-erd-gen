import { Accordion, Group, Text } from '@mantine/core';
import { Table } from '../../../interface/inputData';

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
                        {v.name}
                    </Accordion.Control>
                    <Accordion.Panel>
                        { v.columns.map( k => (
                            <Group position="apart" key={"tables_cols_" + k.name}>                 
                                <Text size={10}>{k.name}</Text>
                                <Text size={10}>{k.dataType}</Text>
                            </Group>
                        ))}
                    </Accordion.Panel>
                </Accordion.Item>
            ))}

        </Accordion>
        </>
    )
}
    
export default DisplayTableComp
