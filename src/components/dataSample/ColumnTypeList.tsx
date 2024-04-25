import { Modal, Group, ActionIcon, Text, Tabs } from "@mantine/core";
import { useState } from "react";
import { postgresTypeArray, postgresTypeGroup } from "../../data/database/postgresType";
import { IconQuestionCircle, IconSettings } from '@tabler/icons';

function ColumnTypeList(){
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Modal
            size={"lg"}
            opened={opened}
            onClose={() => setOpened(false)}
            title="Postgres Type List"
        >
            <Tabs>
                <Tabs.List>
                    { postgresTypeGroup.map( v => (
                        <Tabs.Tab key={v} value={v} leftSection={<IconSettings size={14} />}>
                            {v}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>

                { postgresTypeGroup.map( v => (
                    <Tabs.Panel value={v} pt="xs" key={v}>
                        { postgresTypeArray
                            .filter( k => k.group === v )
                            .map( k => <Text key={k.value}>- {k.value}</Text> )
                        }
                    </Tabs.Panel>
                ))}

            </Tabs>
        </Modal>
  
        <Group>
            <Text fw={600} fz={14}>Type</Text>
            <ActionIcon variant="light" size="sm" onClick={ () => setOpened(true) }>
                <IconQuestionCircle size={14} />
            </ActionIcon>
        </Group>
        
      </>
    );
}
    
export default ColumnTypeList
