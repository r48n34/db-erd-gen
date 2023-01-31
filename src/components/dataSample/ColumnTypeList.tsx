import { Modal, Group, ActionIcon, Text, Tabs } from "@mantine/core";
import { useState } from "react";
import { postgresTypeArray, postgresTypeGroup } from "../../data/database/postgresType";
import { IconMessageCircle, IconPhoto, IconQuestionCircle, IconSettings } from '@tabler/icons';

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
                    {/* <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}>Gallery</Tabs.Tab>
                    <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>Messages</Tabs.Tab>
                    <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>Settings</Tabs.Tab> */}
                    { postgresTypeGroup.map( v => <Tabs.Tab value={v} icon={<IconSettings size={14} />}>{v}</Tabs.Tab> )}
                </Tabs.List>

                { postgresTypeGroup.map( v => (
                    <Tabs.Panel value={v} pt="xs">
                        { postgresTypeArray.filter( k => k.group === v).map( k => <Text>- {k.value}</Text>)}
                    </Tabs.Panel>
                ))}

            </Tabs>
        </Modal>
  
        <Group>
            <Text>Type</Text>
            <ActionIcon size="sm" onClick={ () => setOpened(true) }>
                <IconQuestionCircle size={14} />
            </ActionIcon>
        </Group>
        
      </>
    );
}
    
export default ColumnTypeList
