import { ActionIcon, Button, Group, Modal, TextInput, Tooltip } from "@mantine/core";
import { IconCloudDownload } from "@tabler/icons";

import { commonSuccessActions, failedDeleteMessage } from "../../utilis/notificationUtilis";

import useTableStore from "../../store/zustandStore";
import useTemplateStoreStore from "../../store/templateStore";
import { useState } from "react";
    
function SavedSchemeBtn(){

    const [ opened, setOpened ] = useState<boolean>(false);
    const [ schemeName , setSchemeName ] = useState('');

    const addTemplate = useTemplateStoreStore((state) => state.addTemplate);
    const importTableObj = useTableStore((state) => state.tableArray);

    function addCurrentSchemeToTemplateList(){
        if(!schemeName){
            failedDeleteMessage("Please input a name.");
            return;
        }

        addTemplate(schemeName, importTableObj);
        commonSuccessActions();
        setOpened(false)
    }
    
    return (
        <>
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Name the template"
        >
            <TextInput
                placeholder="my_project"
                value={schemeName}
                onChange={(event) => setSchemeName(event.currentTarget.value)}
            />

            <Group position="right" mt={16}>
                <Button variant="light" onClick={ () => addCurrentSchemeToTemplateList() }>
                    Save
                </Button>
            </Group>
        </Modal>

        <Tooltip label="Save Current Scheme">
        <ActionIcon onClick={ () => setOpened(true) }>
            <IconCloudDownload size={16}/>
        </ActionIcon>
        </Tooltip>
        </>
    )
}
    
export default SavedSchemeBtn
